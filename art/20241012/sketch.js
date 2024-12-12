function setup() {
  createCanvas(800, 800); // Create an 800x800 canvas
  background(255); // Set background to white

  for (let i = 0; i < 12; i++) {
    drawPinkDiamond(random(100, 700), random(100, 700)); // Draw 12 diamonds at random positions
  }
}

function drawPinkDiamond(centerX, centerY) {
  // Generate random lengths for each segment of the diamond
  let lengthA = random(20, 120); // Length for segment A
  let lengthB = random(20, 120); // Length for segment B
  let lengthC = random(20, 120); // Length for segment C
  let lengthD = random(20, 120); // Length for segment D

  // Calculate the points of the diamond shape
  let x1 = centerX; // Center X
  let y1 = centerY - lengthA; // Vertex A
  let x2 = centerX + lengthB; // Vertex B
  let y2 = centerY; // Vertex B
  let x3 = centerX; // Vertex C
  let y3 = centerY + lengthC; // Vertex C
  let x4 = centerX - lengthD; // Vertex D
  let y4 = centerY; // Vertex D

  // Draw the diamond shape
  noStroke(); // No border for the diamond
  fill('#FFE9FE'); // Fill color for the diamond
  beginShape();
  vertex(x1, y1); // Vertex A [a]
  vertex(x2, y2); // Vertex B [b]
  vertex(x3, y3); // Vertex C [c]
  vertex(x4, y4); // Vertex D [d]
  endShape(CLOSE);

  // Calculate points for the first triangle connected to vertices D and C
  let triangleBaseX1 = x3; // Vertex C (base of first triangle)
  let triangleBaseY1 = y3; // Vertex C (base of first triangle)
  
  let triangleBaseX2 = x4; // Vertex D (base of first triangle)
  let triangleBaseY2 = y4; // Vertex D (base of first triangle)

  let triangleTipX1 = x3; // Same X as C for first triangle
  let triangleTipY1 = y3 + 100; // Extend down from C by 100px

  // Draw the first triangle shape
  fill('#C681C4'); // Fill color for the first triangle
  beginShape();
  vertex(triangleBaseX1, triangleBaseY1); // Base point at C [c]
  vertex(triangleBaseX2, triangleBaseY2); // Base point at D [d]
  vertex(triangleTipX1, triangleTipY1); // Tip of the first triangle extended down
  endShape(CLOSE);

  
   // Calculate points for the second triangle connected to vertices B and C
   let secondTriangleBaseX1 = x3; // Vertex C (base of second triangle)
   let secondTriangleBaseY1 = y3; // Vertex C (base of second triangle)

   let secondTriangleBaseX2 = x2; // Vertex B (base of second triangle)
   let secondTriangleBaseY2 = y2; // Vertex B (base of second triangle)

   let secondTriangleTipX = x3; // Same X as C for second triangle
   let secondTriangleTipY = y3 + 100; // Extend down from C by another 100px

   // Draw the second triangle shape
   fill('#A968A8'); // Fill color for the second triangle
   beginShape();
   vertex(secondTriangleBaseX1, secondTriangleBaseY1); // Base point at C [c]
   vertex(secondTriangleBaseX2, secondTriangleBaseY2); // Base point at B [b]
   vertex(secondTriangleTipX, secondTriangleTipY); // Tip of the second triangle extended down
   endShape(CLOSE);
}

function draw() {
    // No continuous drawing needed
}
