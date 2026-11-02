import React from "react";
import { Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, SHADOW } from "../theme";

export const ScreenCard: React.FC<{
  src: string;
  width: number;
  height: number;
  style?: React.CSSProperties;
  start?: number;
  tilt?: number;
  zoom?: number;
  radius?: number;
  children?: React.ReactNode;
}> = ({
  src,
  width,
  height,
  style,
  start = 0,
  tilt = 0,
  zoom = 0.035,
  radius = 42,
  children,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 200, mass: 1.05 },
  });
  const local = Math.max(0, frame - start);
  const float = Math.sin(local / 52) * 5;
  const slowZoom = 1 + Math.min(local, 150) * (zoom / 150);

  return (
    <div
      style={{
        position: "absolute",
        width,
        height,
        borderRadius: radius,
        opacity: p,
        transform: `translateY(${(1 - p) * 120 + float}px) perspective(1700px) rotateY(${tilt * (1 - p)}deg)`,
        zIndex: 5,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: radius,
          backgroundColor: COLORS.paper,
          boxShadow: SHADOW.card,
          border: "9px solid rgba(255, 252, 246, 0.94)",
          overflow: "hidden",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transform: `scale(${slowZoom})`,
            transformOrigin: "50% 40%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(118deg, rgba(255,255,255,0.22) 0%, rgba(255,255,255,0) 26%, rgba(255,255,255,0) 72%, rgba(255,255,255,0.10) 100%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: radius - 9,
            boxShadow: "inset 0 0 0 1px rgba(84,45,28,0.12)",
            pointerEvents: "none",
          }}
        />
      </div>
      {children}
    </div>
  );
};
