/* LEWITT-365: A square divided horizontally and vertically into four equal parts, 
each with a progressively darker gradation of gray.*/

//draw top-left rectangle with lightest shade of gray

noStroke();

fill(200);
rect(0, 0, width/2, height/2);
fill(175);
rect(width/2, 0, width, height/2);
fill(150);
rect(0, height/2, width/2, height);
fill(125);
rect(width/2, height/2, width, height);
