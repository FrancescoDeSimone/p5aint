"use strict";

const eraser = () => {
  paint.sketch.push();
  paint.sketch.stroke(255);
  paint.sketch.strokeWeight(sketchBrushSize());
  paint.sketch.line(relativeX(), relativeY(), relativePX(), relativePY());
  paint.sketch.pop();
};

const eraserBrushIcon = () => {
  paint.push();
  paint.noCursor();
  paint.fill(255);
  paint.strokeWeight(sketchBrushSize() * 0.1);
  paint.stroke(0);
  paint.circle(sketchMouseX(), sketchMouseY(), sketchBrushSize());
  paint.pop();
};
