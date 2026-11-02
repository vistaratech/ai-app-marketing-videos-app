import React from "react";
import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { ArrowRight, Bell, BookOpen, Coffee, IndianRupee } from "lucide-react";
import { useAdLayout } from "../layout";
import { COLORS, FONT } from "../theme";
import { Eyebrow, Headline } from "../components/Text";
import { FloatingPill } from "../components/Chip";

const PaperLedger: React.FC<{
  width: number;
  height: number;
  start?: number;
}> = ({ width, height, start = 6 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const scale = width / 760;
  const p = spring({
    frame: frame - start,
    fps,
    config: { damping: 200, mass: 1.1 },
  });
  const stamp = spring({
    frame: frame - 46,
    fps,
    config: { damping: 11, mass: 0.8, stiffness: 120 },
  });

  const rows = [
    { id: "#0003", name: "yohesh", amount: "₹52,500", status: "DUE", color: COLORS.terra },
    { id: "#0002", name: "yohesh", amount: "₹82,600", status: "PAID", color: COLORS.green },
    { id: "#0001", name: "Ramesh", amount: "₹18,400", status: "DUE", color: COLORS.terra },
  ];

  return (
    <div
      style={{
        position: "relative",
        width,
        height,
        borderRadius: 10,
        background:
          "linear-gradient(150deg, #FCF5E7 0%, #F7ECD9 55%, #F2E4CE 100%)",
        boxShadow: "0 50px 110px rgba(84,45,28,0.30), 0 12px 26px rgba(84,45,28,0.16)",
        border: "1px solid rgba(140, 100, 65, 0.22)",
        transform: `translateY(${(1 - p) * 110}px) rotate(${-4 + (1 - p) * -4}deg)`,
        opacity: p,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 18 * scale,
          background: "linear-gradient(to bottom, rgba(120,80,50,0.14), rgba(120,80,50,0))",
        }}
      />
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: 12 * scale,
            left: (24 + i * 51) * scale,
            width: 11 * scale,
            height: 11 * scale,
            borderRadius: "50%",
            background: "#E8D8C1",
            boxShadow: "inset 0 2px 3px rgba(90,60,35,0.35)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          top: 42 * scale,
          bottom: 0,
          left: 92 * scale,
          width: 2 * scale,
          backgroundColor: "rgba(180,86,74,0.28)",
        }}
      />
      {Array.from({ length: 9 }).map((_, i) => (
        <div
          key={`line-${i}`}
          style={{
            position: "absolute",
            top: (92 + i * 62) * scale,
            left: 22 * scale,
            right: 22 * scale,
            height: 1,
            backgroundColor: "rgba(61,110,208,0.13)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: 118 * scale,
          right: 28 * scale,
          top: 46 * scale,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 * scale }}>
          <BookOpen size={25 * scale} color={COLORS.terra} strokeWidth={2.4} />
          <span
            style={{
              fontFamily: FONT,
              fontSize: 24 * scale,
              fontWeight: 800,
              color: COLORS.ink,
              letterSpacing: "0.06em",
            }}
          >
            ORDER BOOK
          </span>
        </div>
        <span
          style={{
            fontFamily: FONT,
            fontSize: 17 * scale,
            fontWeight: 700,
            color: COLORS.muted,
            letterSpacing: "0.12em",
          }}
        >
          NOV 2026
        </span>
      </div>

      <div
        style={{
          position: "absolute",
          left: 118 * scale,
          right: 30 * scale,
          top: 118 * scale,
        }}
      >
        {rows.map((row, i) => (
          <div
            key={row.id}
            style={{
              display: "grid",
              gridTemplateColumns: "0.9fr 1.25fr 1fr 0.7fr",
              alignItems: "center",
              height: 76 * scale,
              borderBottom: "1px dashed rgba(120,90,60,0.25)",
              fontFamily: FONT,
              fontSize: 22 * scale,
              fontWeight: 700,
              color: COLORS.ink,
              opacity: Math.min(1, Math.max(0, (frame - 18 - i * 5) / 8)),
            }}
          >
            <span style={{ color: COLORS.muted }}>{row.id}</span>
            <span>{row.name}</span>
            <span style={{ fontVariantNumeric: "tabular-nums" }}>{row.amount}</span>
            <span
              style={{
                justifySelf: "end",
                color: row.color,
                fontSize: 16 * scale,
                fontWeight: 800,
                letterSpacing: "0.08em",
              }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          left: 118 * scale,
          right: 30 * scale,
          bottom: 70 * scale,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: FONT,
          fontSize: 18 * scale,
          fontWeight: 600,
          color: "rgba(90,65,45,0.5)",
        }}
      >
        <span>advance / balance / follow-up…</span>
        <span>TOTAL DUE ₹70,900</span>
      </div>

      <div
        style={{
          position: "absolute",
          right: 34 * scale,
          bottom: 84 * scale,
          padding: `${12 * scale}px ${20 * scale}px`,
          border: `${3 * scale}px double ${COLORS.terra}`,
          borderRadius: 8 * scale,
          color: COLORS.terra,
          fontFamily: FONT,
          fontSize: 34 * scale,
          fontWeight: 800,
          letterSpacing: "0.14em",
          opacity: stamp,
          transform: `rotate(-13deg) scale(${1.7 - stamp * 0.7})`,
          backgroundColor: "rgba(180,86,74,0.06)",
        }}
      >
        UNPAID
      </div>

      <div
        style={{
          position: "absolute",
          left: 42 * scale,
          top: 152 * scale,
          width: 150 * scale,
          height: 150 * scale,
          borderRadius: "50%",
          border: `${10 * scale}px solid rgba(120,80,45,0.09)`,
          background:
            "radial-gradient(circle at 40% 35%, rgba(120,80,45,0.10), rgba(120,80,45,0.03) 58%, transparent 60%)",
          transform: "rotate(18deg)",
        }}
      />
      <Coffee
        size={18 * scale}
        color="rgba(120,80,45,0.35)"
        style={{ position: "absolute", left: 48 * scale, top: 158 * scale }}
      />
    </div>
  );
};

export const HookScene: React.FC = () => {
  const layout = useAdLayout();
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const arrow = spring({
    frame: frame - 62,
    fps,
    config: { damping: 200 },
  });

  if (!layout.vertical) {
    return (
      <AbsoluteFill style={{ fontFamily: FONT }}>
        <div style={{ position: "absolute", left: 110, top: 206 }}>
          <Eyebrow color={COLORS.terra} start={2}>
            The old way
          </Eyebrow>
        </div>
        <div style={{ position: "absolute", left: 110, top: 268, width: 820 }}>
          <Headline
            lines={[
              { text: "Still running your" },
              { text: "shop on paper?", highlight: "paper?", highlightColor: COLORS.terra },
            ]}
            size={84}
            start={4}
          />
        </div>
        <div
          style={{
            position: "absolute",
            left: 112,
            top: 560,
            display: "flex",
            alignItems: "center",
            gap: 16,
            opacity: arrow,
            transform: `translateX(${(1 - arrow) * -24}px)`,
          }}
        >
          <span style={{ fontFamily: FONT, fontSize: 30, fontWeight: 600, color: COLORS.muted }}>
            There is a better way
          </span>
          <ArrowRight size={30} color={COLORS.terra} />
        </div>
        <div style={{ position: "absolute", right: 120, top: 196 }}>
          <PaperLedger width={720} height={540} />
        </div>
        <div style={{ position: "absolute", right: 780, top: 170 }}>
          <FloatingPill
            icon={IndianRupee}
            text="₹52,500 due"
            background={COLORS.terra}
            start={24}
            rotate={-7}
          />
        </div>
        <div style={{ position: "absolute", right: 70, top: 760 }}>
          <FloatingPill
            icon={Bell}
            text="No reminders sent"
            background={COLORS.goldDark}
            start={34}
            rotate={4}
          />
        </div>
      </AbsoluteFill>
    );
  }

  return (
    <AbsoluteFill style={{ fontFamily: FONT }}>
      <div style={{ position: "absolute", top: 236, left: 0, width: "100%" }}>
        <Eyebrow color={COLORS.terra} start={2} align="center">
          The old way
        </Eyebrow>
      </div>
      <div style={{ position: "absolute", top: 300, left: 40, width: 1000, display: "flex", justifyContent: "center" }}>
        <Headline
          lines={[
            { text: "Still running your" },
            { text: "shop on paper?", highlight: "paper?", highlightColor: COLORS.terra },
          ]}
          size={100}
          start={4}
          align="center"
        />
      </div>

      <div style={{ position: "absolute", left: 160, top: 862 }}>
        <PaperLedger width={760} height={540} />
      </div>

      <div style={{ position: "absolute", left: 54, top: 800 }}>
        <FloatingPill
          icon={IndianRupee}
          text="₹52,500 due"
          background={COLORS.terra}
          start={24}
          rotate={-7}
        />
      </div>
      <div style={{ position: "absolute", right: 50, top: 1360 }}>
        <FloatingPill
          icon={Bell}
          text="No reminders sent"
          background={COLORS.goldDark}
          start={34}
          rotate={4}
        />
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          width: "100%",
          top: 1690,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 16,
          opacity: arrow,
          transform: `translateY(${(1 - arrow) * 20}px)`,
        }}
      >
        <span style={{ fontFamily: FONT, fontSize: 34, fontWeight: 600, color: COLORS.muted }}>
          There is a better way
        </span>
        <ArrowRight size={34} color={COLORS.terra} />
      </div>
    </AbsoluteFill>
  );
};
