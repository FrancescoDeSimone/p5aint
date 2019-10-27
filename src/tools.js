const pen = () => {
  paint.sketch.stroke(sketchBrushColor());
  paint.sketch.strokeWeight(sketchBrushSize());
  paint.sketch.line(relativeX(), relativeY(), relativePX(), relativePY());
};

const move = () => {
  paint.sketch.sketchX +=
    (paint.mouseX - paint.pmouseX) / paint.sketch.sketchScale;
  paint.sketch.sketchY +=
    (paint.mouseY - paint.pmouseY) / paint.sketch.sketchScale;
};

const eraser = () => {
  paint.sketch.push();
  paint.sketch.fill(0);
  paint.sketch.noStroke();
  paint.sketch.rectMode(paint.sketch.CENTER);
  paint.sketch.rect(relativeX(), relativeY(), 60, 60);
  paint.sketch.pop();
};

const zoom = () => {
  if (paint.mouseButton === paint.LEFT) paint.sketch.sketchScale += 0.1;
  else if (paint.mouseButton === paint.RIGHT) paint.sketch.sketchScale -= 0.1;
};
