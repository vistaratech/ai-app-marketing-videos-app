import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Cloud, MessageCircle, ReceiptText, Sparkles } from "lucide-react";
import { useAdLayout } from "../layout";
import { COLORS, FONT } from "../theme";
import { BrandIcon, PlayBadge, Wordmark } from "../components/Brand";
import { FeaturePill } from "../components/Chip";
import { Headline, Rise } from "../components/Text";

const PANEL_GRADIENT = `linear-gradient(155deg, #BE5E50 0%, ${COLORS.terra} 42%, #963F35 100%)`;

const SparkleField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      {Array.from({ length: 14 }).map((_, i) => {
        const x = (i * 137 + 60) % 900;
        const y = (i * 233 + 110) % 1450;
        const twinkle = 0.25 + Math.abs(Math.sin(frame / 18 + i)) * 0.55;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 3 === 0 ? 7 : 4,
              height: i % 3 === 0 ? 7 : 4,
              borderRadius: "50%",
              backgroundColor: COLORS.gold,
              opacity: twinkle * 0.5,
            }}
          />
        );
      })}
    </>
  );
};

const QrBlock: React.FC<{ size: number; start: number }> = ({ size, start }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - start, fps, config: { damping: 200 } });
  const pad = Math.round(size * 0.055);
  const inner = size - pad * 2;

  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
        padding: pad,
        boxShadow: "0 18px 40px rgba(60,35,20,0.18)",
        opacity: p,
        transform: `scale(${0.9 + p * 0.1})`,
        position: "relative",
        flexShrink: 0,
      }}
    >
      <div style={{ position: "relative", width: inner, height: inner, overflow: "hidden", borderRadius: 8 }}>
        <Img
          src={staticFile("brand/play-qr.png")}
          style={{ width: "100%", height: "100%", display: "block" }}
        />
      </div>
    </div>
  );
};

const FreePill: React.FC<{ start: number }> = ({ start }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({ frame: frame - start, fps, config: { damping: 16, mass: 0.7 } });
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 9,
        padding: "11px 18px",
        borderRadius: 999,
        backgroundColor: COLORS.greenSoft,
        border: `1px solid ${COLORS.green}33`,
        opacity: p,
        transform: `translateY(${(1 - p) * 16}px)`,
      }}
    >
      <div style={{ width: 9, height: 9, borderRadius: 5, backgroundColor: COLORS.green }} />
      <span
        style={{
          fontFamily: FONT,
          fontSize: 19,
          fontWeight: 700,
          color: COLORS.greenDark,
          whiteSpace: "nowrap",
        }}
      >
        Free plan · 30 orders included
      </span>
    </div>
  );
};

export const EndScene: React.FC = () => {
  const layout = useAdLayout();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const panel = spring({ frame, fps, config: { damping: 200, mass: 1.1 } });
  const panelFade = interpolate(frame, [0, 5], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const cut = (delay: number) => spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const cta = cut(56);
  const footer = cut(110);

  if (!layout.vertical) {
    return (
      <AbsoluteFill style={{ fontFamily: FONT }}>
        <div
          style={{
            position: "absolute",
            left: 150,
            top: 76,
            width: 1620,
            height: 928,
            borderRadius: 64,
            background: PANEL_GRADIENT,
            boxShadow: "0 60px 140px rgba(84,45,28,0.35)",
            overflow: "hidden",
            opacity: panelFade,
            transform: `scale(${0.96 + panel * 0.04})`,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `repeating-linear-gradient(to bottom, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 63px, rgba(255,255,255,0.06) 64px)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 560,
              height: 560,
              borderRadius: 280,
              right: -160,
              top: -200,
              backgroundColor: COLORS.gold,
              opacity: 0.12,
            }}
          />
          <SparkleField />

          <div style={{ position: "absolute", left: 437, top: 212 }}>
            <BrandIcon size={206} start={4} rotate={-6} />
          </div>
          <Rise start={10} distance={34} style={{ position: "absolute", left: 150, top: 476, width: 780, display: "flex", justifyContent: "center" }}>
            <Wordmark size={112} color={COLORS.cream} accent={COLORS.gold} />
          </Rise>
          <div style={{ position: "absolute", left: 150, top: 626, width: 780, display: "flex", justifyContent: "center" }}>
            <Headline
              lines={[
                {
                  text: "Your shop, sorted.",
                  highlight: "sorted.",
                  highlightColor: COLORS.gold,
                  highlightTextColor: COLORS.ink,
                  textColor: COLORS.cream,
                },
              ]}
              size={50}
              start={18}
              align="center"
            />
          </div>
          <div
            style={{
              position: "absolute",
              left: 150,
              top: 716,
              width: 780,
              display: "flex",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <FeaturePill icon={ReceiptText} text="GST billing" color={COLORS.terra} start={28} />
            <FeaturePill icon={MessageCircle} text="WhatsApp bills" color={COLORS.green} start={32} />
            <FeaturePill icon={Cloud} text="Cloud sync" color={COLORS.blue} start={36} />
          </div>

          <div
            style={{
              position: "absolute",
              left: 930,
              top: 124,
              width: 620,
              height: 680,
              borderRadius: 40,
              backgroundColor: COLORS.paper,
              boxShadow: "0 30px 70px rgba(50,25,15,0.28)",
              opacity: cta,
              transform: `translateY(${(1 - cta) * 60}px)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingTop: 40,
            }}
          >
            <div style={{ fontFamily: FONT, fontSize: 22, fontWeight: 800, letterSpacing: "0.14em", color: COLORS.terra }}>
              DOWNLOAD THE APP
            </div>
            <div style={{ marginTop: 18 }}>
              <QrBlock size={252} start={64} />
            </div>
            <div
              style={{
                fontFamily: FONT,
                fontSize: 30,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: COLORS.ink,
                marginTop: 22,
              }}
            >
              Scan to download
            </div>
            <div style={{ marginTop: 14 }}>
              <PlayBadge width={310} />
            </div>
            <div style={{ marginTop: 18 }}>
              <FreePill start={110} />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              left: 120,
              bottom: 26,
              width: 900,
              display: "flex",
              justifyContent: "center",
              gap: 10,
              opacity: footer * 0.7,
            }}
          >
            <Sparkles size={18} color={COLORS.gold} />
            <span style={{ fontFamily: FONT, fontSize: 18, fontWeight: 500, color: COLORS.cream }}>
              play.google.com/store/apps/details?id=in.kadaibook.app
            </span>
          </div>
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <div
        style={{
          position: "absolute",
          left: 66,
          top: 158,
          width: 948,
          height: 1604,
          borderRadius: 64,
          background: PANEL_GRADIENT,
          boxShadow: "0 60px 140px rgba(84,45,28,0.38)",
          overflow: "hidden",
          opacity: panelFade,
          transform: `scale(${0.94 + panel * 0.06})`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `repeating-linear-gradient(to bottom, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 63px, rgba(255,255,255,0.06) 64px)`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 620,
            height: 620,
            borderRadius: 310,
            right: -220,
            top: -180,
            backgroundColor: COLORS.gold,
            opacity: 0.12,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 210,
            left: -200,
            bottom: -120,
            backgroundColor: COLORS.cream,
            opacity: 0.07,
          }}
        />
        <SparkleField />

        <div
          style={{
            position: "absolute",
            top: 214,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Sparkles size={22} color={COLORS.gold} />
          <span
            style={{
              fontFamily: FONT,
              fontSize: 20,
              fontWeight: 800,
              letterSpacing: "0.22em",
              color: COLORS.gold,
            }}
          >
            KADAIBOOK
          </span>
          <Sparkles size={22} color={COLORS.gold} />
        </div>

        <div style={{ position: "absolute", left: 0, top: 300, width: "100%", display: "flex", justifyContent: "center" }}>
          <BrandIcon size={218} start={4} rotate={-6} />
        </div>
        <Rise start={10} distance={34} style={{ position: "absolute", left: 0, top: 572, width: "100%", display: "flex", justifyContent: "center" }}>
          <Wordmark size={128} color={COLORS.cream} accent={COLORS.gold} />
        </Rise>
        <div style={{ position: "absolute", left: 0, top: 736, width: "100%", display: "flex", justifyContent: "center" }}>
          <Headline
            lines={[
              {
                text: "Your shop, sorted.",
                highlight: "sorted.",
                highlightColor: COLORS.gold,
                highlightTextColor: COLORS.ink,
                textColor: COLORS.cream,
              },
            ]}
            size={54}
            start={18}
            align="center"
          />
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 848,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 820,
              borderRadius: 40,
              backgroundColor: COLORS.paper,
              boxShadow: "0 30px 70px rgba(50,25,15,0.28)",
              opacity: cta,
              transform: `translateY(${(1 - cta) * 60}px)`,
              padding: "34px 36px",
              display: "flex",
              alignItems: "center",
              gap: 34,
            }}
          >
            <QrBlock size={252} start={64} />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0 }}>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 18,
                  fontWeight: 800,
                  letterSpacing: "0.16em",
                  color: COLORS.terra,
                }}
              >
                DOWNLOAD THE APP
              </span>
              <span
                style={{
                  fontFamily: FONT,
                  fontSize: 36,
                  fontWeight: 800,
                  letterSpacing: "-0.04em",
                  color: COLORS.ink,
                  marginTop: 6,
                }}
              >
                Scan to download
              </span>
              <div style={{ marginTop: 14 }}>
                <PlayBadge width={310} />
              </div>
              <div style={{ marginTop: 16 }}>
                <FreePill start={110} />
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 1404,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <FeaturePill icon={ReceiptText} text="GST billing" color={COLORS.terra} start={28} />
          <FeaturePill icon={MessageCircle} text="WhatsApp bills" color={COLORS.green} start={32} />
          <FeaturePill icon={Cloud} text="Cloud sync" color={COLORS.blue} start={36} />
        </div>

        <div
          style={{
            position: "absolute",
            left: 0,
            top: 1530,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            opacity: footer * 0.72,
          }}
        >
          <Sparkles size={18} color={COLORS.gold} />
          <span style={{ fontFamily: FONT, fontSize: 20, fontWeight: 500, color: COLORS.cream }}>
            play.google.com/store/apps/details?id=in.kadaibook.app
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};
