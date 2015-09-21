var a = 0;

function setup() {
  createCanvas(800,600);
  
 
}

function draw() {
  background(50);
  fill(random(0,255),random(0,255),random(0,255));
  stroke(255, 255, 255);
  var velocityofthemouse = sqrt((pmouseX-mouseX)*(pmouseX-mouseX) + (pmouseY-mouseY)*(pmouseY-mouseY));
  var angleofthemouse = atan((pmouseY-mouseY)/(pmouseX-mouseX));
  ellipse(mouseX+100*sin(a), mouseY+100*cos(a), 60, 60);
  ellipse(mouseX+80*sin(a), mouseY+80*cos(a), 40, 40);
  ellipse(mouseX+60*sin(a), mouseY+60*cos(a), 20, 20);
  ellipse(mouseX+100*cos(a), mouseY+100*sin(a), 60, 60);
  ellipse(mouseX+80*cos(a), mouseY+80*sin(a), 40, 40);
  ellipse(mouseX+60*cos(a), mouseY+60*sin(a), 20, 20);
  a = a+(velocityofthemouse*0.5);
  fill(random(200,255),random(200,255),random(200,255));
  ellipse(mouseX, mouseY, 20, 20);
  

}

