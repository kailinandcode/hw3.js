/*A black outlined square with a red horizontal line centered on the axis 
between the midpoint of the left side and the midpoint of the right side 
and a red diagonal line centered on the axis between the lower left and upper right corners.*/


noFill();

rect(10, 10, width-25, width-25);

stroke(178, 79, 14);
line(60, height/2, width-60, height/2);
line(width - 220, height-100, width-100, height/3);
