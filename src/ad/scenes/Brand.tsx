import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { BadgeCheck, Cloud, MessageCircle, ReceiptText, Sparkles } from "lucide-react";
import { useAdLayout } from "../layout";
import { COLORS, FONT } from "../theme";
import { BrandIcon, Wordmark } from "../components/Brand";
import { FeaturePill } from "../components/Chip";
import { Rise } from "../components/Text";

export const BrandScene: React.FC = () => {
  const layout = useAdLayout();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const circle = spring({ frame: frame - 0, fps, config: { damping: 200, mass: 1.2 } });
  const badge = spring({
    frame: frame - 26,
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 140 },
  });

  const iconSize = layout.vertical ? 246 : 214;
  const iconTop = layout.vertical ? 520 : 250;
  const wordTop = layout.vertical ? 830 : 510;
  const taglineTop = layout.vertical ? 1000 : 660;
  const pillsTop = layout.vertical ? 1160 : 776;

  return (
    <AbsoluteFill style={{ fontFamily: FONT, overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          left: layout.width / 2 - (layout.vertical ? 470 : 420),
          top: layout.vertical ? 380 : 130,
          width: layout.vertical ? 940 : 840,
          height: layout.vertical ? 940 : 840,
          borderRadius: "50%",
          backgroundColor: COLORS.terra,
          opacity: 0.08,
          transform: `scale(${0.7 + circle * 0.3})`,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: layout.width / 2 - (layout.vertical ? 330 : 290),
          top: layout.vertical ? 520 : 250,
          width: layout.vertical ? 660 : 580,
          height: layout.vertical ? 660 : 580,
          borderRadius: "50%",
          border: `2px solid ${COLORS.gold}55`,
          transform: `scale(${0.82 + circle * 0.18}) rotate(${frame * 0.08}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: layout.width / 2 - iconSize / 2,
          top: iconTop,
        }}
      >
        <BrandIcon size={iconSize} start={6} rotate={-7} />
        <div
          style={{
            position: "absolute",
            right: -46,
            top: -18,
            display: "flex",
            alignItems: "center",
            gap: 9,
            padding: "12px 18px",
            borderRadius: 999,
            backgroundColor: COLORS.green,
            boxShadow: "0 16px 34px rgba(46,139,87,0.35)",
            opacity: badge,
            transform: `scale(${0.6 + badge * 0.4}) rotate(7deg)`,
          }}
        >
          <BadgeCheck size={22} color={COLORS.paper} strokeWidth={2.6} />
          <span
            style={{
              fontFamily: FONT,
              fontSize: 19,
              fontWeight: 800,
              letterSpacing: "0.08em",
              color: COLORS.paper,
            }}
          >
            GST READY
          </span>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          top: wordTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Rise start={16} distance={40}>
          <Wordmark size={layout.vertical ? 138 : 116} />
        </Rise>
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          top: taglineTop,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Rise start={28} distance={26}>
          <div
            style={{
              fontFamily: FONT,
              fontSize: layout.vertical ? 42 : 36,
              fontWeight: 600,
              color: COLORS.muted,
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
          >
            Orders, bills &amp; payments — sorted.
          </div>
        </Rise>
      </div>

      <div
        style={{
          position: "absolute",
          top: pillsTop,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          gap: layout.vertical ? 14 : 16,
          flexWrap: "nowrap",
        }}
      >
        <FeaturePill icon={ReceiptText} text="GST billing" color={COLORS.terra} start={40} />
        <FeaturePill icon={MessageCircle} text="WhatsApp bills" color={COLORS.green} start={44} />
        <FeaturePill icon={Cloud} text="Cloud sync" color={COLORS.blue} start={48} />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          top: layout.vertical ? 1450 : 900,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 12,
          opacity: 0.8,
        }}
      >
        <Sparkles size={20} color={COLORS.goldDark} />
        <span
          style={{
            fontFamily: FONT,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: "0.04em",
            color: COLORS.muted,
          }}
        >
          Made for Indian small businesses
        </span>
        <Sparkles size={20} color={COLORS.goldDark} />
      </div>
    </AbsoluteFill>
  );
};
