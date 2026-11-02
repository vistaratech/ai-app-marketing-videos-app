import { useVideoConfig } from "remotion";

export type AdLayout = {
  vertical: boolean;
  width: number;
  height: number;
  margin: number;
  headerX: number;
  eyebrowTop: number;
  titleTop: number;
  titleSize: number;
  titleWidth: number;
  cardX: number;
  cardY: number;
  cardW: number;
  cardH: number;
  chipsTop: number;
  chipsDirection: "row" | "column";
  chipW: number;
  gridTop: number;
  gridW: number;
  gridColumns: number;
};

export const useAdLayout = (): AdLayout => {
  const { width, height } = useVideoConfig();
  const vertical = height > width;

  if (vertical) {
    return {
      vertical,
      width,
      height,
      margin: 60,
      headerX: 60,
      eyebrowTop: 138,
      titleTop: 188,
      titleSize: 94,
      titleWidth: 960,
      cardX: 50,
      cardY: 500,
      cardW: 980,
      cardH: 1140,
      chipsTop: 1672,
      chipsDirection: "row",
      chipW: 314,
      gridTop: 570,
      gridW: 980,
      gridColumns: 2,
    };
  }

  return {
    vertical,
    width,
    height,
    margin: 110,
    headerX: 110,
    eyebrowTop: 148,
    titleTop: 196,
    titleSize: 88,
    titleWidth: 800,
    cardX: 1060,
    cardY: 98,
    cardW: 760,
    cardH: 884,
    chipsTop: 570,
    chipsDirection: "column",
    chipW: 430,
    gridTop: 230,
    gridW: 900,
    gridColumns: 2,
  };
};
