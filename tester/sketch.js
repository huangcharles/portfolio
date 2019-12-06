'use strict';


var startX = 10000;
var startY;
var endX = 0;
var endY;
var vdgg;
var cage;

function setup()
{
 var canvas = createCanvas(1500, 650);
    canvas.parent('sketch-div');
  strokeWeight(2);
  background(0);
  vdgg = loadImage("../pages/lightning/data/vdgg.png");
  cage = loadImage("../pages/lightning/data/cage.jpg");
    frameRate(1);
}
function draw()
{
  background(0);
  image(vdgg, 0, 250);
  image(cage, 750, 200);
  stroke(255, 255, 100);
  image(vdgg, 0, 250);
  image(cage, 750, 200);
  stroke(255, 255, 100);

    
  while (endX < 1500) {
    endX = startX + (random(4));
    endY = startY + (random(10) - 5);

    if (startX < 750 && endX >= 750 && endX < 1030) {
      if (endY > 200 && endY < 450) {
        startX = 1031;
        startY = (random(250) + 200);
        endX = startX + (random(4));
        endY = startY + (random(9)+4);
      }
    }
    
     if ((startY < 200 && endY >= 200 )|| (startY > 450 && endY < 450)) {
      if (endX > 750 && endX < 1030) {
        startX = 1031;
        startY = (random(250) + 200);
        endX = startX + (random(4));
        endY = startY + (random(9) + 4);
      }
    }

    line(startX, startY, endX, endY);

    startX=endX;
    startY=endY;
  }
  methodName();
}

function mousePressed() {
  startY = (random(246))+255;
  startX = 136+Math.sqrt(-1*Math.pow(startY, 2)+780*startY-140000);
  endX = 0;
  endY = 375;
}

function methodName() {
}

