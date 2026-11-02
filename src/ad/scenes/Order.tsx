import React from "react";
import { CheckCircle2, ReceiptText, Wallet } from "lucide-react";
import { ProductScene } from "../components/ProductScene";
import { HighlightRing } from "../components/Overlays";
import { COLORS } from "../theme";

export const OrderScene: React.FC = () => {
  return (
    <ProductScene
      eyebrow="GST billing"
      lines={[
        { text: "GST bills that" },
        { text: "add up perfectly.", highlight: "perfectly.", highlightColor: COLORS.gold },
      ]}
      subline="Tax split, totals and balance — calculated for you."
      src="screenshots/shot-04.jpg"
      accent={COLORS.terra}
      overlay={
        <HighlightRing
          left="3.8%"
          top="51.0%"
          width="92.4%"
          height="6.4%"
          color={COLORS.blue}
          delay={14}
        />
      }
      chips={[
        {
          icon: ReceiptText,
          label: "CGST + SGST",
          value: "₹12,600",
          color: COLORS.blue,
          soft: COLORS.blueSoft,
        },
        {
          icon: Wallet,
          label: "Bill total",
          value: "₹82,600",
          color: COLORS.terra,
          soft: COLORS.terraSoft,
        },
        {
          icon: CheckCircle2,
          label: "Balance due",
          value: "₹0",
          color: COLORS.green,
          soft: COLORS.greenSoft,
        },
      ]}
    />
  );
};
