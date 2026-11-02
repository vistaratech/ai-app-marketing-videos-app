export const FPS = 30;

export const SCENES = {
  scene1_chaos: { from: 0, duration: 150 },        // 0:00 - 0:05 (5s)
  scene2_discovery: { from: 150, duration: 150 },  // 0:05 - 0:10 (5s)
  scene3_app: { from: 300, duration: 300 },        // 0:10 - 0:20 (10s)
  scene4_success: { from: 600, duration: 180 },    // 0:20 - 0:26 (6s)
  scene5_end: { from: 780, duration: 120 },        // 0:26 - 0:30 (4s)
} as const;

export const TOTAL_FRAMES = 900;
