import React from "react";
import { AbsoluteFill, Audio, Sequence, interpolate, staticFile, useCurrentFrame } from "remotion";
import { SCENES, TOTAL_FRAMES } from "./timeline";
import { COLORS } from "../ad/theme";
import { Scene1NightTally } from "./scenes/Scene1NightTally";
import { Scene2NightDiscovery } from "./scenes/Scene2NightDiscovery";
import { Scene3NightApp } from "./scenes/Scene3NightApp";
import { Scene4EarlyClosing } from "./scenes/Scene4EarlyClosing";
import { Scene5EndCard } from "../ad/scenes/Scene5EndCard";

export const KadaiBookAd2: React.FC = () => {
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
      {/* SCENE 1 (0–5 seconds): Late night cash counting & daybook tally struggle */}
      <Sequence
        from={SCENES.scene1_chaos.from}
        durationInFrames={SCENES.scene1_chaos.duration}
        name="Scene 1: Late Night Daybook Struggle"
      >
        <Scene1NightTally />
      </Sequence>

      {/* SCENE 2 (5–10 seconds): Discovering KadaiBook 1-Click Day Tally */}
      <Sequence
        from={SCENES.scene2_discovery.from}
        durationInFrames={SCENES.scene2_discovery.duration}
        name="Scene 2: KadaiBook 10s Closing Discovery"
      >
        <Scene2NightDiscovery />
      </Sequence>

      {/* SCENE 3 (10–20 seconds): Real KadaiBook Cash/UPI Closing & Reports Showcase */}
      <Sequence
        from={SCENES.scene3_app.from}
        durationInFrames={SCENES.scene3_app.duration}
        name="Scene 3: Daily Summary & Tally App Showcase"
      >
        <Scene3NightApp />
      </Sequence>

      {/* SCENE 4 (20–26 seconds): Early Closing & Heading Home Early with Peace of Mind */}
      <Sequence
        from={SCENES.scene4_success.from}
        durationInFrames={SCENES.scene4_success.duration}
        name="Scene 4: Early Closing & Peaceful Evening"
      >
        <Scene4EarlyClosing />
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

      {/* Professional Tamil Voiceover + Mixed Background Music for Ad 2 */}
      <Audio src={staticFile("audio/soundtrack-tamil-ad2.mp3")} />
    </AbsoluteFill>
  );
};

