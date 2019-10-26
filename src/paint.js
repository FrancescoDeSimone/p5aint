const paint = new p5( (canvas) => {
  canvas.sketch = {}
  canvas.setup = () => {
    canvas.createCanvas(canvas.windowWidth,canvas.windowHeight)
    canvas.sketch = canvas.createGraphics(canvas.windowWidth, canvas.windowHeight)
    canvas.sketch.background(255)
    canvas.sketch.sketchX = ((canvas.windowWidth - canvas.sketch.width) / 2)
    canvas.sketch.sketchY = ((canvas.windowHeight - canvas.sketch.height) / 2)
    canvas.sketch.sketchScale = 0.9
    canvas.sketch.noLoop()
    canvas.noLoop()
  }
  canvas.draw = () => {
    canvas.background(canvas.color(105,105,105))
    canvas.scale(canvas.sketch.sketchScale)
    canvas.sketch.rectMode(paint.sketch.CORNER);
    canvas.image(canvas.sketch, canvas.sketch.sketchX, canvas.sketch.sketchY)
  }

  canvas.mousePressed = canvas.loop
  
  canvas.mouseDragged = mouseEvent  => {
    if ( mouseEvent.target.id === 'defaultCanvas0' || mouseEvent.target.id == '' )
      sketch.draw()
  }

  canvas.mouseReleased = canvas.noLoop
  canvas.windowResized = () => canvas.resizeCanvas(canvas.windowWidth, canvas.windowHeight)
  
}, 'canvas')


sketch.draw = move