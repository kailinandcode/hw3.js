//horizontal lines across the canvas

function horizontalLinesAcross() {
  var currY = height;
  while (currY >= 0) {
    line(0, currY, width, currY);
    currY = currY - 10;
  }
}

horizontalLinesAcross();
