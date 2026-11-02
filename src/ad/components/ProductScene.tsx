import React from "react";
import { AbsoluteFill } from "remotion";
import type { LucideIcon } from "lucide-react";
import { useAdLayout } from "../layout";
import { COLORS, FONT } from "../theme";
import { Eyebrow, Headline, Rise, type Line } from "./Text";
import { ScreenCard } from "./ScreenCard";
import { StatChip } from "./Chip";

export type ChipSpec = {
  icon: LucideIcon;
  label: string;
  value: string;
  color?: string;
  soft?: string;
};

export const ProductScene: React.FC<{
  eyebrow: string;
  lines: Line[];
  subline?: string;
  src: string;
  chips: ChipSpec[];
  overlay?: React.ReactNode;
  floating?: React.ReactNode;
  cardStart?: number;
  accent?: string;
}> = ({ eyebrow, lines, subline, src, chips, overlay, floating, cardStart = 4, accent = COLORS.terra }) => {
  const layout = useAdLayout();
  const titleHeight = lines.length * layout.titleSize * 1.03;

  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <div style={{ position: "absolute", left: layout.headerX, top: layout.eyebrowTop }}>
        <Eyebrow color={accent} start={0}>
          {eyebrow}
        </Eyebrow>
      </div>

      <div
        style={{
          position: "absolute",
          left: layout.headerX,
          top: layout.titleTop,
          width: layout.titleWidth,
        }}
      >
        <Headline
          lines={lines}
          size={layout.titleSize}
          start={3}
          align="left"
        />
      </div>

      {subline ? (
        <Rise
          start={8}
          distance={24}
          style={{
            position: "absolute",
            left: layout.headerX,
            top: layout.titleTop + titleHeight + 20,
            width: layout.vertical ? 900 : 700,
          }}
        >
          <div
            style={{
              fontFamily: FONT,
              fontSize: layout.vertical ? 30 : 28,
              lineHeight: 1.35,
              fontWeight: 500,
              color: COLORS.muted,
              letterSpacing: "-0.01em",
            }}
          >
            {subline}
          </div>
        </Rise>
      ) : null}

      <ScreenCard
        src={src}
        width={layout.cardW}
        height={layout.cardH}
        start={cardStart}
        tilt={layout.vertical ? 0 : -3}
        style={{ left: layout.cardX, top: layout.cardY }}
      >
        {overlay}
      </ScreenCard>

      <div
        style={{
          position: "absolute",
          left: layout.vertical ? 0 : layout.headerX,
          top: layout.chipsTop,
          width: layout.vertical ? layout.width : layout.chipW,
          display: "flex",
          flexDirection: layout.chipsDirection,
          justifyContent: "center",
          alignItems: "center",
          gap: layout.vertical ? 14 : 12,
        }}
      >
        {chips.map((chip, i) => (
          <StatChip
            key={chip.label}
            icon={chip.icon}
            label={chip.label}
            value={chip.value}
            color={chip.color}
            soft={chip.soft}
            width={layout.chipW}
            start={10 + i * 3}
          />
        ))}
      </div>

      {floating}
    </AbsoluteFill>
  );
};
