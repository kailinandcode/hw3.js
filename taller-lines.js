//taller lines


noFill();

function tallerLines() {
  var numLines = 1;
  var endPt = 0;
  var xPosition = 0;
  while (numLines <= width/2) {
    line(xPosition, 0, xPosition, endPt);
    endPt = endPt + 8;
    numLines = numLines + 1;
    xPosition = xPosition + 5;
  }
}

tallerLines();
