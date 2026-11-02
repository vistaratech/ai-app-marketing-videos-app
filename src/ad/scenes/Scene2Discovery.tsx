import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { BadgeCheck, Sparkles, Smartphone, Zap } from "lucide-react";
import { COLORS, FONT } from "../theme";
import { FloatingPill } from "../components/Chip";

export const Scene2Discovery: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Smooth cinematic slow motion
  const scale = interpolate(frame, [0, 150], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 8,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const appBadge = spring({
    frame: frame - 25,
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 130 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Cinematic Photo */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 45%",
        }}
      >
        <Img
          src={staticFile("footage/scene2_shopkeeper_phone.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Cinematic Lighting & Warm Glow Overlay */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(16,10,6,0.6) 0%, rgba(16,10,6,0.1) 30%, rgba(16,10,6,0.25) 60%, rgba(16,10,6,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Soft phone glow overlay */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          width: 500,
          height: 500,
          borderRadius: 250,
          background: "radial-gradient(circle, rgba(232, 168, 56, 0.25) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Discovery Badge */}
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
            டிஜிட்டல் தீர்வு · THE DIGITAL UPGRADE
          </span>
        </div>
      </div>

      {/* Floating KadaiBook App Badge */}
      <div
        style={{
          position: "absolute",
          top: 380,
          left: 60,
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "16px 24px",
          borderRadius: 24,
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          boxShadow: "0 20px 45px rgba(0,0,0,0.35)",
          border: `2px solid ${COLORS.gold}`,
          opacity: appBadge,
          transform: `scale(${0.7 + appBadge * 0.3}) rotate(-4deg)`,
        }}
      >
        <Img
          src={staticFile("brand/kadaibook-icon.png")}
          style={{ width: 56, height: 56, borderRadius: 14 }}
        />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 24, fontWeight: 900, color: COLORS.ink }}>KadaiBook</span>
          <span style={{ fontSize: 16, fontWeight: 600, color: COLORS.muted }}>Digital Ledger</span>
        </div>
      </div>

      {/* Floating Feature Pills */}
      <div style={{ position: "absolute", right: 60, top: 460 }}>
        <FloatingPill
          icon={Zap}
          text="100% Digital & Easy"
          background={COLORS.goldDark}
          start={24}
          rotate={6}
        />
      </div>

      <div style={{ position: "absolute", right: 80, top: 720 }}>
        <FloatingPill
          icon={BadgeCheck}
          text="GST & WhatsApp Ready"
          background={COLORS.green}
          start={38}
          rotate={-3}
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
          border: "1px solid rgba(232, 168, 56, 0.3)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 40}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <Smartphone size={28} color={COLORS.gold} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            KADAIBOOK ARRIVES
          </span>
        </div>

        <div
          style={{
            fontSize: 46,
            fontWeight: 800,
            color: "#FFF",
            lineHeight: 1.25,
            marginBottom: 12,
          }}
        >
          இனி கவலையே வேண்டாம்! கடைபுக் வந்தாச்சு!
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
          }}
        >
          Say goodbye to manual books — manage your entire shop digitally!
        </div>
      </div>
    </AbsoluteFill>
  );
};

