const paint = new p5(canvas => {
  canvas.sketch = {};
  canvas.preload = () => {
    document.oncontextmenu = () => {
      return false;
    };
  };

  canvas.setup = () => {
    canvas.createCanvas(canvas.windowWidth, canvas.windowHeight);
    canvas.sketch = canvas.createGraphics(
      canvas.windowWidth,
      canvas.windowHeight
    );
    canvas.sketch.background(255);
    canvas.sketch.sketchScale = 0.9;
    canvas.sketch.sketchX =
      (canvas.windowWidth - canvas.sketch.width * canvas.sketch.sketchScale) /
      2;
    canvas.sketch.sketchY =
      (canvas.windowHeight - canvas.sketch.height * canvas.sketch.sketchScale) /
      2;
    canvas.sketch.brushSize = 10;
    canvas.sketch.brushStrokeColor = canvas.color(0, 0, 0);
    canvas.sketch.brushFillColor = canvas.color(0, 0, 0);
    canvas.sketch.noLoop();
    canvas.noLoop();
  };

  canvas.draw = () => {
    canvas.background(canvas.color(105, 105, 105));
    canvas.scale(canvas.sketch.sketchScale);
    canvas.image(canvas.sketch, canvas.sketch.sketchX, canvas.sketch.sketchY);
  };

  canvas.mouseDragged = mouseEvent => {
    if (inSketch() && mouseEvent.target.id === "defaultCanvas0") sketch.draw();
  };

  canvas.mousePressed = mouseEvent => {
    canvas.loop();
    if (inSketch() && mouseEvent.target.id === "defaultCanvas0") sketch.click();
  };

  canvas.mouseReleased = canvas.noLoop;
  canvas.windowResized = () =>
    canvas.resizeCanvas(canvas.windowWidth, canvas.windowHeight);

  const inSketch = () =>
    canvas.mouseX >= canvas.sketch.sketchX * canvas.sketch.sketchScale &&
    canvas.mouseY >= canvas.sketch.sketchY * canvas.sketch.sketchScale &&
    canvas.mouseX <
      canvas.sketch.sketchX + canvas.sketch.width * canvas.sketch.sketchScale &&
    canvas.mouseY <
      canvas.sketch.sketchY + canvas.sketch.height * canvas.sketch.sketchScale;
}, "canvas");

const relativeX = () =>
  paint.mouseX / paint.sketch.sketchScale - paint.sketch.sketchX;
const relativeY = () =>
  paint.mouseY / paint.sketch.sketchScale - paint.sketch.sketchY;
const relativePX = () =>
  paint.pmouseX / paint.sketch.sketchScale - paint.sketch.sketchX;
const relativePY = () =>
  paint.pmouseY / paint.sketch.sketchScale - paint.sketch.sketchY;

const drawAction = tool => {
  sketch.draw = tool;
  sketch.click = () => {};
};

const clickAction = tool => {
  sketch.draw = () => {};
  sketch.click = tool;
};

const sketchBrushColor = color => {
  return color != undefined
    ? (paint.sketch.brushStrokeColor = color)
    : paint.sketch.brushStrokeColor;
};

const sketchFillColor = color => {
  return color != undefined
    ? (paint.sketch.brushFillColor = color)
    : paint.sketch.brushFillColor;
};

const sketchBrushSize = size => {
  return size != undefined
    ? (paint.sketch.brushSize = size)
    : paint.sketch.brushSize;
};

drawAction(move);
