import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { CheckCircle2, MessageCircle, FileText, Zap } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";

export const Scene3CustomerDelight: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 210], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const custBubble = spring({
    frame: frame - 5,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const appCard = spring({
    frame: frame - 110,
    fps,
    config: { damping: 15, mass: 0.85 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Image: Customer Delighted */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 45%",
        }}
      >
        <Img
          src={staticFile("footage/ad3_scene3_customer_happy.jpg")}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </AbsoluteFill>

      {/* Cinematic Vignette */}
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,8,6,0.65) 0%, rgba(10,8,6,0.1) 35%, rgba(10,8,6,0.2) 60%, rgba(10,8,6,0.92) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Top Banner */}
      <div
        style={{
          position: "absolute",
          top: 100,
          left: 0,
          width: "100%",
          display: "flex",
          justifyContent: "center",
          opacity: banner,
          transform: `translateY(${(1 - banner) * -30}px)`,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 28px",
            borderRadius: 999,
            backgroundColor: "rgba(18, 140, 126, 0.94)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        >
          <MessageCircle size={24} color="#FFF" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            உடனடி வாட்ஸ்அப் PDF பில் & மகிழ்ச்சி!
          </span>
        </div>
      </div>

      {/* Customer Reaction Dialogue (Frames 0 to 110) */}
      {frame < 115 && (
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            top: 420,
            opacity: custBubble,
            transform: `translateY(${(1 - custBubble) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              borderRadius: 24,
              padding: "22px 28px",
              boxShadow: "0 20px 45px rgba(0,0,0,0.4)",
              border: "3px solid #25D366",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Zap size={22} color="#25D366" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#25D366" }}>செல்வம் (ஆச்சரியமாக):</span>
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#111", lineHeight: 1.3 }}>
              &ldquo;அடேங்கப்பா! உடனே வாட்ஸ்அப்ல பில்லா! சூப்பர்!&rdquo;
            </div>
          </div>
        </div>
      )}

      {/* Actual App Bill Showcase Floating Card (Frames 115 to 210) */}
      {frame >= 110 && (
        <div
          style={{
            position: "absolute",
            top: 320,
            left: 90,
            right: 90,
            opacity: appCard,
            transform: `translateY(${(1 - appCard) * 30}px) scale(${0.95 + appCard * 0.05})`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 720,
              borderRadius: 32,
              overflow: "hidden",
              border: "6px solid #FFF",
              boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
              backgroundColor: "#FFF",
            }}
          >
            <div
              style={{
                backgroundColor: "#2E7D32",
                padding: "14px 24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#FFF",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <FileText size={22} color="#FFF" />
                <span style={{ fontSize: 20, fontWeight: 800, letterSpacing: "0.04em" }}>
                  KadaiBook Digital Bill
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 18, fontWeight: 700 }}>
                <CheckCircle2 size={20} color="#69F0AE" />
                <span>SENT TO WHATSAPP</span>
              </div>
            </div>
            <div style={{ width: "100%", height: 500, overflow: "hidden" }}>
              <Img
                src={staticFile("screenshots/shot-02.jpg")}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Lower Third Cinematic Text Overlay */}
      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 50,
          right: 50,
          padding: "32px 36px",
          borderRadius: 32,
          backgroundColor: "rgba(18, 14, 12, 0.92)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(255, 200, 150, 0.2)",
          boxShadow: "0 25px 70px rgba(0,0,0,0.6)",
          opacity: banner,
          transform: `translateY(${(1 - banner) * 30}px)`,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
          <CheckCircle2 size={26} color={COLORS.gold} />
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: COLORS.gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            100% SATISFIED CUSTOMERS &amp; EASY TRACKING
          </span>
        </div>

        <div
          style={{
            fontSize: 42,
            fontWeight: 800,
            color: "#FFF",
            lineHeight: 1.25,
            marginBottom: 8,
          }}
        >
          ரொக்கம், ஆன்லைன், பில்லிங் எல்லாம் ஒரே ஆப்ல!
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          Cash, UPI, WhatsApp Bills &amp; Customer Ledger in one smart app!
        </div>
      </div>
    </AbsoluteFill>
  );
};
