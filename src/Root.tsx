import React from "react";
import { Composition } from "remotion";
import { KadaiBookAd } from "./ad/KadaiBookAd";
import { KadaiBookAd2 } from "./ad2/KadaiBookAd2";
import { KadaiBookAd3 } from "./ad3/KadaiBookAd3";
import { UniversalAd } from "./engine/UniversalAd";
import { defaultCampaign } from "./engine/defaultCampaign";
import { TOTAL_FRAMES } from "./ad/timeline";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="UniversalAd"
        component={UniversalAd}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
        defaultProps={{ campaign: defaultCampaign }}
      />
      <Composition
        id="KadaiBookAd"
        component={KadaiBookAd}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="KadaiBookAd2"
        component={KadaiBookAd2}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="KadaiBookAd3"
        component={KadaiBookAd3}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="KadaiBookAdWide"
        component={KadaiBookAd}
        durationInFrames={TOTAL_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
