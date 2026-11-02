import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { AlertCircle, Clock, BookOpen, User } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";

export const Scene1HumanChaos: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 180], [1.0, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const custBubble = spring({
    frame: frame - 3,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const muthuBubble = spring({
    frame: frame - 95,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Image with Ken Burns */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 50%",
        }}
      >
        <Img
          src={staticFile("footage/ad3_scene1_chaos.jpg")}
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
            "linear-gradient(to bottom, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.1) 35%, rgba(10,8,6,0.2) 60%, rgba(10,8,6,0.92) 100%)",
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
            backgroundColor: "rgba(196, 69, 54, 0.92)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        >
          <BookOpen size={24} color="#FFF" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            மளிகைக் கடை நோட்டுப் புத்தகக் குழப்பம்
          </span>
        </div>
      </div>

      {/* Dialogue 1: Customer Impatient (Frames 3 to 92) */}
      {frame >= 3 && frame < 94 && (
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            top: 420,
            opacity: custBubble,
            transform: `translateY(${(1 - custBubble) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              borderRadius: 24,
              padding: "20px 26px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
              border: "3px solid #E65100",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <User size={22} color="#E65100" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#E65100" }}>வாடிக்கையாளர் செல்வம்:</span>
              <Clock size={18} color="#666" />
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#212121", lineHeight: 1.3 }}>
              &ldquo;அண்ணாச்சி சீக்கிரம்! என் பாக்கி எவ்வளவு?&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* Dialogue 2: Muthu struggling (Frames 94 to 180) */}
      {frame >= 94 && (
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
              boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
              border: "3px solid #C62828",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <AlertCircle size={22} color="#C62828" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#C62828" }}>கடைக்காரர் முத்து:</span>
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#212121", lineHeight: 1.3 }}>
              &ldquo;இருப்பா… நோட்டுல பக்கத்தையே காணோம்!&rdquo;
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
          <AlertCircle size={26} color={COLORS.terra} />
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: COLORS.terra,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            LOST IN PAGES & MINUTES WASTED
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
          பழைய நோட்டுல கணக்கு தேடி டென்ஷனா?
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Frustrated finding customer balance in handwritten daybooks?
        </div>
      </div>
    </AbsoluteFill>
  );
};
