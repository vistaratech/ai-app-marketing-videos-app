import React from "react";
import { AbsoluteFill, Img, spring, staticFile, useCurrentFrame, useVideoConfig } from "remotion";
import {
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  PieChart,
  Receipt,
  TrendingUp,
  Wallet,
} from "lucide-react";
import { COLORS, FONT, SHADOW } from "../../ad/theme";
import { HighlightRing } from "../../ad/components/Overlays";

const ScreenFrame: React.FC<{
  src: string;
  overlay?: React.ReactNode;
}> = ({ src, overlay }) => {
  return (
    <div
      style={{
        position: "relative",
        width: 860,
        height: 1000,
        borderRadius: 44,
        backgroundColor: "#FFFFFF",
        padding: "14px",
        boxShadow: "0 35px 85px rgba(84,45,28,0.22), 0 10px 25px rgba(0,0,0,0.12)",
        border: "3px solid rgba(84,45,28,0.12)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 32,
          overflow: "hidden",
          position: "relative",
          backgroundColor: "#FFF",
        }}
      >
        <Img
          src={staticFile(src)}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {overlay}
      </div>
    </div>
  );
};

export const Scene3NightApp: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const phase = Math.min(3, Math.floor(frame / 75));
  const subFrame = frame % 75;

  const cardAnim = spring({
    frame: subFrame,
    fps,
    config: { damping: 16, mass: 0.8 },
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: COLORS.cream,
        fontFamily: FONT,
        overflow: "hidden",
      }}
    >
      {/* Dynamic Header */}
      <div
        style={{
          position: "absolute",
          top: 90,
          left: 0,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 999,
            backgroundColor: COLORS.terra,
            color: "#FFF",
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            boxShadow: "0 8px 20px rgba(180,86,74,0.3)",
          }}
        >
          {phase === 0 && "1. DAILY CASH & UPI CLOSING"}
          {phase === 1 && "2. DAILY EXPENSES & OUTFLOW"}
          {phase === 2 && "3. PENDING CUSTOMER BALANCES"}
          {phase === 3 && "4. 1-CLICK CLOSING REPORT"}
        </div>

        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            color: COLORS.ink,
            textAlign: "center",
            letterSpacing: "-0.03em",
          }}
        >
          {phase === 0 && "கேஷ் & UPI ஆட்டோ-டாலி!"}
          {phase === 1 && "செலவுகளும் விரல் நுனியில்!"}
          {phase === 2 && "பாக்கி கணக்கு ஒரே பார்வை!"}
          {phase === 3 && "டெய்லி ரிப்போர்ட் ரெடி · கடை க்ளோஸ்!"}
        </div>
      </div>

      {/* Centered Phone Screen Frame */}
      <div
        style={{
          position: "absolute",
          top: 250,
          left: "50%",
          transform: `translateX(-50%) translateY(${(1 - cardAnim) * 40}px) scale(${0.96 + cardAnim * 0.04})`,
          opacity: cardAnim,
        }}
      >
        {phase === 0 && (
          <ScreenFrame
            src="screenshots/shot-05.jpg"
            overlay={
              <HighlightRing
                left="5.2%"
                top="25.9%"
                width="32.5%"
                height="5.2%"
                color={COLORS.green}
                delay={10}
              />
            }
          />
        )}

        {phase === 1 && (
          <ScreenFrame
            src="screenshots/shot-02.jpg"
            overlay={
              <HighlightRing
                left="3.8%"
                top="42.0%"
                width="92.4%"
                height="5.8%"
                color={COLORS.terra}
                delay={8}
              />
            }
          />
        )}

        {phase === 2 && (
          <ScreenFrame
            src="screenshots/shot-06.jpg"
            overlay={
              <HighlightRing
                left="82.3%"
                top="56.2%"
                width="15.9%"
                height="4.7%"
                color={COLORS.gold}
                delay={10}
              />
            }
          />
        )}

        {phase === 3 && (
          <ScreenFrame
            src="screenshots/shot-08.jpg"
            overlay={
              <HighlightRing
                left="4.2%"
                top="18.5%"
                width="91.6%"
                height="8.2%"
                color={COLORS.blue}
                delay={8}
              />
            }
          />
        )}
      </div>

      {/* Floating Info Cards and Badges */}
      {phase === 0 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <TrendingUp size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Total Sales</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.green }}>₹2,85,100</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <CheckCircle2 size={32} color={COLORS.blue} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Cash Tally</div>
              <div style={{ fontSize: 28, fontWeight: 900, color: COLORS.blue }}>100% Matched</div>
            </div>
          </div>
        </div>
      )}

      {phase === 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <ArrowDownRight size={32} color={COLORS.terra} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Daily Expenses</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.terra }}>Tracked</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Wallet size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Inflow vs Outflow</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.ink }}>Automatic</div>
            </div>
          </div>
        </div>
      )}

      {phase === 2 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <Receipt size={32} color={COLORS.goldDark} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Pending Dues</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.goldDark }}>₹22,000</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <ArrowUpRight size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Reminders</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.green }}>Sent on WhatsApp</div>
            </div>
          </div>
        </div>
      )}

      {phase === 3 && (
        <div
          style={{
            position: "absolute",
            bottom: 120,
            left: 50,
            right: 50,
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <PieChart size={32} color={COLORS.blue} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Day Closing</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.blue }}>Completed</div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              padding: "20px 24px",
              borderRadius: 24,
              backgroundColor: COLORS.paper,
              boxShadow: SHADOW.soft,
              border: `1px solid ${COLORS.line}`,
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <BarChart3 size={32} color={COLORS.green} />
            <div>
              <div style={{ fontSize: 16, color: COLORS.muted, fontWeight: 700 }}>Profit Report</div>
              <div style={{ fontSize: 26, fontWeight: 900, color: COLORS.green }}>PDF Export</div>
            </div>
          </div>
        </div>
      )}
    </AbsoluteFill>
  );
};

