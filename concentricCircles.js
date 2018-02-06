//Concentric Circles

noFill();

function concentricCircles() {
  var radius = height;
  while (radius > 10) {
    ellipse(width/2, width/2, radius, radius);
    radius = radius - 10;
  }
}

concentricCircles();
