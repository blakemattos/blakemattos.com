function setup() {
  createCanvas(600, 600);
  noLoop(); // Prevents draw() from looping
}

function draw() {
  background(255); // Set background to white

  // Draw 19 grey circles
  for (let i = 0; i < 19; i++) {
    let x = random(width);
    let y = random(height);
    let size = random(20, 100); // Random size between 20px and 100px
    let borderWidth = random(4, 24); // Random border width between 4px and 24px

    stroke(random(50, 200)); // Random grey color
    strokeWeight(borderWidth);
    noFill();
    ellipse(x, y, size, size);
  }

  // Draw the pink circle on top
  let pinkX = random(width);
  let pinkY = random(height);
  let pinkSize = random(20, 100); // Random size for the pink circle

  stroke('rgb(241,84,210)'); // Set stroke color to pink
  strokeWeight(6); // Set border width to 6px
  noFill();
  ellipse(pinkX, pinkY, pinkSize, pinkSize);
}
