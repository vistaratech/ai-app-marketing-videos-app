import os
import sys
import json
import argparse
import subprocess
from pathlib import Path

# Supported regional voiceover voices
VOICE_MAP = {
    "ta": "ta-IN-ValluvarNeural",      # Tamil Male
    "ta-female": "ta-IN-PallaviNeural",# Tamil Female
    "en": "en-IN-PrabhatNeural",       # Indian English Male
    "en-female": "en-IN-NeerjaNeural", # Indian English Female
    "hi": "hi-IN-MadhurNeural",        # Hindi Male
    "hi-female": "hi-IN-SwaraNeural",  # Hindi Female
    "te": "te-IN-MohanNeural",         # Telugu Male
}

def generate_voiceover(text: str, output_path: str, voice_code: str = "ta"):
    voice = VOICE_MAP.get(voice_code, "ta-IN-ValluvarNeural")
    cmd = [
        "edge-tts",
        "--voice", voice,
        "--text", text,
        "--write-media", output_path
    ]
    print(f"🎙️ Generating voiceover [{voice}]: {text[:30]}...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"TTS Error: {res.stderr}")
        return False
    return True

def mix_campaign_audio(vo_files: list, bg_music_path: str, output_audio_path: str):
    """
    Mixes background music with 5 voiceover tracks timed for 30s video:
    Scene 1: 0.1s
    Scene 2: 5.2s
    Scene 3: 10.8s
    Scene 4: 19.8s
    Scene 5: 25.4s
    """
    print("🎵 Mixing soundtrack with audio ducking...")
    cmd = [
        "ffmpeg", "-y",
        "-i", bg_music_path,
        "-i", vo_files[0],
        "-i", vo_files[1],
        "-i", vo_files[2],
        "-i", vo_files[3],
        "-i", vo_files[4],
        "-filter_complex",
        (
            "[0:a]atrim=0:30,volume=0.20,afade=t=out:st=28.5:d=1.5[bg];"
            "[1:a]adelay=100|100[v1];"
            "[2:a]adelay=5200|5200[v2];"
            "[3:a]adelay=10800|10800[v3];"
            "[4:a]adelay=19800|19800[v4];"
            "[5:a]adelay=25400|25400[v5];"
            "[bg][v1][v2][v3][v4][v5]amix=inputs=6:duration=first:dropout_transition=2[aout]"
        ),
        "-map", "[aout]",
        "-t", "30",
        "-b:a", "192k",
        output_audio_path
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print(f"Audio mix error: {res.stderr}")
        return False
    return True

def render_campaign_video(props_file_path: str, output_video_path: str):
    print(f"🚀 Rendering Universal 9:16 Video to {output_video_path}...")
    cmd = [
        "npx.cmd" if os.name == "nt" else "npx",
        "remotion",
        "render",
        "UniversalAd",
        output_video_path,
        f"--props={props_file_path}"
    ]
    res = subprocess.run(cmd)
    return res.returncode == 0

def main():
    parser = argparse.ArgumentParser(description="AdForge AI - Universal Video Ad Engine")
    parser.add_argument("--config", help="Path to campaign JSON configuration file")
    parser.add_argument("--output", default="out/client-ad.mp4", help="Output MP4 file path")
    args = parser.parse_args()

    if not args.config:
        print("Please provide a campaign configuration: python scripts/adforge.py --config <path_to_config.json>")
        return

    with open(args.config, "r", encoding="utf-8") as f:
        campaign = json.load(f)

    brand_name = campaign.get("brand", {}).get("name", "App")
    print(f"✨ Starting automated video pipeline for [{brand_name}]...")

    # Check for VO scripts in config
    vo_scripts = campaign.get("voiceover_scripts", [])
    lang = campaign.get("language", "ta")
    
    if len(vo_scripts) == 5:
        os.makedirs("public/audio/client", exist_ok=True)
        vo_files = []
        for i, script in enumerate(vo_scripts):
            vo_path = f"public/audio/client/{brand_name.lower()}_vo_{i+1}.mp3"
            generate_voiceover(script, vo_path, voice_code=lang)
            vo_files.append(vo_path)

        soundtrack_out = f"public/audio/{brand_name.lower()}_soundtrack.mp3"
        bg_music = campaign.get("bg_music", "public/audio/source-music.mp3")
        mix_campaign_audio(vo_files, bg_music, soundtrack_out)
        
        # Update config with relative soundtrack url for Remotion
        campaign["soundtrackUrl"] = f"audio/{brand_name.lower()}_soundtrack.mp3"
        with open(args.config, "w", encoding="utf-8") as f:
            json.dump(campaign, f, indent=2, ensure_ascii=False)

    # Wrap in Remotion props structure
    props_payload = {"campaign": campaign}
    temp_props_path = f"scripts/temp_{brand_name.lower()}_props.json"
    with open(temp_props_path, "w", encoding="utf-8") as f:
        json.dump(props_payload, f, indent=2, ensure_ascii=False)

    success = render_campaign_video(temp_props_path, args.output)
    if success:
        print(f"🎉 SUCCESS! Video Ad generated at: {args.output}")
    else:
        print("❌ Video rendering failed.")

if __name__ == "__main__":
    main()

