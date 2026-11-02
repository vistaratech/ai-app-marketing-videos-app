import React from "react";
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Cloud, MessageCircle, ReceiptText, Sparkles } from "lucide-react";
import { COLORS, FONT } from "../theme";
import { FeaturePill } from "../components/Chip";

const SparkleField: React.FC = () => {
  const frame = useCurrentFrame();
  return (
    <>
      {Array.from({ length: 16 }).map((_, i) => {
        const x = (i * 137 + 60) % 960;
        const y = (i * 233 + 110) % 1500;
        const twinkle = 0.3 + Math.abs(Math.sin(frame / 14 + i)) * 0.6;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: i % 3 === 0 ? 8 : 5,
              height: i % 3 === 0 ? 8 : 5,
              borderRadius: "50%",
              backgroundColor: COLORS.gold,
              opacity: twinkle * 0.6,
            }}
          />
        );
      })}
    </>
  );
};

export const Scene5EndCard: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({
    frame,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const cardEntrance = spring({
    frame: frame - 15,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.ink,
        fontFamily: FONT,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 54,
          top: 140,
          width: 972,
          height: 1640,
          borderRadius: 64,
          background: "linear-gradient(155deg, #C25648 0%, #A33A2D 45%, #6B2219 100%)",
          boxShadow: "0 60px 140px rgba(0,0,0,0.55)",
          overflow: "hidden",
          opacity: entrance,
          transform: `scale(${0.94 + entrance * 0.06})`,
        }}
      >
        {/* Repeating diagonal background texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(to bottom, rgba(255,255,255,0) 0px, rgba(255,255,255,0) 63px, rgba(255,255,255,0.06) 64px)",
          }}
        />

        {/* Ambient gold glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: 300,
            right: -150,
            top: -150,
            backgroundColor: COLORS.gold,
            opacity: 0.16,
          }}
        />

        <SparkleField />

        {/* Brand Icon */}
        <div
          style={{
            position: "absolute",
            top: 140,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: 44,
              backgroundColor: "#FFF",
              padding: 16,
              boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
              transform: "rotate(-4deg)",
            }}
          >
            <Img
              src={staticFile("brand/kadaibook-icon.png")}
              style={{ width: "100%", height: "100%", borderRadius: 30 }}
            />
          </div>
        </div>

        {/* EXACT FINAL TEXT 1: KadaiBook */}
        <div
          style={{
            position: "absolute",
            top: 360,
            left: 0,
            width: "100%",
            textAlign: "center",
            fontSize: 104,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            color: "#FFF",
          }}
        >
          KadaiBook
        </div>

        {/* EXACT FINAL TEXT 2: Your Shop's Digital Ledger */}
        <div
          style={{
            position: "absolute",
            top: 486,
            left: 0,
            width: "100%",
            textAlign: "center",
            fontSize: 44,
            fontWeight: 800,
            color: COLORS.gold,
            letterSpacing: "-0.02em",
          }}
        >
          Your Shop&apos;s Digital Ledger
        </div>

        {/* EXACT FINAL TEXT 3: Complete Shop Management in One App! */}
        <div
          style={{
            position: "absolute",
            top: 560,
            left: 60,
            right: 60,
            textAlign: "center",
            fontSize: 34,
            fontWeight: 700,
            color: "rgba(255,255,255,0.92)",
            lineHeight: 1.3,
          }}
        >
          Complete Shop Management in One App!
        </div>

        {/* Download Card Container */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 670,
            width: 850,
            borderRadius: 44,
            backgroundColor: "#FFFFFF",
            boxShadow: "0 35px 85px rgba(0,0,0,0.35)",
            padding: "40px 44px",
            transform: `translateX(-50%) translateY(${(1 - cardEntrance) * 40}px)`,
            opacity: cardEntrance,
            display: "flex",
            alignItems: "center",
            gap: 36,
          }}
        >
          {/* QR Code */}
          <div
            style={{
              width: 250,
              height: 250,
              borderRadius: 24,
              border: "2px solid rgba(0,0,0,0.08)",
              padding: 12,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img
              src={staticFile("brand/play-qr.png")}
              style={{ width: "100%", height: "100%", display: "block" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
            <span
              style={{
                fontSize: 18,
                fontWeight: 800,
                letterSpacing: "0.14em",
                color: COLORS.terra,
                textTransform: "uppercase",
              }}
            >
              DOWNLOAD FREE ON GOOGLE PLAY
            </span>

            <span
              style={{
                fontSize: 34,
                fontWeight: 900,
                letterSpacing: "-0.03em",
                color: COLORS.ink,
              }}
            >
              Scan to Download App
            </span>

            {/* Google Play Store Badge */}
            <div style={{ marginTop: 4 }}>
              <Img
                src={staticFile("brand/play-badge.png")}
                style={{ width: 290, display: "block" }}
              />
            </div>

            {/* EXACT FINAL TEXT 4: Start FREE with 30 Orders! */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 24px",
                borderRadius: 999,
                backgroundColor: COLORS.greenSoft,
                border: `2px solid ${COLORS.green}44`,
                marginTop: 6,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.green }} />
              <span
                style={{
                  fontSize: 22,
                  fontWeight: 900,
                  color: COLORS.greenDark,
                }}
              >
                Start FREE with 30 Orders!
              </span>
            </div>
          </div>
        </div>

        {/* Feature Pills Footer */}
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            gap: 14,
          }}
        >
          <FeaturePill icon={ReceiptText} text="GST billing" color={COLORS.terra} start={10} />
          <FeaturePill icon={MessageCircle} text="WhatsApp bills" color={COLORS.green} start={14} />
          <FeaturePill icon={Cloud} text="Cloud sync" color={COLORS.blue} start={18} />
        </div>

        {/* Bottom Play URL */}
        <div
          style={{
            position: "absolute",
            bottom: 50,
            left: 0,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            opacity: 0.8,
          }}
        >
          <Sparkles size={20} color={COLORS.gold} />
          <span style={{ fontSize: 22, fontWeight: 600, color: COLORS.cream }}>
            play.google.com/store/apps/details?id=in.kadaibook.app
          </span>
          <Sparkles size={20} color={COLORS.gold} />
        </div>
      </div>
    </AbsoluteFill>
  );
};
