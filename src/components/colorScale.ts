export type StyleColor = { backgroundColor: string; color: string };
export type ColorScale = StyleColor[];

export const WHITE_COLOR = "rgba(255,255,255,0.9)";
export const BLACK_COLOR = "rgba(0,0,0,0.9)";

export const WHITE_STYLE: StyleColor = {
  backgroundColor: "rgb(255,255,255)",
  color: BLACK_COLOR,
};

// https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health
export const SCALES: Record<string, ColorScale> = {
  "PM2.5": scaleBySteps(10),
  PM10: scaleBySteps(20),
  O3: scaleBySteps(100 / 3),
  NO2: scaleBySteps(40),
  SO2: scaleBySteps(20 / 2),
  OVER: scaleBySteps(10),
};

export function pickStyle(scale: ColorScale, value: number | null) {
  if (value == null) return WHITE_STYLE;
  if (value > scale.length) value = scale.length - 1;
  if (value < 0) value = 0;
  value = Math.floor(value);
  return scale[value];
}

type Color = [number, number, number];
function range(from: Color, to: Color, steps: number): StyleColor[] {
  const result: StyleColor[] = [];
  for (let i = 0; i < steps; i++) {
    const fb = i / steps;
    const fa = 1 - fb;
    const red = Math.floor(from[0] * fa + to[0] * fb);
    const green = Math.floor(from[1] * fa + to[1] * fb);
    const blue = Math.floor(from[2] * fa + to[2] * fb);
    const backgroundColor = `rgb(${red},${green},${blue})`;
    const color = red + green + blue < 225 ? WHITE_COLOR : BLACK_COLOR;

    result.push({ backgroundColor, color });
  }
  return result;
}

function scaleBySteps(max: number) {
  return [
    ...range([0, 255, 0], [225, 225, 0], max / 2),
    ...range([225, 225, 0], [255, 0, 0], max / 2),
    ...range([255, 0, 0], [225, 0, 225], max / 2),
    ...range([225, 0, 225], [64, 0, 64], max / 2),
    ...range([64, 0, 64], [16, 0, 8], 150),
  ];
}
