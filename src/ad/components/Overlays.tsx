import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../theme";

export const HighlightRing: React.FC<{
  left: string;
  top: string;
  width: string;
  height: string;
  color?: string;
  delay?: number;
  label?: string;
  labelColor?: string;
  labelTextColor?: string;
}> = ({
  left,
  top,
  width,
  height,
  color = COLORS.green,
  delay = 18,
  label,
  labelColor,
  labelTextColor = COLORS.paper,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const pulse = 0.74 + Math.sin(frame / 6) * 0.2;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        border: `3px solid ${color}`,
        borderRadius: 18,
        boxShadow: `0 0 0 7px ${color}1f, 0 0 34px ${color}55`,
        opacity: p * pulse,
        transform: `scale(${1.04 - p * 0.04})`,
      }}
    >
      {label ? (
        <div
          style={{
            position: "absolute",
            right: 4,
            top: -24,
            padding: "8px 15px",
            borderRadius: 999,
            backgroundColor: labelColor ?? color,
            boxShadow: `0 8px 18px ${color}55`,
          }}
        >
          <span
            style={{
              fontFamily: FONT,
              fontSize: 18,
              fontWeight: 800,
              letterSpacing: "0.04em",
              color: labelTextColor,
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export const TapRipple: React.FC<{
  x: string;
  y: string;
  delay?: number;
  color?: string;
  size?: number;
}> = ({ x, y, delay = 10, color = COLORS.green, size = 46 }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;
  if (t < 0) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: 0,
        height: 0,
        zIndex: 10,
      }}
    >
      {[0, 1, 2].map((i) => {
        const wave = ((t + i * 12) % 36) / 36;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: -size / 2,
              top: -size / 2,
              width: size,
              height: size,
              borderRadius: "50%",
              border: `3px solid ${color}`,
              opacity: (1 - wave) * 0.75,
              transform: `scale(${0.5 + wave * 1.9})`,
            }}
          />
        );
      })}
      <div
        style={{
          position: "absolute",
          left: -9,
          top: -9,
          width: 18,
          height: 18,
          borderRadius: "50%",
          backgroundColor: color,
          boxShadow: `0 0 0 5px ${color}33`,
        }}
      />
    </div>
  );
};

export const ScanLine: React.FC<{
  top: number;
  left: number;
  width: number;
  height: number;
  color?: string;
}> = ({ top, left, width, height, color = COLORS.green }) => {
  const frame = useCurrentFrame();
  const progress = (frame % 90) / 90;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        height,
        borderRadius: 10,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: `${progress * 100}%`,
          height: 4,
          background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
          boxShadow: `0 0 18px ${color}`,
        }}
      />
    </div>
  );
};
