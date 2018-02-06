/*add else if clauses for keys 1, 2, and 3, 
which modify the diameter variable to change the size of the "paintbrush"*/

//purples, blues and yellows
//alternates diameter and/or color depending on key input

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
  } else if (key == '1') {
    diameter = 20;
    fill(163,206,220);
  } else if (key == '2') {
    diameter = 80;
    fill(111, 71, 111);
  } else if (key == '3') {
    diameter = 50;
    fill(252,197,76);
  }
}
