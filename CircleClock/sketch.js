function setup() {
  createCanvas(400, 400); // Creates a 400x400 pixel drawing area
  angleMode(DEGREES);     // Sets angle calculations to degrees for                              intuitive arc drawing
  noStroke();             // Removes outlines from shapes for a                                 smooth, filled look
}

function draw() {
  background(30); // Dark background for contrast

  // Get current time
  let hr = hour();
  let mn = minute();
  let sc = second();

  // Translate to center
  translate(width / 2, height / 2);

  // Draw seconds ring
  fill(255, 100, 100); // Soft red
  arc(0, 0, 300, 300, -90, map(sc, 0, 60, -90, 270));

  // Draw minutes ring
  fill(100, 200, 255); // Soft blue
  arc(0, 0, 260, 260, -90, map(mn, 0, 60, -90, 270));

  // Draw hours ring
  fill(180, 255, 180); // Soft green
  arc(0, 0, 220, 220, -90, map(hr % 12, 0, 12, -90, 270));

}