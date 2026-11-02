import React from "react";
import { BellRing, PieChart, TrendingUp } from "lucide-react";
import { ProductScene } from "../components/ProductScene";
import { HighlightRing } from "../components/Overlays";
import { COLORS } from "../theme";

export const DashboardScene: React.FC = () => {
  return (
    <ProductScene
      eyebrow="Your business, at a glance"
      lines={[
        { text: "Know exactly" },
        { text: "where you stand.", highlight: "stand.", highlightColor: COLORS.gold },
      ]}
      subline="Live sales, collections and dues — no guesswork."
      src="screenshots/shot-05.jpg"
      accent={COLORS.green}
      overlay={
        <HighlightRing
          left="5.2%"
          top="25.9%"
          width="32.5%"
          height="5.2%"
          color={COLORS.green}
          delay={16}
        />
      }
      chips={[
        {
          icon: TrendingUp,
          label: "Net balance",
          value: "₹2,85,100",
          color: COLORS.green,
          soft: COLORS.greenSoft,
        },
        {
          icon: PieChart,
          label: "Collected",
          value: "92%",
          color: COLORS.blue,
          soft: COLORS.blueSoft,
        },
        {
          icon: BellRing,
          label: "Pending",
          value: "₹22,000",
          color: COLORS.goldDark,
          soft: COLORS.goldSoft,
        },
      ]}
    />
  );
};
