//diamond-lines


noFill();

function diamondLines() {
  var startPt = width/2;
  var startHeight = height;
  var widthLine = 0;
  var endPt = startPt;
  while (endPt <= width) {
    line(startPt, startHeight, endPt, startHeight);
    startPt = startPt - 5;
    endPt = endPt + 5;
    startHeight = startHeight - 5;
  }
  while (startHeight <= height) {
    line(startPt, startHeight, endPt, startHeight);
    startPt = startPt + 5;
    endPt = endPt - 5;
    startHeight = startHeight - 5;
  }
}

diamondLines();
