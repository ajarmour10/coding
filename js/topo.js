let zOff = 0;

function setup() {
  const c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('z-index', '-1');
  c.style('position', 'fixed');
  noFill();
  stroke('#666');
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
      const yPos = y + map(n, 0, 1, -10, 10);
      vertex(x, yPos);
      xOff += 0.1;
    }
    endShape();
    yOff += 0.1;
  }
  zOff += 0.002;
}

function mouseMoved() {
  zOff += 0.01;
}

function mousePressed() {
  zOff += 0.05;
}
