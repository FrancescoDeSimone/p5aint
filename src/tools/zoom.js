'use strict';
const zoom = () => {
  if (paint.mouseButton === paint.LEFT) paint.sketch.sketchScale += 0.1;
  else if (paint.mouseButton === paint.RIGHT) paint.sketch.sketchScale -= 0.1;
};

const defaultBrushIcon = () => {
  paint.cursor(paint.ARROW);
};
