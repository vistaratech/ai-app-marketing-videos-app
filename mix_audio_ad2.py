import subprocess

# Timing for Ad 2 (30 seconds):
# Scene 1: 0 to 5s -> vo-1 at 100ms
# Scene 2: 5 to 10s -> vo-2 at 5200ms
# Scene 3: 10 to 20s -> vo-3 at 10800ms
# Scene 4: 20 to 26s -> vo-4 at 19800ms
# Scene 5: 26 to 30s -> vo-5 at 25400ms

cmd = [
    "ffmpeg", "-y",
    "-i", "public/audio/source-music.mp3",
    "-i", "public/audio/tamil/ad2_vo-1.mp3",
    "-i", "public/audio/tamil/ad2_vo-2.mp3",
    "-i", "public/audio/tamil/ad2_vo-3.mp3",
    "-i", "public/audio/tamil/ad2_vo-4.mp3",
    "-i", "public/audio/tamil/ad2_vo-5.mp3",
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
    "public/audio/soundtrack-tamil-ad2.mp3"
]

res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    print("Success! Created public/audio/soundtrack-tamil-ad2.mp3")

