import React from "react";
import { BellRing, Send, Truck } from "lucide-react";
import { ProductScene } from "../components/ProductScene";
import { HighlightRing } from "../components/Overlays";
import { FloatingPill } from "../components/Chip";
import { useAdLayout } from "../layout";
import { COLORS } from "../theme";

export const DuesScene: React.FC = () => {
  const layout = useAdLayout();

  return (
    <>
      <ProductScene
        eyebrow="Orders & dues"
        lines={[
          { text: "Pending dues," },
          { text: "never again.", highlight: "again.", highlightColor: COLORS.gold },
        ]}
        subline="Automatic reminders keep your cash flowing."
        src="screenshots/shot-06.jpg"
        accent={COLORS.terra}
        overlay={
          <HighlightRing
            left="82.3%"
            top="56.2%"
            width="15.9%"
            height="4.7%"
            color={COLORS.terra}
            delay={12}
          />
        }
        chips={[
          {
            icon: BellRing,
            label: "Pending",
            value: "₹22,000",
            color: COLORS.goldDark,
            soft: COLORS.goldSoft,
          },
          {
            icon: Send,
            label: "Reminders",
            value: "Automatic",
            color: COLORS.terra,
            soft: COLORS.terraSoft,
          },
          {
            icon: Truck,
            label: "Delivery",
            value: "Tracked",
            color: COLORS.green,
            soft: COLORS.greenSoft,
          },
        ]}
      />
      <div
        style={{
          position: "absolute",
          right: layout.vertical ? 64 : 120,
          top: layout.vertical ? 1292 : 812,
          zIndex: 20,
        }}
      >
        <FloatingPill
          icon={Send}
          text="Reminder sent"
          background={COLORS.green}
          start={38}
          rotate={-3}
        />
      </div>
    </>
  );
};
