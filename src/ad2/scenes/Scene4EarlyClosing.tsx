import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Bike, Home, Key, Sparkles } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";
import { FloatingPill } from "../../ad/components/Chip";

export const Scene4EarlyClosing: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 180], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 10,
    fps,
    config: { damping: 16, mass: 0.9 },
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
          src={staticFile("footage/ad2_scene4_closing.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Cinematic Lighting & Contrast Overlay */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.08) 35%, rgba(10,8,6,0.2) 65%, rgba(10,8,6,0.92) 100%)",
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
            backgroundColor: "rgba(46, 139, 87, 0.95)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        >
          <Sparkles size={24} color="#FFF" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            சீக்கிரம் வீடு திரும்பலாம் · EARLY CLOSING
          </span>
        </div>
      </div>

      {/* Floating Badges */}
      <div style={{ position: "absolute", left: 60, top: 460 }}>
        <FloatingPill
          icon={Key}
          text="Shop Locked by 9:00 PM"
          background={COLORS.green}
          start={20}
          rotate={-5}
        />
      </div>

      <div style={{ position: "absolute", right: 60, top: 560 }}>
        <FloatingPill
          icon={Bike}
          text="Going Home Early"
          background={COLORS.goldDark}
          start={32}
          rotate={4}
        />
      </div>

      {/* Lower Third Cinematic Text Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 50,
          right: 50,
          padding: "36px 40px",
          borderRadius: 36,
          backgroundColor: "rgba(16, 12, 10, 0.90)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(46, 139, 87, 0.35)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 40}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <Home size={28} color={COLORS.green} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.green,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            PEACEFUL EVENING
          </span>
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 800,
            color: "#FFF",
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          சீக்கிரமா கடையை மூடிட்டு நிம்மதியா வீட்டுக்குப் போகலாம்!
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
          }}
        >
          No daily balance mismatch. 100% peaceful business with KadaiBook!
        </div>
      </div>
    </AbsoluteFill>
  );
};
