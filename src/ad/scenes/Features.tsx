import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import {
  BarChart3,
  Cloud,
  FileText,
  MessageCircle,
  Package,
  Palette,
  ReceiptText,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useAdLayout } from "../layout";
import { COLORS, FONT, SHADOW } from "../theme";
import { Eyebrow, Headline, Rise } from "../components/Text";
import { FeaturePill, FloatingPill } from "../components/Chip";

type Feature = {
  icon: LucideIcon;
  title: string;
  caption: string;
  color: string;
  soft: string;
};

const FEATURES: Feature[] = [
  { icon: Package, title: "Product Catalog", caption: "Save items, rates & units", color: COLORS.goldDark, soft: COLORS.goldSoft },
  { icon: Wallet, title: "Expenses", caption: "Track every rupee out", color: COLORS.terra, soft: COLORS.terraSoft },
  { icon: FileText, title: "Estimates", caption: "Quote, then convert", color: COLORS.blue, soft: COLORS.blueSoft },
  { icon: Palette, title: "Bill Templates", caption: "8 styles + UPI QR", color: COLORS.purple, soft: COLORS.purpleSoft },
  { icon: BarChart3, title: "Reports", caption: "Inflow vs outflow", color: COLORS.green, soft: COLORS.greenSoft },
  { icon: Cloud, title: "Cloud Sync", caption: "Backed up, always", color: COLORS.sky, soft: COLORS.skySoft },
];

const FeatureTile: React.FC<{
  feature: Feature;
  width: number;
  height: number;
  start: number;
}> = ({ feature, width, height, start }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 17, mass: 0.8, stiffness: 130 },
  });
  const Icon = feature.icon;

  return (
    <div
      style={{
        width,
        height,
        borderRadius: 28,
        backgroundColor: "rgba(255,252,246,0.94)",
        border: `1px solid ${COLORS.line}`,
        boxShadow: SHADOW.soft,
        padding: "24px 26px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 13,
        opacity: p,
        transform: `translateY(${(1 - p) * 40}px) scale(${0.93 + p * 0.07})`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: 18,
            backgroundColor: feature.soft,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon size={28} color={feature.color} strokeWidth={2.2} />
        </div>
        <span
          style={{
            fontFamily: FONT,
            fontSize: 30,
            fontWeight: 800,
            letterSpacing: "-0.035em",
            color: COLORS.ink,
            lineHeight: 1.08,
          }}
        >
          {feature.title}
        </span>
      </div>
      <span
        style={{
          fontFamily: FONT,
          fontSize: 20,
          fontWeight: 500,
          color: COLORS.muted,
          letterSpacing: "-0.01em",
        }}
      >
        {feature.caption}
      </span>
    </div>
  );
};

export const FeaturesScene: React.FC = () => {
  const layout = useAdLayout();
  const gap = 16;
  const tileW = (layout.gridW - gap * (layout.gridColumns - 1)) / layout.gridColumns;
  const tileH = layout.vertical ? 250 : 200;
  const gridLeft = layout.vertical ? (layout.width - layout.gridW) / 2 : layout.width - 110 - layout.gridW;

  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <div style={{ position: "absolute", left: layout.headerX, top: layout.eyebrowTop }}>
        <Eyebrow color={COLORS.goldDark} start={0}>
          All in one place
        </Eyebrow>
      </div>
      <div style={{ position: "absolute", left: layout.headerX, top: layout.titleTop, width: layout.titleWidth }}>
        <Headline
          lines={[
            { text: "One app." },
            { text: "Your whole shop.", highlight: "whole shop.", highlightColor: COLORS.gold },
          ]}
          size={layout.titleSize}
          start={3}
        />
      </div>
      <Rise
        start={8}
        distance={24}
        style={{
          position: "absolute",
          left: layout.headerX,
          top: layout.titleTop + layout.titleSize * 2.06 + 20,
          width: layout.vertical ? 900 : 700,
        }}
      >
        <div
          style={{
            fontFamily: FONT,
            fontSize: layout.vertical ? 30 : 28,
            fontWeight: 500,
            lineHeight: 1.35,
            color: COLORS.muted,
          }}
        >
          Catalog, expenses, quotes, reports, sync — without the app-hopping.
        </div>
      </Rise>

      {!layout.vertical ? (
        <div style={{ position: "absolute", left: layout.headerX, top: 560 }}>
          <FloatingPill
            icon={Sparkles}
            text="6 tools · 1 app"
            background={COLORS.terra}
            start={18}
            rotate={-2}
          />
        </div>
      ) : null}

      <div
        style={{
          position: "absolute",
          left: gridLeft,
          top: layout.gridTop,
          width: layout.gridW,
          display: "grid",
          gridTemplateColumns: `repeat(${layout.gridColumns}, ${tileW}px)`,
          gap,
        }}
      >
        {FEATURES.map((feature, i) => (
          <FeatureTile
            key={feature.title}
            feature={feature}
            width={tileW}
            height={tileH}
            start={8 + i * 3}
          />
        ))}
      </div>

      {layout.vertical ? (
        <>
          <div
            style={{
              position: "absolute",
              top: 1416,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: 14,
            }}
          >
            <FeaturePill icon={ReceiptText} text="GST billing" color={COLORS.terra} start={30} />
            <FeaturePill icon={MessageCircle} text="WhatsApp bills" color={COLORS.green} start={34} />
            <FeaturePill icon={Cloud} text="Cloud sync" color={COLORS.sky} start={38} />
          </div>
          <div
            style={{
              position: "absolute",
              top: 1534,
              left: 0,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              opacity: 0.72,
            }}
          >
            <Sparkles size={20} color={COLORS.goldDark} />
            <span style={{ fontFamily: FONT, fontSize: 24, fontWeight: 600, color: COLORS.muted }}>
              No spreadsheets. No extra apps.
            </span>
            <Sparkles size={20} color={COLORS.goldDark} />
          </div>
        </>
      ) : null}
    </AbsoluteFill>
  );
};
