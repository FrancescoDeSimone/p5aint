p5.disableFriendlyErrors = true;
const pen = () => {
  paint.sketch.stroke(sketchBrushColor());
  paint.sketch.strokeWeight(sketchBrushSize());
  paint.sketch.line(relativeX(), relativeY(), relativePX(), relativePY());
};

const penBrushIcon = () => {
  paint.push();
  paint.strokeWeight(sketchBrushSize());
  paint.stroke(sketchBrushColor());
  paint.noCursor();
  paint.point(sketchMouseX(), sketchMouseY());
  paint.pop();
};

const move = () => {
  paint.sketch.sketchX += sketchMouseX(paint.mouseX - paint.pmouseX);
  paint.sketch.sketchY += sketchMouseY(paint.mouseY - paint.pmouseY);
};

const moveBrushIcon = () => {
  paint.cursor(paint.MOVE);
};

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
  paint.circle(sketchMouseX(), sketchMouseY(), sketchBrushSize());
  paint.pop();
};

const zoom = () => {
  if (paint.mouseButton === paint.LEFT) paint.sketch.sketchScale += 0.1;
  else if (paint.mouseButton === paint.RIGHT) paint.sketch.sketchScale -= 0.1;
};

const defaultBrushIcon = () => {
  paint.cursor(paint.ARROW);
};
