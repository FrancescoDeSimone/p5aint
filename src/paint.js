const paint = new p5( (canvas) => {
  let sketch
  let sketchX = 0
  let sketchY = 0
  let sketchScale = 0.9
  canvas.setup = () => {
    canvas.createCanvas(canvas.windowWidth,canvas.windowHeight)
    sketch = canvas.createGraphics(canvas.windowWidth, canvas.windowHeight)
    sketch.background(255)
    sketchX = ((canvas.windowWidth - sketch.width) / 2)
    sketchY = ((canvas.windowHeight - sketch.height) / 2)
    sketch.noLoop()
    canvas.noLoop()
  }
  canvas.draw = () => {
    canvas.background(canvas.color(105,105,105))
    canvas.scale(sketchScale)
    canvas.image(sketch, sketchX, sketchY)
  }

  canvas.mousePressed = canvas.loop
  canvas.mouseDragged = (mouseEvent) => {
    if ( mouseEvent.target.id === 'defaultCanvas0' || mouseEvent.target.id == '' ) {
      //sketch.draw()
      /*sketch.strokeWeight(10)
      sketch.line((canvas.mouseX - sketchX) / sketchScale,
                  (canvas.mouseY - sketchY) / sketchScale,
                  (canvas.pmouseX - sketchX) / sketchScale,
                  (canvas.pmouseY - sketchY) / sketchScale)
      */
      sketchX += ((canvas.mouseX - canvas.pmouseX) / sketchScale)
      sketchY += ((canvas.mouseY - canvas.pmouseY) / sketchScale)
    }
  }
  canvas.mouseReleased = canvas.noLoop
  canvas.windowResized = () => canvas.resizeCanvas(canvas.windowWidth, canvas.windowHeight)
}, 'canvas')
