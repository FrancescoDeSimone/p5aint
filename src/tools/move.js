const move = () => {
  paint.sketch.sketchX += sketchMouseX(paint.mouseX - paint.pmouseX);
  paint.sketch.sketchY += sketchMouseY(paint.mouseY - paint.pmouseY);
};

const moveBrushIcon = () => {
  paint.cursor(paint.MOVE);
};
