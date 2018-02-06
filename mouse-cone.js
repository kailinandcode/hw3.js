
noFill();

function mouseCone() {
  var startPt = width/2;
  var endPt = 0;
  while (endPt <= width) {
    line(startPt, 0, endPt, mouseY);
    endPt = endPt + 10;
  }
}

mouseCone();
