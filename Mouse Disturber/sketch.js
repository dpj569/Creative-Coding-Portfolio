let mode = 1;
let shapes = [];

function setup() {
  createCanvas(600, 600);  // Sets up a 600x600 pixel canvas
  noStroke();              // Removes outlines from shapes for a cleaner look

  // Creates three buttons to switch between interaction modes
  createButton('Repel').position(10, height + 10).mousePressed(() => mode = 1);
  createButton('Grow').position(80, height + 10).mousePressed(() => mode = 2);
  createButton('Orbit').position(150, height + 10).mousePressed(() => mode = 3);

  // Initializes 20 shapes with random positions and properties
  for (let i = 0; i < 20; i++) {
    let x = random(width);
    let y = random(height);
    shapes.push({
      originX: x,        // Original X position (used for orbiting)
      originY: y,        // Original Y position
      x: x,              // Current X position
      y: y,              // Current Y position
      size: random(20, 40),        // Starting size of the shape
      angle: random(TWO_PI),       // Starting angle for orbiting
      speed: random(0.01, 0.03)    // Speed of orbiting animation
    });
  }
}

function draw() {
  background(240);  // Light grey background for contrast

  for (let shape of shapes) {
    if (mode === 1) {
      // Mode 1: Repel – shapes move away from the mouse when nearby
      let dx = shape.x - mouseX;
      let dy = shape.y - mouseY;
      let distSq = dx * dx + dy * dy;
      if (distSq < 10000) {
        shape.x += dx * 0.01;
        shape.y += dy * 0.01;
      }
    } else if (mode === 2) {
  // Mode 2: Grow – shapes increase in size when the mouse is close
      let d = dist(shape.x, shape.y, mouseX, mouseY);
      if (d < 150) {
        shape.size += 0.5;
        if (shape.size > 80) shape.size = 20;  
        // Reset size if it    gets too large
      }
    } else if (mode === 3) {
      // Mode 3: Orbit – shapes orbit around their original position       when mouse is near
      let d = dist(mouseX, mouseY, shape.originX, shape.originY);
      if (d < 100) {
        shape.angle += shape.speed;
        shape.x = shape.originX + cos(shape.angle) * 20;
        shape.y = shape.originY + sin(shape.angle) * 20;
      } else {
        shape.x = shape.originX;
        shape.y = shape.originY;
      }
    }

    // Draws the shape with semi-transparent blue fill
    fill(100, 150, 255, 180);
    ellipse(shape.x, shape.y, shape.size);
  }

  // Displays the current mode label at the top-left corner
  fill(0);
  textSize(16);
  text(`Mode: ${mode === 1 ? 'Repel' : mode === 2 ? 'Grow' : 'Orbit'}`, 10, 20);
}