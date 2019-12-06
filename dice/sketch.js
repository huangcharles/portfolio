var die1;
pipVals = new Array();
 var summation;
 var cumAvg;
  var i=0;
  var j=0;
 function setup()
{
  createCanvas(560, 650);  
  noLoop();
}
function draw()
{
  background(255, 255, 255);

  die1=new Die(10, 10);
  die1.show();

  for (let l=0; l<25; l++) {
    if (l<5) {
      i=10;
    } else {
      if (l<10) {
        i=120;
      } else {
        if (l<15) {
         i=230;
        } else {
          if (l<20) {
            i=340;
          } else {
            if (l<25) {
              i=450;
            }
          }
        }
      }
    }
    if (l%5==0) {
     j=10;
    } else {
      if (l%5==1) {
        j=120;
      } else {
        if (l%5==2) {
          j=230;
        } else {
          if (l%5==3) {
           j=340;
          } else {
            if (l%5==4) {
              j=450;
            }
          }
        }
      }
    }
    die1=new Die(i, j);
    die1.show();

  }
      for (let r=1; r<pipVals.length; r++) {
      if(r%26!=0){
      this.summation+=pipVals.get(r);
      }
    }
    this.cumAvg=this.summation/(pipVals.length-(pipVals.length/26));
    var numDice=(pipVals.length-(pipVals.length/26));

    smooth();
    text("Total number of dice: "+this.numDice,50, 590);
text("Cumulative sum of dice: "+this.summation,50, 605);
text("Cumulative average of dice: "+this.cumAvg,50, 620);

}

function mousePressed()
{
  redraw();
}
class Die //models one single dice cube
{
  //variable declarations here
  constructor( x, y)
  {
    this.x=x;
    this.y=y;
    this.rand=(random(6)+1);
    this.numRolls=0;
  }


   show()
  {
    if (mousePressed){
            this.numRolls++;
    }
    if (mousePressed) {
      fill(floor(Math.random()*255), floor(Math.random()*255), floor(Math.random()*255));
      rect(this.x, this.y, 100, 100, 10); 
      if (this.rand==1) {//positions pips for roll of 1
        pipVals.push(this.rand);
        fill(0);
        ellipse(this.x+50, this.y+50, 15, 15);
      } else {
        if (this.rand==2) { //positions pips for roll of 2
          pipVals.push(this.rand);
          fill(0);
          if (random(1)>0.5) {
            ellipse(this.x+27, this.y+27, 15, 15);
            ellipse(this.x+73, this.y+73, 15, 15);
          } else {
            ellipse(this.x+27, this.y+73, 15, 15);
            ellipse(this.x+73, this.y+27, 15, 15);
          }
        } else {
          if (this.rand==3) {//positions pips for roll of 3
            pipVals.push(rand);
            fill(0);
            ellipse(this.x+50, this.y+50, 15, 15);
            if (random(1)>0.5) {
              ellipse(this.x+25, this.y+25, 15, 15);
              ellipse(this.x+75, this.y+75, 15, 15);
            } else {
              ellipse(this.x+25, this.y+75, 15, 15);
              ellipse(this.x+75, this.y+25, 15, 15);
            }
          } else {
            if (this.rand==4) {//positions pips for roll of 4
              pipVals.push(this.rand);
              fill(0);
              ellipse(this.x+28, this.y+28, 15, 15);
              ellipse(this.x+72, this.y+72, 15, 15);
              ellipse(this.x+28, this.y+72, 15, 15);
              ellipse(this.x+72, this.y+28, 15, 15);
            } else {
              if (this.rand==5) {//positions pips for roll of 5
                pipVals.push(this.rand);
                fill(0);
                ellipse(this.x+50, this.y+50, 15, 15);
                ellipse(this.x+25, this.y+75, 15, 15);
                ellipse(this.x+75, this.y+25, 15, 15);
                ellipse(this.x+25, this.y+25, 15, 15);
                ellipse(this.x+75, this.y+75, 15, 15);
              } else {
                if (this.rand==6) {//positions pips for roll of 6
                  pipVals.push(this.rand);
                  fill(0);
                  if (random(1)>0.5) {
                    ellipse(this.x+31, this.y+25, 15, 15);
                    ellipse(this.x+31, this.y+50, 15, 15);
                    ellipse(this.x+31, this.y+75, 15, 15);
                    ellipse(this.x+69, this.y+25, 15, 15);
                    ellipse(this.x+69, this.y+50, 15, 15);
                    ellipse(this.x+69, this.y+75, 15, 15);
                  } else {
                    ellipse(this.x+25, this.y+31, 15, 15);
                    ellipse(this.x+50, this.y+31, 15, 15);
                    ellipse(this.x+75, this.y+31, 15, 15);
                    ellipse(this.x+25, this.y+69, 15, 15);
                    ellipse(this.x+50, this.y+69, 15, 15);
                    ellipse(this.x+75, this.y+69, 15, 15);
                  }
                }
              }
            }
          }
        }
      }
    }



  }
}

