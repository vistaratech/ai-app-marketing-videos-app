import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Moon, Heart, Phone, Key, Check } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";

export const Scene4HappyClosing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 180], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const phoneCard = spring({
    frame: frame - 6,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const muthuBubble = spring({
    frame: frame - 100,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Image: Night Closing */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 50%",
        }}
      >
        <Img
          src={staticFile("footage/ad2_scene4_closing.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Cinematic Vignette */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.1) 35%, rgba(10,8,6,0.2) 60%, rgba(10,8,6,0.94) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: banner,
          transform: `translateY(${(1 - banner) * -30}px)`,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 28px",
            borderRadius: 999,
            backgroundColor: "rgba(46, 125, 50, 0.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        >
          <Moon size={24} color="#FFF" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            இரவு 9:00 மணி – நேரத்தோடு வீடு திரும்புதல்
          </span>
        </div>
      </div>

      {/* Wife Call Widget (Frames 0 to 95) */}
      {frame < 98 && (
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            top: 420,
            opacity: phoneCard,
            transform: `translateY(${(1 - phoneCard) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              borderRadius: 24,
              padding: "20px 26px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.4)",
              border: "3px solid #E91E63",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Phone size={22} color="#E91E63" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#E91E63" }}>மனைவி (போன் அழைப்பு):</span>
              <Heart size={20} color="#E91E63" />
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#212121", lineHeight: 1.3 }}>
              &ldquo;ஏங்க… இன்னைக்கு சீக்கிரம் வந்துடுவீங்களா?&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* Muthu Response (Frames 98 to 180) */}
      {frame >= 98 && (
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            top: 420,
            opacity: muthuBubble,
            transform: `translateY(${(1 - muthuBubble) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              borderRadius: 24,
              padding: "20px 26px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.4)",
              border: "3px solid #2E7D32",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Key size={22} color="#2E7D32" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#2E7D32" }}>முத்து (மகிழ்ச்சியுடன்):</span>
              <Check size={20} color="#2E7D32" />
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#212121", lineHeight: 1.3 }}>
              &ldquo;இதோ ஒன்பது மணிக்கே கிளம்பிட்டேன்மா!&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* Lower Third Cinematic Text Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 50,
          right: 50,
          padding: "32px 36px",
          borderRadius: 32,
          backgroundColor: "rgba(18, 14, 12, 0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 200, 150, 0.2)",
          boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 30}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <Heart size={26} color="#FF4081" />
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#FF80AB",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            PEACE OF MIND &amp; MORE TIME WITH FAMILY
          </span>
        </div>

        <div
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "#FFF",
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          கணக்கு பார்க்க மணிக்கணக்கா நிக்க வேண்டாம்!
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Close on time at 9:00 PM. Enjoy peaceful evenings with family!
        </div>
      </div>
    </AbsoluteFill>
  );
};
