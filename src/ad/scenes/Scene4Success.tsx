import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { HeartHandshake, Smile, Sparkles, TrendingUp } from "lucide-react";
import { COLORS, FONT } from "../theme";
import { FloatingPill } from "../components/Chip";

export const Scene4Success: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth cinematic slow motion
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
      {/* Background Cinematic Photo with subtle Ken Burns */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 50%",
        }}
      >
        <Img
          src={staticFile("footage/scene4_shopkeeper_success.jpg")}
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
            "linear-gradient(to bottom, rgba(16,10,6,0.6) 0%, rgba(16,10,6,0.08) 35%, rgba(16,10,6,0.2) 65%, rgba(16,10,6,0.92) 100%)",
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
            வெற்றிகரமான வியாபாரம் · THE RESULT
          </span>
        </div>
      </div>

      {/* Floating Success Badges */}
      <div style={{ position: "absolute", left: 60, top: 460 }}>
        <FloatingPill
          icon={TrendingUp}
          text="10x Faster Billing"
          background={COLORS.green}
          start={20}
          rotate={-5}
        />
      </div>

      <div style={{ position: "absolute", right: 60, top: 560 }}>
        <FloatingPill
          icon={HeartHandshake}
          text="Happy Customers"
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
          backgroundColor: "rgba(20, 15, 12, 0.88)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(46, 139, 87, 0.35)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 40}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <Smile size={28} color={COLORS.green} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.green,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            PEACEFUL BUSINESS
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
          கஸ்டமர்ஸும் ஹேப்பி, கடையில எல்லாமே சூப்பர் ஈஸி!
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
          }}
        >
          Fast checkout, zero calculation errors, and smooth daily cash flow!
        </div>
      </div>
    </AbsoluteFill>
  );
};
