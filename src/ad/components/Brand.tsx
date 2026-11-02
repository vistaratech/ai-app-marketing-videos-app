import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../theme";

export const BrandIcon: React.FC<{
  size: number;
  start?: number;
  rotate?: number;
  style?: React.CSSProperties;
}> = ({ size, start = 0, rotate = 0, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 14, mass: 0.8, stiffness: 120 },
  });

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.235,
        overflow: "hidden",
        boxShadow:
          "0 40px 90px rgba(84,45,28,0.28), 0 10px 24px rgba(84,45,28,0.16), inset 0 0 0 1px rgba(255,255,255,0.65)",
        opacity: p,
        transform: `scale(${0.6 + p * 0.4}) rotate(${(1 - p) * rotate}deg)`,
        flexShrink: 0,
        ...style,
      }}
    >
      <Img
        src={staticFile("brand/kadaibook-icon.png")}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
};

export const Wordmark: React.FC<{
  size: number;
  color?: string;
  accent?: string;
  style?: React.CSSProperties;
}> = ({ size, color = COLORS.ink, accent = COLORS.terra, style }) => {
  return (
    <div
      style={{
        fontFamily: FONT,
        fontSize: size,
        fontWeight: 800,
        letterSpacing: "-0.055em",
        lineHeight: 1,
        color,
        whiteSpace: "nowrap",
        ...style,
      }}
    >
      Kadai<span style={{ color: accent }}>Book</span>
    </div>
  );
};

export const PlayBadge: React.FC<{ width: number; style?: React.CSSProperties }> = ({
  width,
  style,
}) => {
  return (
    <Img
      src={staticFile("brand/play-badge.png")}
      style={{
        width,
        height: (width * 250) / 646,
        display: "block",
        ...style,
      }}
    />
  );
};
