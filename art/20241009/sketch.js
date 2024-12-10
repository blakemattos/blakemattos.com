  let squares = [];
const squareSize = 60;
const numSquares = 3; // 3x3 grid
const colors = ['lightgray', 'darkgray', 'black'];
const shapes = ['circle', 'triangle', 'square'];

function setup() {
  createCanvas(400, 400);
  
  // Create squares and initialize their shapes
  for (let i = 0; i < numSquares; i++) {
    for (let j = 0; j < numSquares; j++) {
      let x = (width / numSquares) * i + (width / numSquares - squareSize) / 2;
      let y = (height / numSquares) * j + (height / numSquares - squareSize) / 2;
      squares.push(new ShapeSquare(x, y));
    }
  }
}

function draw() {
  background(255);
  
  // Draw each square and its shapes
  for (let square of squares) {
    square.display();
  }
}

function mousePressed() {
  // Check if a square is clicked and redraw its shapes
  for (let square of squares) {
    if (square.isMouseInside()) {
      square.randomizeShapes();
    }
  }
}

class ShapeSquare {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.shapes = [];
    this.randomizeShapes();
  }

  randomizeShapes() {
    this.shapes = [];
    for (let i = 0; i < 3; i++) { // Create three shapes
      let shapeType = random(shapes);
      let colorFill = random(colors);
      let posX = random(this.x + 1, this.x + squareSize - 1);
      let posY = random(this.y + 1, this.y + squareSize - 1);
      this.shapes.push({ type: shapeType, color: colorFill, x: posX, y: posY });
    }
  }

  display() {
    // Draw the outline of the square
    stroke(0);
    fill(255); // White fill for the square
    rect(this.x, this.y, squareSize, squareSize);
    
    // Draw the shapes inside the square
    for (let shape of this.shapes) {
      fill(shape.color);
      noStroke();
      switch (shape.type) {
        case 'circle':
          ellipse(shape.x, shape.y, 20, 20); // Circle with diameter of 20px
          break;
        case 'triangle':
          triangle(shape.x - 10, shape.y + 10, shape.x + 10, shape.y + 10, shape.x, shape.y - 10); // Triangle
          break;
        case 'square':
          rect(shape.x - 10, shape.y - 10, 20, 20); // Square with size of 20px
          break;
      }
    }
  }

  isMouseInside() {
    return mouseX > this.x && mouseX < this.x + squareSize && mouseY > this.y && mouseY < this.y + squareSize;
  }
}