import React from "react";
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import {
  BarChart3,
  CheckCircle2,
  MessageCircle,
  ReceiptText,
  Send,
  ShieldCheck,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { COLORS, FONT, SHADOW } from "../theme";
import { HighlightRing } from "../components/Overlays";

const ScreenFrame: React.FC<{
  src: string;
  overlay?: React.ReactNode;
}> = ({ src, overlay }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 860,
        height: 1000,
        borderRadius: 44,
        backgroundColor: "#FFFFFF",
        padding: "14px",
        boxShadow: "0 35px 85px rgba(84,45,28,0.22), 0 10px 25px rgba(0,0,0,0.12)",
        border: "3px solid rgba(84,45,28,0.12)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 32,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#FFF",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {overlay}
      </div>
    </div>
  );
};

export const Scene3AppShowcase: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // 4 sub-scenes of 75 frames each (total 300 frames = 10s):
  // Phase 0: 0 - 75 (Order & GST Billing)
  // Phase 1: 75 - 150 (WhatsApp Sharing)
  // Phase 2: 150 - 225 (Dues & Payment Reminders)
  // Phase 3: 225 - 300 (Stock & Reports)
  const phase = Math.min(3, Math.floor(frame / 75));
  const subFrame = frame % 75;

  const cardAnim = spring({
    frame: subFrame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });

  const waBubble = spring({
    frame: subFrame - 15,
    fps,
    config: { damping: 15, mass: 0.8 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        fontFamily: FONT,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Header */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 999,
            backgroundColor: COLORS.terra,
            color: "#FFF",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            boxShadow: "0 8px 20px rgba(180,86,74,0.3)",
          }}
        >
          {phase === 0 && "1. GST BILLING & ORDERS"}
          {phase === 1 && "2. 1-CLICK WHATSAPP SHARE"}
          {phase === 2 && "3. PAYMENT & DUES TRACKING"}
          {phase === 3 && "4. INVENTORY & BUSINESS REPORTS"}
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: COLORS.ink,
            textAlign: "center",
            letterSpacing: "-0.03em",
          }}
        >
          {phase === 0 && "ஆர்டர் & GST பில் நொடியில்!"}
          {phase === 1 && "வாட்ஸ்அப்லயே பில் அனுப்பலாம்!"}
          {phase === 2 && "பாக்கி பணம் தானாக வசூல்!"}
          {phase === 3 && "ஸ்டாக் & பிசினஸ் ரிப்போர்ட்ஸ்!"}
        </div>
      </div>

      {/* Centered Mockup with Actual KadaiBook Screenshots */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - cardAnim) * 40}px) scale(${0.96 + cardAnim * 0.04})`,
          opacity: cardAnim,
        }}
      >
        {phase === 0 && (
          <ScreenFrame
            src="screenshots/shot-04.jpg"
            overlay={
              <HighlightRing
                left="3.8%"
                top="51.0%"
                width="92.4%"
                height="6.4%"
                color={COLORS.blue}
                delay={10}
              />
            }
          />
        )}

        {phase === 1 && (
          <ScreenFrame
            src="screenshots/shot-03.jpg"
            overlay={
              <HighlightRing
                left="2.1%"
                top="35.2%"
                width="31.5%"
                height="4.5%"
                color={COLORS.gold}
                delay={8}
              />
            }
          />
        )}

        {phase === 2 && (
          <ScreenFrame
            src="screenshots/shot-06.jpg"
            overlay={
              <HighlightRing
                left="82.3%"
                top="56.2%"
                width="15.9%"
                height="4.7%"
                color={COLORS.terra}
                delay={10}
              />
            }
          />
        )}

        {phase === 3 && (
          <ScreenFrame
            src="screenshots/shot-05.jpg"
            overlay={
              <HighlightRing
                left="5.2%"
                top="25.9%"
                width="32.5%"
                height="5.2%"
                color={COLORS.green}
                delay={8}
              />
            }
          />
        )}
      </div>

      {/* Floating Info Cards and Badges */}
      {phase === 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <ReceiptText size={32} color={COLORS.blue} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>CGST + SGST</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.ink }}>Auto Split</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <CheckCircle2 size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Bill Total</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.ink }}>100% Accurate</div>
            </div>
          </div>
        </div>
      )}

      {phase === 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 130,
            left: 60,
            right: 60,
            borderRadius: 28,
            backgroundColor: "#075E54",
            padding: "24px 30px",
            boxShadow: "0 25px 60px rgba(7,94,84,0.35)",
            display: "flex",
            alignItems: "center",
            gap: 20,
            opacity: waBubble,
            transform: `translateY(${(1 - waBubble) * 30}px)`,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 28,
              backgroundColor: "#25D366",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <MessageCircle size={32} color="#075E54" fill="#25D366" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#FFF" }}>PDF Bill on WhatsApp</div>
            <div style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
              Send in 1 tap · Payment link included
            </div>
          </div>
          <ShieldCheck size={28} color="#25D366" />
        </div>
      )}

      {phase === 2 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Wallet size={32} color={COLORS.terra} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Pending Dues</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.terra }}>Live Tracking</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Send size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Reminders</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.green }}>1-Tap Alert</div>
            </div>
          </div>
        </div>
      )}

      {phase === 3 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <TrendingUp size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Daily Sales</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.ink }}>Real-Time</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <BarChart3 size={32} color={COLORS.blue} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Inventory</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.ink }}>Auto Updated</div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};
