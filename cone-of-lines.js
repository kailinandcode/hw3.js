//A cone whose tip starts the the center on the top of the canvas

//line(x1, y1, x2, y2)

noFill();

function coneOfLines() {
  var startPt = width/2;
  var endPt = 0;
  while (endPt <= width) {
    line(startPt, 0, endPt, height);
    endPt = endPt + 10;
  }
}

coneOfLines();
