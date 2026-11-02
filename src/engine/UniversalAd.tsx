import React from "react";
import {
  AbsoluteFill,
  Audio,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { AdCampaignConfig } from "./types";
import { defaultCampaign } from "./defaultCampaign";

export const UniversalAd: React.FC<{ campaign?: AdCampaignConfig }> = ({
  campaign = defaultCampaign,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Timing constants (30s @ 30fps = 900 frames)
  const SCENE1_DUR = 150; // 0 - 5s
  const SCENE2_DUR = 150; // 5 - 10s
  const SCENE3_DUR = 300; // 10 - 20s
  const SCENE4_DUR = 180; // 20 - 26s
  const SCENE5_DUR = 120; // 26 - 30s

  const S1_START = 0;
  const S2_START = 150;
  const S3_START = 300;
  const S4_START = 600;
  const S5_START = 780;

  return (
    <AbsoluteFill style={{ backgroundColor: "#020617", overflow: "hidden", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      {/* Background Audio Soundtrack */}
      {campaign.soundtrackUrl && (
        <Audio src={staticFile(campaign.soundtrackUrl)} />
      )}

      {/* SCENE 1: THE HOOK / PROBLEM */}
      {frame >= S1_START && frame < S2_START && (
        <Scene1Hook
          frame={frame - S1_START}
          fps={fps}
          data={campaign.scene1}
        />
      )}

      {/* SCENE 2: THE DISCOVERY */}
      {frame >= S2_START && frame < S3_START && (
        <Scene2Discovery
          frame={frame - S2_START}
          fps={fps}
          data={campaign.scene2}
          brandName={campaign.brand.name}
        />
      )}

      {/* SCENE 3: APP SHOWCASE */}
      {frame >= S3_START && frame < S4_START && (
        <Scene3AppShowcase
          frame={frame - S3_START}
          fps={fps}
          screens={campaign.scene3.screens}
          brand={campaign.brand}
        />
      )}

      {/* SCENE 4: SUCCESS / TRANSFORMATION */}
      {frame >= S4_START && frame < S5_START && (
        <Scene4Success
          frame={frame - S4_START}
          fps={fps}
          data={campaign.scene4}
        />
      )}

      {/* SCENE 5: END-SLATE CALL TO ACTION */}
      {frame >= S5_START && (
        <Scene5EndSlate
          frame={frame - S5_START}
          fps={fps}
          brand={campaign.brand}
        />
      )}
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-SCENE 1: HOOK (Pain point)
// ==========================================
const Scene1Hook: React.FC<{
  frame: number;
  fps: number;
  data: AdCampaignConfig["scene1"];
}> = ({ frame, data }) => {
  const scale = interpolate(frame, [0, 150], [1.0, 1.08]);
  const textY = interpolate(frame, [0, 20], [40, 0], { extrapolateRight: "clamp" });
  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <Img
        src={staticFile(data.bgImageUrl)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(2,6,23,0.92) 0%, rgba(2,6,23,0.4) 40%, rgba(2,6,23,0.1) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(239, 68, 68, 0.95)",
            color: "#ffffff",
            padding: "16px 36px",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 800,
            letterSpacing: 1,
            boxShadow: "0 8px 30px rgba(239, 68, 68, 0.4)",
          }}
        >
          ⚠️ {data.badge}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 60,
          right: 60,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            padding: "36px 40px",
            borderRadius: 32,
            boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 46,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.25,
              textShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            {data.headline}
          </h2>
          <p
            style={{
              margin: "16px 0 0 0",
              fontSize: 32,
              fontWeight: 600,
              color: "#fbbf24",
              lineHeight: 1.3,
            }}
          >
            {data.subhead}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-SCENE 2: DISCOVERY
// ==========================================
const Scene2Discovery: React.FC<{
  frame: number;
  fps: number;
  data: AdCampaignConfig["scene2"];
  brandName: string;
}> = ({ frame, data, brandName }) => {
  const scale = interpolate(frame, [0, 150], [1.05, 1.0]);
  const textOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [0, 18], [30, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <Img
        src={staticFile(data.bgImageUrl)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(2,6,23,0.95) 0%, rgba(2,6,23,0.3) 50%, rgba(2,6,23,0.2) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#059669",
            color: "#ffffff",
            padding: "16px 36px",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 800,
            boxShadow: "0 8px 30px rgba(5, 150, 105, 0.4)",
          }}
        >
          ✨ {data.badge}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 60,
          right: 60,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.88)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(16, 185, 129, 0.4)",
            padding: "36px 40px",
            borderRadius: 32,
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 700,
              color: "#34d399",
              textTransform: "uppercase",
              letterSpacing: 1.5,
              marginBottom: 10,
            }}
          >
            {brandName} APP
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.25,
            }}
          >
            {data.headline}
          </h2>
          <p
            style={{
              margin: "14px 0 0 0",
              fontSize: 30,
              fontWeight: 600,
              color: "#a7f3d0",
              lineHeight: 1.3,
            }}
          >
            {data.subhead}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-SCENE 3: APP SHOWCASE
// ==========================================
const Scene3AppShowcase: React.FC<{
  frame: number;
  fps: number;
  screens: ShowcaseScreen[];
  brand: AdCampaignConfig["brand"];
}> = ({ frame, fps, screens, brand }) => {
  const totalScreens = screens.length;
  const framesPerScreen = 300 / totalScreens; // 75 frames per screen
  const currentIndex = Math.min(
    Math.floor(frame / framesPerScreen),
    totalScreens - 1
  );
  const screen = screens[currentIndex];
  const screenLocalFrame = frame - currentIndex * framesPerScreen;

  const cardSpring = spring({
    frame: screenLocalFrame,
    fps,
    config: { damping: 14, stiffness: 120 },
  });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 20%, #0f172a 0%, #020617 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "80px 50px",
      }}
    >
      {/* Brand & Progress Bar */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              backgroundColor: brand.accentColor || "#10b981",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 900,
              color: "#ffffff",
              fontSize: 26,
            }}
          >
            {brand.name[0]}
          </div>
          <span style={{ fontSize: 36, fontWeight: 800, color: "#ffffff" }}>
            {brand.name}
          </span>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", gap: 10 }}>
          {screens.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === currentIndex ? 36 : 14,
                height: 14,
                borderRadius: 7,
                backgroundColor:
                  i === currentIndex
                    ? brand.accentColor || "#10b981"
                    : "rgba(255,255,255,0.2)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Screen Frame Container (Un-clipped) */}
      <div
        style={{
          width: 860,
          height: 980,
          borderRadius: 44,
          padding: 14,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.03))",
          boxShadow: "0 30px 80px rgba(0,0,0,0.8), 0 0 50px rgba(16,185,129,0.15)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid rgba(255,255,255,0.15)",
          transform: `scale(${interpolate(cardSpring, [0, 1], [0.96, 1.0])})`,
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 34,
            overflow: "hidden",
            backgroundColor: "#000000",
          }}
        >
          <Img
            src={staticFile(screen.imageUrl)}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      {/* Bottom Feature Pill & Text */}
      <div
        style={{
          marginTop: 40,
          width: "100%",
          backgroundColor: "rgba(15, 23, 42, 0.9)",
          backdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          borderRadius: 32,
          padding: "30px 40px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            backgroundColor: screen.accentColor || "#10b981",
            color: "#ffffff",
            padding: "8px 24px",
            borderRadius: 30,
            fontSize: 22,
            fontWeight: 800,
            textTransform: "uppercase",
            marginBottom: 12,
          }}
        >
          {screen.badge}
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: 38,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.25,
          }}
        >
          {screen.title}
        </h3>
        <p
          style={{
            margin: "12px 0 0 0",
            fontSize: 26,
            fontWeight: 500,
            color: "#cbd5e1",
          }}
        >
          {screen.description}
        </p>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-SCENE 4: SUCCESS / TRANSFORMATION
// ==========================================
const Scene4Success: React.FC<{
  frame: number;
  fps: number;
  data: AdCampaignConfig["scene4"];
}> = ({ frame, data }) => {
  const scale = interpolate(frame, [0, 180], [1.0, 1.06]);
  const textOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const textY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill>
      <Img
        src={staticFile(data.bgImageUrl)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `scale(${scale})`,
        }}
      />
      <AbsoluteFill
        style={{
          background:
            "linear-gradient(to top, rgba(2,6,23,0.94) 0%, rgba(2,6,23,0.3) 50%, rgba(2,6,23,0.1) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 80,
          left: 60,
          right: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#10b981",
            color: "#ffffff",
            padding: "16px 36px",
            borderRadius: 50,
            fontSize: 28,
            fontWeight: 800,
            boxShadow: "0 8px 30px rgba(16, 185, 129, 0.5)",
          }}
        >
          🎉 {data.badge}
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 120,
          left: 60,
          right: 60,
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(15, 23, 42, 0.9)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(16, 185, 129, 0.35)",
            padding: "36px 40px",
            borderRadius: 32,
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 44,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.25,
            }}
          >
            {data.headline}
          </h2>
          <p
            style={{
              margin: "14px 0 0 0",
              fontSize: 30,
              fontWeight: 600,
              color: "#a7f3d0",
              lineHeight: 1.3,
            }}
          >
            {data.subhead}
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ==========================================
// SUB-SCENE 5: END-SLATE
// ==========================================
const Scene5EndSlate: React.FC<{
  frame: number;
  fps: number;
  brand: AdCampaignConfig["brand"];
}> = ({ frame, fps, brand }) => {
  const popSpring = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });

  return (
    <AbsoluteFill
      style={{
        background: "radial-gradient(circle at 50% 30%, #064e3b 0%, #022c22 45%, #020617 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "140px 60px 100px",
        textAlign: "center",
      }}
    >
      {/* Top Logo & App Title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transform: `scale(${popSpring})`,
        }}
      >
        {brand.logoUrl && (
          <div
            style={{
              width: 170,
              height: 170,
              borderRadius: 44,
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(16,185,129,0.3)",
              marginBottom: 30,
              border: "3px solid rgba(255,255,255,0.2)",
            }}
          >
            <Img
              src={staticFile(brand.logoUrl)}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        )}
        <h1
          style={{
            margin: 0,
            fontSize: 78,
            fontWeight: 900,
            letterSpacing: -1,
            color: "#ffffff",
          }}
        >
          {brand.name}
        </h1>
        <p
          style={{
            margin: "12px 0 0 0",
            fontSize: 34,
            fontWeight: 600,
            color: "#6ee7b7",
          }}
        >
          {brand.tagline}
        </p>
        <p
          style={{
            margin: "8px 0 0 0",
            fontSize: 28,
            fontWeight: 500,
            color: "#94a3b8",
          }}
        >
          {brand.subTagline}
        </p>
      </div>

      {/* Middle QR Code & Store Badge */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        {brand.qrCodeUrl && (
          <div
            style={{
              padding: 16,
              backgroundColor: "#ffffff",
              borderRadius: 28,
              boxShadow: "0 15px 40px rgba(0,0,0,0.5)",
            }}
          >
            <Img
              src={staticFile(brand.qrCodeUrl)}
              style={{ width: 220, height: 220, display: "block" }}
            />
          </div>
        )}

        {brand.storeBadgeUrl && (
          <Img
            src={staticFile(brand.storeBadgeUrl)}
            style={{ height: 74, width: "auto" }}
          />
        )}
      </div>

      {/* Bottom Offer Pill */}
      <div
        style={{
          width: "100%",
          backgroundColor: "#f59e0b",
          color: "#0f172a",
          padding: "26px 40px",
          borderRadius: 50,
          fontSize: 36,
          fontWeight: 900,
          boxShadow: "0 15px 40px rgba(245, 158, 11, 0.4)",
          letterSpacing: 0.5,
        }}
      >
        🔥 {brand.offerText}
      </div>
    </AbsoluteFill>
  );
};

