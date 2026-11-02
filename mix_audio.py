import subprocess

# Voiceover offsets (in seconds)
# Scene 1: 0-5s -> 0.2s
# Scene 2: 5-10s -> 5.2s
# Scene 3: 10-20s -> 10.3s
# Scene 4: 20-26s -> 20.1s
# Scene 5: 26-30s -> 25.6s

cmd = [
    "ffmpeg", "-y",
    "-i", "public/audio/source-music.mp3",
    "-i", "public/audio/tamil/vo-1.mp3",
    "-i", "public/audio/tamil/vo-2.mp3",
    "-i", "public/audio/tamil/vo-3.mp3",
    "-i", "public/audio/tamil/vo-4.mp3",
    "-i", "public/audio/tamil/vo-5.mp3",
    "-filter_complex",
    (
        "[0:a]atrim=0:30,volume=0.22,afade=t=out:st=28.5:d=1.5[bg];"
        "[1:a]adelay=200|200[v1];"
        "[2:a]adelay=5200|5200[v2];"
        "[3:a]adelay=10300|10300[v3];"
        "[4:a]adelay=20100|20100[v4];"
        "[5:a]adelay=25600|25600[v5];"
        "[bg][v1][v2][v3][v4][v5]amix=inputs=6:duration=first:dropout_transition=2[aout]"
    ),
    "-map", "[aout]",
    "-t", "30",
    "-b:a", "192k",
    "public/audio/soundtrack-tamil.mp3"
]

res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode != 0:
    print("Error:", res.stderr)
else:
    print("Success! Created public/audio/soundtrack-tamil.mp3")

