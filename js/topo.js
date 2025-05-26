let zOff = 0;
let cursor = { x: 0, y: 0 };
let disturbRadius = 150;

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('z-index', '-1');
  c.style('position', 'fixed');
  noFill();
  stroke('#333'); // darker lines for contrast
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  clear();
  const step = 20;
  let yOff = 0;

  for (let y = 0; y < height; y += step) {
    beginShape();
    let xOff = 0;
    for (let x = 0; x < width; x += step) {
      const n = noise(xOff, yOff, zOff);
      let yPos = y + map(n, 0, 1, -10, 10);

      // Disturb only near the cursor
      const d = dist(x, y, cursor.x, cursor.y);
      if (d < disturbRadius) {
        const strength = map(d, 0, disturbRadius, 10, 0);
        yPos += random(-strength, strength);
      }

      vertex(x, yPos);
      xOff += 0.1;
    }
    endShape();
    yOff += 0.1;
  }

  // Subtle vibration for the whole pattern
  zOff += 0.002;
}

function mouseMoved() {
  cursor.x = mouseX;
  cursor.y = mouseY;
  // Slight vibration when moving the mouse
  zOff += 0.01;
}

function mousePressed() {
  // Temporarily increase disturbance radius for a "pulse" effect
  disturbRadius = 300;
  setTimeout(() => (disturbRadius = 150), 300);
}
