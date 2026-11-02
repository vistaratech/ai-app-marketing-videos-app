import {
  AbsoluteFill,
  CalculateMetadataFunction,
  Composition,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

type Props = {};

const calculateMetadata: CalculateMetadataFunction<Props> = () => {
  return {};
};

export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={90}
      fps={30}
      width={1280}
      height={720}
      calculateMetadata={calculateMetadata}
    />
  );
};

export const MyComponent: React.FC<Props> = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrance = spring({ frame, fps, config: { damping: 200 } });
  const opacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#0b0b0f",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          color: "white",
          fontSize: 96,
          fontWeight: 800,
          margin: 0,
          opacity,
          transform: `translateY(${(1 - entrance) * 60}px)`,
        }}
      >
        Hello, Remotion!
      </h1>
      <p style={{ color: "#8b8b98", fontSize: 32, opacity }}>
        Rendered with Remotion + FFmpeg — let&apos;s make video.
      </p>
    </AbsoluteFill>
  );
};
