import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SCENES, TOTAL_FRAMES } from "./timeline";
import { COLORS } from "../ad/theme";
import { Scene1HumanChaos } from "./scenes/Scene1HumanChaos";
import { Scene2HumanDiscovery } from "./scenes/Scene2HumanDiscovery";
import { Scene3CustomerDelight } from "./scenes/Scene3CustomerDelight";
import { Scene4HappyClosing } from "./scenes/Scene4HappyClosing";
import { Scene5EndCard } from "../ad/scenes/Scene5EndCard";

export const KadaiBookAd3: React.FC = () => {
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
      {/* SCENE 1 (0–6s): Human Acting - Daybook Chaos & Customer Waiting */}
      <Sequence
        from={SCENES.scene1_chaos.from}
        durationInFrames={SCENES.scene1_chaos.duration}
        name="Scene 1: Daybook Chaos"
      >
        <Scene1HumanChaos />
      </Sequence>

      {/* SCENE 2 (6–12s): Human Acting - KadaiBook Discovery & WhatsApp Bill */}
      <Sequence
        from={SCENES.scene2_discovery.from}
        durationInFrames={SCENES.scene2_discovery.duration}
        name="Scene 2: KadaiBook Discovery"
      >
        <Scene2HumanDiscovery />
      </Sequence>

      {/* SCENE 3 (12–19s): Customer Delight & WhatsApp PDF Bill */}
      <Sequence
        from={SCENES.scene3_delight.from}
        durationInFrames={SCENES.scene3_delight.duration}
        name="Scene 3: Customer Delight & Instant Bill"
      >
        <Scene3CustomerDelight />
      </Sequence>

      {/* SCENE 4 (19–25s): 9 PM Early Closing & Happy Call with Family */}
      <Sequence
        from={SCENES.scene4_closing.from}
        durationInFrames={SCENES.scene4_closing.duration}
        name="Scene 4: Happy Early Closing"
      >
        <Scene4HappyClosing />
      </Sequence>

      {/* SCENE 5 (25–30s): Official KadaiBook End Slate & CTA */}
      <Sequence
        from={SCENES.scene5_end.from}
        durationInFrames={SCENES.scene5_end.duration}
        name="Scene 5: Brand End Card & CTA"
      >
        <Scene5EndCard />
      </Sequence>

      {/* Transitions */}
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

      {/* Multi-Character Dialogue + Commercial Voiceover + Soundtrack */}
      <Audio src={staticFile("audio/soundtrack-tamil-ad3.mp3")} />
    </AbsoluteFill>
  );
};

