"use strict";
const getComplementary = value => {
  if (value.levels.slice(0, 3).every(item => item == 0))
    return paint.color(255, 255, 255);
  if (value.levels.slice(0, 3).every(item => item == 255))
    return paint.color(0, 0, 0);
  paint.colorMode(paint.HSB);
  const color = paint.color(
    (paint.hue(value) + 180) % 360,
    paint.saturation(value),
    paint.brightness(value)
  );
  paint.colorMode(paint.RGB);
  return color;
};

const pen = () => {
  paint.sketch.stroke(sketchBrushColor());
  paint.sketch.strokeWeight(sketchBrushSize());
  paint.sketch.line(relativeX(), relativeY(), relativePX(), relativePY());
};

const penBrushIcon = () => {
  paint.push();
  paint.noCursor();
  paint.fill(sketchBrushColor());
  paint.strokeWeight(sketchBrushSize() * 0.1);
  paint.stroke(
    getComplementary(paint.color(paint.sketch.get(relativeX(), relativeY())))
  );
  paint.circle(sketchMouseX(), sketchMouseY(), sketchBrushSize());
  paint.pop();
};
