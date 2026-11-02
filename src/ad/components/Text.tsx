import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS, FONT } from "../theme";

export type Line = {
  text: string;
  highlight?: string;
  highlightColor?: string;
  highlightTextColor?: string;
  textColor?: string;
};

export const Eyebrow: React.FC<{
  children: React.ReactNode;
  start?: number;
  color?: string;
  align?: "left" | "center";
  style?: React.CSSProperties;
}> = ({ children, start = 0, color = COLORS.terra, align = "left", style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - start, fps, config: { damping: 200 } });

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap: 16,
        opacity: p,
        transform: `translateY(${(1 - p) * 18}px)`,
        ...style,
      }}
    >
      <div
        style={{
          width: 40,
          height: 3,
          borderRadius: 2,
          backgroundColor: color,
          transform: `scaleX(${p})`,
          transformOrigin: "left center",
        }}
      />
      <span
        style={{
          fontFamily: FONT,
          fontSize: 24,
          lineHeight: 1,
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color,
        }}
      >
        {children}
      </span>
    </div>
  );
};

const Highlighted: React.FC<{
  line: Line;
  start: number;
  markerProgress: number;
}> = ({ line, start, markerProgress }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const color = line.highlightColor ?? COLORS.gold;
  const isDark =
    color !== COLORS.gold && color !== COLORS.goldSoft && color !== COLORS.cream;
  const matchColor =
    line.highlightTextColor ??
    (isDark ? COLORS.paper : COLORS.ink);
  const index = line.highlight ? line.text.indexOf(line.highlight) : -1;

  if (!line.highlight || index === -1) {
    return <span style={{ color: line.textColor ?? COLORS.ink }}>{line.text}</span>;
  }

  const before = line.text.slice(0, index);
  const match = line.text.slice(index, index + line.highlight.length);
  const after = line.text.slice(index + line.highlight.length);
  const markScale = spring({
    frame: frame - start - 3,
    fps,
    config: { damping: 200, mass: 0.8 },
  });
  // Dark highlights use a full-height chip so cream text never spills
  // above the marker onto the cream page background.
  const markHeight = isDark ? "0.98em" : "0.62em";
  const markBottom = isDark ? "0.01em" : "0.02em";
  const markRadius = isDark ? "0.16em" : "0.12em";

  return (
    <span style={{ color: line.textColor ?? COLORS.ink }}>
      {before}
      <span style={{ position: "relative", display: "inline-block", whiteSpace: "nowrap" }}>
        <span
          style={{
            position: "absolute",
            left: "-0.06em",
            right: "-0.06em",
            bottom: markBottom,
            height: markHeight,
            borderRadius: markRadius,
            backgroundColor: color,
            transform: `scaleX(${markScale * markerProgress})`,
            transformOrigin: "left center",
            zIndex: 0,
          }}
        />
        <span style={{ position: "relative", zIndex: 1, color: matchColor }}>{match}</span>
      </span>
      {after}
    </span>
  );
};

export const Headline: React.FC<{
  lines: Line[];
  start?: number;
  stagger?: number;
  size?: number;
  align?: "left" | "center";
  style?: React.CSSProperties;
}> = ({ lines, start = 0, stagger = 4, size = 94, align = "left", style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: align === "center" ? "center" : "flex-start",
        gap: 0,
        ...style,
      }}
    >
      {lines.map((line, i) => {
        const delay = start + i * stagger;
        const p = spring({
          frame: frame - delay,
          fps,
          config: { damping: 200, mass: 0.9 },
        });
        return (
          <div
            key={i}
            style={{
              fontFamily: FONT,
              fontSize: size,
              lineHeight: 1.03,
              fontWeight: 800,
              letterSpacing: "-0.042em",
              whiteSpace: "nowrap",
              opacity: p,
              transform: `translateY(${(1 - p) * 54}px)`,
              textAlign: align,
            }}
          >
            <Highlighted line={line} start={delay} markerProgress={1} />
          </div>
        );
      })}
    </div>
  );
};

export const Rise: React.FC<{
  children: React.ReactNode;
  start?: number;
  distance?: number;
  style?: React.CSSProperties;
}> = ({ children, start = 0, distance = 44, style }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - start, fps, config: { damping: 200 } });
  return (
    <div
      style={{
        opacity: p,
        transform: `translateY(${(1 - p) * distance}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
