function kailinPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 100, 100);
  
  // blocky J 
  fill(170, 50, 20);
	rect(x-30, y-30, x+20, y+20); 

  if (x < 100) {
    x = x + 100;
  }
  else if (x > 200) {
    x = x - 50;
  }
  if (y < 100) {
    y = y + 100;
  }
  else if (y > 100) {
    y = y - 50;
  }
  function makeLargerLines(x, y) {
  var expandLength = x-10;
  var expandHeight = x-20;
  var shiftLength = x+10;
  var shiftHeight = x+10;
  noFill();
    while (shiftLength < 700) {
    strokeWeight(6);
    stroke(150, expandHeight/5, 100);
    rect(expandLength, expandHeight,shiftLength, shiftHeight);
    rect(shiftLength, expandHeight, expandLength, expandHeight);
      
    stroke(190, shiftLength/5, 100);
    rect(shiftLength, expandHeight, expandLength, shiftHeight);
    rect(expandLength, shiftHeight, expandHeight, shiftLength);
      
    stroke(expandHeight-15, expandLength-15, 100);
    rect(expandHeight, shiftLength, shiftHeight, expandLength);
    rect(shiftLength, expandHeight, shiftHeight, expandLength);
    rect(shiftHeight, expandHeight, shiftLength, expandHeight);
    expandLength = expandLength - 10;
    expandHeight = expandHeight - 10;
    shiftLength = shiftLength + 10;
    shiftHeight = shiftHeight + 10;
  	}
  }
  
  makeLargerLines(x, y);
}
  
kailinPatch(0, 0);
