import React from "react";
import { AbsoluteFill, Img, interpolate, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import { Sparkles, Smartphone, Send, CheckCircle2 } from "lucide-react";
import { COLORS, FONT } from "../../ad/theme";

export const Scene2HumanDiscovery: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = interpolate(frame, [0, 180], [1.0, 1.07], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const banner = spring({
    frame: frame - 6,
    fps,
    config: { damping: 16, mass: 0.9 },
  });

  const muthuBubble = spring({
    frame: frame - 12,
    fps,
    config: { damping: 14, mass: 0.8 },
  });

  const waBadge = spring({
    frame: frame - 50,
    fps,
    config: { damping: 12, mass: 0.7, stiffness: 150 },
  });

  return (
    <AbsoluteFill style={{ overflow: "hidden", backgroundColor: COLORS.ink, fontFamily: FONT }}>
      {/* Background Image with Ken Burns */}
      <AbsoluteFill
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "50% 40%",
        }}
      >
        <Img
          src={staticFile("footage/scene2_shopkeeper_phone.jpg")}
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
            "linear-gradient(to bottom, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.1) 35%, rgba(10,8,6,0.2) 60%, rgba(10,8,6,0.92) 100%)",
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
            backgroundColor: "rgba(34, 139, 34, 0.92)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
          }}
        >
          <Sparkles size={24} color="#FFF" />
          <span
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#FFF",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            டிஜிட்டல் தீர்வு – KADAIBOOK!
          </span>
        </div>
      </div>

      {/* Floating WhatsApp Sent Pill */}
      {frame >= 40 && (
        <div
          style={{
            position: "absolute",
            right: 60,
            top: 360,
            opacity: waBadge,
            transform: `scale(${waBadge}) rotate(4deg)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "16px 26px",
              borderRadius: 20,
              backgroundColor: "#25D366",
              color: "#FFF",
              boxShadow: "0 15px 35px rgba(37, 211, 102, 0.4)",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            <Send size={24} color="#FFF" />
            <span>வாட்ஸ்அப் பில் அனுப்பியாச்சு!</span>
            <CheckCircle2 size={24} color="#FFF" />
          </div>
        </div>
      )}

      {/* Dialogue: Muthu telling customer (Frames 12 to 120) */}
      {frame >= 12 && frame < 125 && (
        <div
          style={{
            position: "absolute",
            left: 50,
            right: 50,
            top: 480,
            opacity: muthuBubble,
            transform: `translateY(${(1 - muthuBubble) * 20}px)`,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.96)",
              borderRadius: 24,
              padding: "20px 26px",
              boxShadow: "0 15px 35px rgba(0,0,0,0.35)",
              border: "3px solid #2E7D32",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
              <Smartphone size={22} color="#2E7D32" />
              <span style={{ fontSize: 20, fontWeight: 800, color: "#2E7D32" }}>முத்து (புன்னகையுடன்):</span>
            </div>
            <div style={{ fontSize: 32, fontWeight: 800, color: "#212121", lineHeight: 1.3 }}>
              &ldquo;கவலைப்படாதீங்க! பில் வாட்ஸ்அப்லயே வந்தாச்சு!&rdquo;
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
          <Sparkles size={26} color={COLORS.gold} />
          <span
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: COLORS.gold,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            SMART DIGITAL BILLING IN SECONDS
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
          நோட்டுல தேடாதீங்க! KadaiBook இருக்கு!
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 600,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          No more searching ledgers. Complete customer dues on WhatsApp!
        </div>
      </div>
    </AbsoluteFill>
  );
};
