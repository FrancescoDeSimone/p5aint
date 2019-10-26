const relativeX = (mouse = paint.mouseX) => ((mouse - paint.sketch.sketchX) / paint.sketch.sketchScale)
const relativeY = (mouse = paint.mouseY) => ((mouse - paint.sketch.sketchY) / paint.sketch.sketchScale)

const pen = () => {
    paint.sketch.stroke(0);
    paint.sketch.strokeWeight(10)
    console.log((paint.mouseX - paint.sketch.sketchX) / paint.sketch.sketchScale)
    paint.sketch.line(relativeX(), relativeY(),relativeX(paint.pmouseX), relativeY(paint.pmouseY))
}

const move = () =>{
  paint.sketch.sketchX += ((paint.mouseX - paint.pmouseX) / paint.sketch.sketchScale)
  //paint.sketch.sketchY += ((paint.mouseY - paint.pmouseY) / paint.sketch.sketchScale)
}

const eraser = () =>{
    paint.sketch.fill(255)
    paint.sketch.noStroke();
    paint.sketch.rectMode(paint.sketch.CENTER);
    paint.sketch.rect(relativeX(), relativeY(), 60, 60);
}