import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SCENES, TOTAL_FRAMES } from "./timeline";
import { COLORS } from "./theme";
import { Scene1Chaos } from "./scenes/Scene1Chaos";
import { Scene2Discovery } from "./scenes/Scene2Discovery";
import { Scene3AppShowcase } from "./scenes/Scene3AppShowcase";
import { Scene4Success } from "./scenes/Scene4Success";
import { Scene5EndCard } from "./scenes/Scene5EndCard";

export const KadaiBookAd: React.FC = () => {
  const frame = useCurrentFrame();

  const fadeIn = interpolate(frame, [0, 10], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const fadeOut = interpolate(frame, [TOTAL_FRAMES - 18, TOTAL_FRAMES - 1], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill style={{ backgroundColor: COLORS.ink }}>
      {/* SCENE 1 (0–5 seconds): Paper ledger frustration */}
      <Sequence
        from={SCENES.scene1_chaos.from}
        durationInFrames={SCENES.scene1_chaos.duration}
        name="Scene 1: Traditional Ledger Chaos"
      >
        <Scene1Chaos />
      </Sequence>

      {/* SCENE 2 (5–10 seconds): Discovering KadaiBook on Smartphone */}
      <Sequence
        from={SCENES.scene2_discovery.from}
        durationInFrames={SCENES.scene2_discovery.duration}
        name="Scene 2: KadaiBook Discovery"
      >
        <Scene2Discovery />
      </Sequence>

      {/* SCENE 3 (10–20 seconds): Real KadaiBook Application Showcase */}
      <Sequence
        from={SCENES.scene3_app.from}
        durationInFrames={SCENES.scene3_app.duration}
        name="Scene 3: KadaiBook App Showcase"
      >
        <Scene3AppShowcase />
      </Sequence>

      {/* SCENE 4 (20–26 seconds): Confident Shopkeeper & Happy Customers */}
      <Sequence
        from={SCENES.scene4_success.from}
        durationInFrames={SCENES.scene4_success.duration}
        name="Scene 4: Happy Customers & Success"
      >
        <Scene4Success />
      </Sequence>

      {/* SCENE 5 (26–30 seconds): Premium Product End Slate & CTA */}
      <Sequence
        from={SCENES.scene5_end.from}
        durationInFrames={SCENES.scene5_end.duration}
        name="Scene 5: Brand End Card & CTA"
      >
        <Scene5EndCard />
      </Sequence>

      {/* Fade In / Out */}
      <AbsoluteFill
        style={{
          backgroundColor: COLORS.ink,
          opacity: fadeIn,
          pointerEvents: "none",
        }}
      />
      <AbsoluteFill
        style={{
          backgroundColor: COLORS.ink,
          opacity: fadeOut,
          pointerEvents: "none",
        }}
      />

      {/* Professional Tamil Voiceover + Mixed Background Music */}
      <Audio src={staticFile("audio/soundtrack-tamil.mp3")} />
    </AbsoluteFill>
  );
};
