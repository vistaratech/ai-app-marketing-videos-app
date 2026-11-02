import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { AlertTriangle, Calculator, Clock, Moon } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";
import { FloatingPill } from "../../ad/components/Chip";

export const Scene1NightTally: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 150], [1.0, 1.08], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 10,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const stamp = spring({
    frame: frame - 35,
    fps,
    config: { damping: 12, mass: 0.8, stiffness: 140 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Image with Ken Burns */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 65%",
        }}
      >
        <Img
          src={staticFile("footage/ad2_scene1_night_tally.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Night Atmosphere Vignette */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,6,0.7) 0%, rgba(10,8,6,0.15) 35%, rgba(10,8,6,0.3) 60%, rgba(10,8,6,0.94) 100%)",
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
            backgroundColor: "rgba(180, 86, 74, 0.92)",
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
            இரவு 10:30 மணி · NIGHT CLOSING STRUGGLE
          </span>
        </div>
      </div>

      {/* Floating Alert Pills */}
      <div style={{ position: "absolute", left: 60, top: 460 }}>
        <FloatingPill
          icon={Clock}
          text="TIME: 10:30 PM"
          background={COLORS.terra}
          start={20}
          rotate={-6}
        />
      </div>

      <div style={{ position: "absolute", right: 60, top: 560 }}>
        <FloatingPill
          icon={Calculator}
          text="கணக்கு இடிக்குது!"
          background={COLORS.goldDark}
          start={32}
          rotate={5}
        />
      </div>

      {/* Mismatch Stamp */}
      <div
        style={{
          position: "absolute",
          right: 80,
          top: 720,
          padding: "14px 28px",
          border: `4px double ${COLORS.terra}`,
          borderRadius: 12,
          color: COLORS.terra,
          fontSize: 36,
          fontWeight: 900,
          letterSpacing: "0.16em",
          opacity: stamp,
          transform: `rotate(-14deg) scale(${1.6 - stamp * 0.6})`,
          backgroundColor: "rgba(255, 245, 240, 0.94)",
          boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
        }}
      >
        CASH MISMATCH
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
          border: "1px solid rgba(255, 220, 180, 0.2)",
          boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 40}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
          <AlertTriangle size={28} color={COLORS.terra} />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: COLORS.terra,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            DAILY DAYBOOK HEADACHE
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
          ராத்திரி பத்து மணி வரைக்கும் உட்கார்ந்து கணக்கா?
        </div>

        <div
          style={{
            fontSize: 26,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
            lineHeight: 1.35,
          }}
        >
          Exhausted counting notes &amp; daybooks? Still can&apos;t go home on time?
        </div>
      </div>
    </AbsoluteFill>
  );
};

