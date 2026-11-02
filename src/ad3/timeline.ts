export const FPS = 30;

export const SCENES = {
  scene1_chaos: { from: 0, duration: 180 },        // 0:00 - 0:06 (6s)
  scene2_discovery: { from: 180, duration: 180 },  // 0:06 - 0:12 (6s)
  scene3_delight: { from: 360, duration: 210 },    // 0:12 - 0:19 (7s)
  scene4_closing: { from: 570, duration: 180 },    // 0:19 - 0:25 (6s)
  scene5_end: { from: 750, duration: 150 },        // 0:25 - 0:30 (5s)
} as const;

export const TOTAL_FRAMES = 900;
