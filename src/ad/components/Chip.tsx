import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import type { LucideIcon } from "lucide-react";
import { COLORS, FONT, SHADOW } from "../theme";

export const StatChip: React.FC<{
  icon: LucideIcon;
  label: string;
  value: string;
  color?: string;
  soft?: string;
  start?: number;
  width?: number;
  style?: React.CSSProperties;
}> = ({
  icon: Icon,
  label,
  value,
  color = COLORS.terra,
  soft = COLORS.terraSoft,
  start = 0,
  width = 314,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 16, mass: 0.7, stiffness: 150 },
  });

  return (
    <div
      style={{
        width,
        display: "flex",
        alignItems: "center",
        gap: 13,
        padding: "13px 17px",
        borderRadius: 24,
        backgroundColor: "rgba(255, 252, 246, 0.94)",
        border: `1px solid ${COLORS.line}`,
        boxShadow: SHADOW.chip,
        opacity: p,
        transform: `translateY(${(1 - p) * 26}px) scale(${0.9 + p * 0.1})`,
        ...style,
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          flexShrink: 0,
          borderRadius: 15,
          backgroundColor: soft,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon size={24} color={color} strokeWidth={2.3} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 0 }}>
        <span
          style={{
            fontFamily: FONT,
            fontSize: 15,
            lineHeight: 1.1,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: COLORS.muted,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: FONT,
            fontSize: 27,
            lineHeight: 1.15,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            color,
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </span>
      </div>
    </div>
  );
};

export const FloatingPill: React.FC<{
  icon: LucideIcon;
  text: string;
  color?: string;
  background?: string;
  start?: number;
  rotate?: number;
  style?: React.CSSProperties;
}> = ({
  icon: Icon,
  text,
  color = COLORS.paper,
  background = COLORS.green,
  start = 0,
  rotate = 0,
  style,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 14, mass: 0.65, stiffness: 170 },
  });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 22px",
        borderRadius: 999,
        backgroundColor: background,
        boxShadow: "0 18px 40px rgba(84,45,28,0.22)",
        opacity: p,
        transform: `translateY(${(1 - p) * 28}px) scale(${0.8 + p * 0.2}) rotate(${rotate}deg)`,
        ...style,
      }}
    >
      <Icon size={24} color={color} strokeWidth={2.5} />
      <span
        style={{
          fontFamily: FONT,
          fontSize: 23,
          fontWeight: 700,
          letterSpacing: "-0.015em",
          color,
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
};

export const FeaturePill: React.FC<{
  icon: LucideIcon;
  text: string;
  color?: string;
  start?: number;
}> = ({ icon: Icon, text, color = COLORS.terra, start = 0 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - start, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "13px 20px",
        borderRadius: 999,
        backgroundColor: "rgba(255,252,246,0.86)",
        border: `1px solid ${COLORS.line}`,
        opacity: p,
        transform: `translateY(${(1 - p) * 20}px)`,
      }}
    >
      <Icon size={22} color={color} strokeWidth={2.4} />
      <span
        style={{
          fontFamily: FONT,
          fontSize: 22,
          fontWeight: 700,
          color: COLORS.ink,
          letterSpacing: "-0.01em",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </span>
    </div>
  );
};
