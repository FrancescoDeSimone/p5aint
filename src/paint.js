p5.disableFriendlyErrors = true;
const paint = new p5(canvas => {
  canvas.sketch = {};
  canvas.preload = () => {
    document.oncontextmenu = () => false;
    canvas.drawBrush = () => {};
  };

  canvas.setup = () => {
    canvas.createCanvas(canvas.windowWidth, canvas.windowHeight, canvas.P3D);
    canvas.sketch = canvas.createGraphics(
      canvas.windowWidth,
      canvas.windowHeight
    );
    canvas.sketch.background(canvas.color(255, 255, 255));
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
    canvas.cursor(paint.MOVE);
    canvas.sketch.noLoop();
    canvas.noLoop();
    canvas.sketch.strokeJoin(canvas.ROUND);
  };

  canvas.draw = () => {
    canvas.background(canvas.color(105, 105, 105));
    canvas.scale(canvas.sketch.sketchScale);
    canvas.image(canvas.sketch, canvas.sketch.sketchX, canvas.sketch.sketchY);
    canvas.drawBrush();
    if (
      Math.abs(canvas.winMouseX - canvas.pwinMouseX) < 3 &&
      Math.abs(canvas.winMouseY - canvas.pwinMouseY) < 3 &&
      !canvas.mouseIsPressed
    )
      canvas.noLoop();
  };

  canvas.mouseDragged = mouseEvent => {
    if (canvas.mouseIsPressed &&
      inSketch() &&
      (mouseEvent.target.id === "defaultCanvas0" ||
        (canvas.startCanvas === "defaultCanvas0" && canvas.mouseIsPressed))
    )
      sketch.draw();
  };

  canvas.mousePressed = mouseEvent => {
    canvas.loop();
    canvas.startCanvas = mouseEvent.target.id;
    if (inSketch() && mouseEvent.target.id === "defaultCanvas0") sketch.click();
  };

  canvas.mouseMoved = canvas.loop;

//   canvas.mouseReleased = canvas.noLoop;
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

const relativeX = () => sketchMouseX() - paint.sketch.sketchX;
const relativeY = () => sketchMouseY() - paint.sketch.sketchY;
const relativePX = () => sketchMouseX(paint.pmouseX) - paint.sketch.sketchX;
const relativePY = () => sketchMouseY(paint.pmouseY) - paint.sketch.sketchY;

const drawAction = (tool, icon = defaultBrushIcon) => {
  paint.drawBrush = icon;
  sketch.draw = tool;
  sketch.click = () => {};
};

const clickAction = (tool, icon = defaultBrushIcon) => {
  paint.drawBrush = icon;
  sketch.draw = () => {};
  sketch.click = tool;
};

const sketchBrushColor = color =>
  color != undefined
    ? (paint.sketch.brushStrokeColor = color)
    : paint.sketch.brushStrokeColor;

const sketchFillColor = color =>
  color != undefined
    ? (paint.sketch.brushFillColor = color)
    : paint.sketch.brushFillColor;

const sketchBrushSize = size =>
  size != undefined ? (paint.sketch.brushSize = size) : paint.sketch.brushSize;

const sketchMouseX = (mouseX = paint.mouseX) =>
  mouseX / paint.sketch.sketchScale;
const sketchMouseY = (mouseY = paint.mouseY) =>
  mouseY / paint.sketch.sketchScale;

drawAction(move);
