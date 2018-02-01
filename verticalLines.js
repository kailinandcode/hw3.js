//vertical lines

function verticalLinesAcross() {
  var count = 10;
  while (count < width) {
    line(count, 0, count, height);
    count = count + 10;
  }
}

verticalLinesAcross();
