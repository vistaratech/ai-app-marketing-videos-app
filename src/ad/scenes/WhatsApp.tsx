import React from "react";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Check, CheckCheck, CheckCircle2, FileText, MessageCircle, ShieldCheck } from "lucide-react";
import { ProductScene } from "../components/ProductScene";
import { HighlightRing } from "../components/Overlays";
import { useAdLayout } from "../layout";
import { COLORS, FONT } from "../theme";

const WhatsAppBubble: React.FC<{ start?: number }> = ({ start = 28 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 16, mass: 0.85, stiffness: 130 },
  });

  return (
    <div
      style={{
        position: "absolute",
        width: 560,
        borderRadius: 26,
        backgroundColor: COLORS.paper,
        boxShadow: "0 34px 80px rgba(60,40,20,0.34), 0 8px 20px rgba(60,40,20,0.16)",
        opacity: p,
        transform: `translateX(${(1 - p) * 120}px) translateY(${(1 - p) * 30}px) rotate(${(1 - p) * 4 - 1.5}deg) scale(${0.9 + p * 0.1})`,
        overflow: "hidden",
        zIndex: 20,
      }}
    >
      <div
        style={{
          height: 74,
          backgroundColor: "#075E54",
          display: "flex",
          alignItems: "center",
          gap: 12,
          padding: "0 22px",
        }}
      >
        <div
          style={{
            width: 46,
            height: 46,
            borderRadius: 23,
            backgroundColor: "#25D366",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MessageCircle size={26} color="#075E54" fill="#25D366" strokeWidth={2.6} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <span style={{ fontFamily: FONT, fontSize: 24, fontWeight: 700, color: "#FFFFFF" }}>
            KadaiBook
          </span>
          <span
            style={{
              fontFamily: FONT,
              fontSize: 15,
              fontWeight: 500,
              color: "rgba(255,255,255,0.72)",
              letterSpacing: "0.02em",
            }}
          >
            Business account
          </span>
        </div>
        <ShieldCheck size={22} color="rgba(255,255,255,0.7)" style={{ marginLeft: "auto" }} />
      </div>

      <div style={{ padding: "20px 24px 16px", position: "relative" }}>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: COLORS.muted,
          }}
        >
          Invoice #0002
        </div>
        <div
          style={{
            fontFamily: FONT,
            fontSize: 48,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            color: COLORS.ink,
            marginTop: 2,
          }}
        >
          ₹82,600
        </div>

        <div
          style={{
            marginTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 14px",
            borderRadius: 14,
            backgroundColor: COLORS.greenSoft,
            border: `1px solid ${COLORS.green}33`,
          }}
        >
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              backgroundColor: COLORS.paper,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 10px rgba(46,139,87,0.15)",
            }}
          >
            <FileText size={23} color={COLORS.green} strokeWidth={2.4} />
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontFamily: FONT, fontSize: 19, fontWeight: 700, color: COLORS.ink }}>
              Invoice_0002.pdf
            </span>
            <span style={{ fontFamily: FONT, fontSize: 15, fontWeight: 500, color: COLORS.muted }}>
              PDF · 2 pages · GST bill
            </span>
          </div>
          <Check size={22} color={COLORS.green} style={{ marginLeft: "auto" }} strokeWidth={3} />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 7,
            marginTop: 12,
          }}
        >
          <span style={{ fontFamily: FONT, fontSize: 15, color: COLORS.muted }}>9:28 am</span>
          <CheckCheck size={19} color="#34B7F1" strokeWidth={2.6} />
        </div>
      </div>
    </div>
  );
};

export const WhatsAppScene: React.FC = () => {
  const layout = useAdLayout();

  return (
    <>
      <ProductScene
        eyebrow="Share instantly"
        lines={[
          { text: "Send the bill." },
          { text: "Get paid faster.", highlight: "faster.", highlightColor: COLORS.green },
        ]}
        subline="One tap to WhatsApp — no printing, no waiting."
        src="screenshots/shot-03.jpg"
        accent={COLORS.green}
        cardStart={4}
        overlay={
          <HighlightRing
            left="2.1%"
            top="35.2%"
            width="31.5%"
            height="4.5%"
            color={COLORS.gold}
            delay={10}
          />
        }
        chips={[
          {
            icon: MessageCircle,
            label: "Delivery",
            value: "WhatsApp",
            color: COLORS.green,
            soft: COLORS.greenSoft,
          },
          {
            icon: FileText,
            label: "Format",
            value: "PDF bill",
            color: COLORS.blue,
            soft: COLORS.blueSoft,
          },
          {
            icon: CheckCircle2,
            label: "Payment",
            value: "Paid",
            color: COLORS.green,
            soft: COLORS.greenSoft,
          },
        ]}
      />
      <div
        style={{
          position: "absolute",
          left: layout.vertical ? 420 : 1180,
          top: layout.vertical ? 1040 : 560,
        }}
      >
        <WhatsAppBubble start={26} />
      </div>
    </>
  );
};
