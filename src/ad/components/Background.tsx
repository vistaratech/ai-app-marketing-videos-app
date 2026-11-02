import React from "react";
import { AbsoluteFill, useCurrentFrame } from "remotion";
import { COLORS } from "../theme";

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.55'/%3E%3C/svg%3E\")";

export const Background: React.FC<{ accent?: string; marginLine?: number }> = ({
  accent = COLORS.terra,
  marginLine = 86,
}) => {
  const frame = useCurrentFrame();
  const drift = Math.sin(frame / 70);
  const drift2 = Math.cos(frame / 90);

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.cream, overflow: "hidden" }}>
      <AbsoluteFill
        style={{
          backgroundImage: [
            `radial-gradient(900px 900px at ${86 + drift * 1.5}% -8%, ${accent}22 0%, ${accent}00 62%)`,
            `radial-gradient(760px 760px at -8% ${92 + drift2 * 1.2}%, ${COLORS.gold}2b 0%, ${COLORS.gold}00 64%)`,
            `radial-gradient(520px 520px at 104% 78%, ${COLORS.green}14 0%, ${COLORS.green}00 70%)`,
          ].join(","),
        }}
      />

      <AbsoluteFill
        style={{
          backgroundImage: `repeating-linear-gradient(to bottom, ${COLORS.terra}00 0px, ${COLORS.terra}00 63px, ${COLORS.terra}0d 64px)`,
          opacity: 0.85,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: marginLine,
          width: 2,
          background: `linear-gradient(to bottom, ${COLORS.terra}00, ${COLORS.terra}22 18%, ${COLORS.terra}22 82%, ${COLORS.terra}00)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 760,
          height: 760,
          borderRadius: 380,
          right: -300,
          top: 120,
          background: accent,
          opacity: 0.055,
          filter: "blur(2px)",
          transform: `translateY(${drift * 22}px)`,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 460,
          height: 460,
          borderRadius: 230,
          left: -230,
          bottom: -120,
          background: COLORS.gold,
          opacity: 0.12,
          filter: "blur(1px)",
          transform: `translateY(${drift2 * 18}px)`,
        }}
      />

      <AbsoluteFill
        style={{
          backgroundImage: NOISE,
          opacity: 0.05,
          mixBlendMode: "multiply",
        }}
      />

      <AbsoluteFill
        style={{
          background: `radial-gradient(120% 90% at 50% 45%, transparent 55%, ${COLORS.creamDeep}66 100%)`,
        }}
      />
    </AbsoluteFill>
  );
};
