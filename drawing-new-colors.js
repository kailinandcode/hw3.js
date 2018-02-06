function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'R') {
    fill(170, 40, 150);
  } else if (key == 'G') {
    fill(0, 105, 150);
  } else if (key == 'B') {
    fill(0, 0, 180); 
  } else if (key == 'P') {
    fill(50, 10, 250);
  } else if (key == '4') {
    fill(124, 44, 255);
  } else if (key == 'O') {
    fill(100, 80, 80);
  }
}
