function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
describe('The Tailscale logo, but made of floating rotating spheres');
  let ts_white = color('#FAF9F8');
  let ts_grey = color('#444342');
  let ts_black = color('#181717');
  
  background(ts_black);
  noFill();
  
  
  rotateY(millis() / 8000);
  stroke(ts_white);
  // translate(noise(xOff)*100, noise(yOff)*height*0.01, -noise(zOff)*600);
  translate(0, 0)
  sphere(40, 12, 12);
  translate(-100, 0)
  sphere(40, 12, 12);
  translate(200, 0)
  sphere(40, 12, 12);
  translate(-100, 100)
  sphere(40, 12, 12);
  
stroke(ts_grey);
  translate(0, -200)
  sphere(40, 12, 12);
  translate(100, 0)
  sphere(40, 12, 12);
  translate(-200, 0)
  sphere(40, 12, 12);
  translate(0, 200)
  sphere(40, 12, 12);
  translate(200, 0)
  sphere(40, 12, 12);
}