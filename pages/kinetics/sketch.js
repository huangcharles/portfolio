var n = [];

var h = new Array();

var deadH = [];

var a = [];

 

function setup() {

 createCanvas(1000, 1000);

    for (let i = 0; i < 160; i++) {

        n[i] = new Nitrogen((int)(Math.random() * 1000), (int)(Math.random() * 1000));

    }

    for (let i = 0; i < 480; i++) {

        h[i] = new Hydrogen((int)(Math.random() * 1000), (int)(Math.random() * 1000));

    }

 

}

var xDist;

var yDist;

 

function draw() {

    background(0);

    for (let i = 0; i < n.length; i++) {

        n[i].show();

        n[i].move();

    }

    for (let i = 0; i < h.length; i++) {

        h[i].show();

        h[i].move();

    }

    for (let i = 0; i < a.length; i++) { //show and move new ammonia

        a[i].show();

        a[i].move();

    }

 

    for (var nit of n) {

        var c = 0;

        for (var hyd of h) {

            xDist = abs(nit.getX() - hyd.getX());

            yDist = abs(nit.getY() - hyd.getY());

            if (xDist * xDist + yDist * yDist < 101) {

                c++;

                deadH.push(hyd);

            }

        }

        if (c == 3) {

 

            a.push(new Ammonia(nit.getX(), nit.getY())); //creates new ammonia

            a.push(new Ammonia(nit.getX(), nit.getY())); //creates new ammonia

 

            nit.setPos(); //makes nitrogen reactant disappear

            for (var hyd of h) {

                xDist = abs(nit.getX() - hyd.getX());

                yDist = abs(nit.getY() - hyd.getY());

                if (xDist * xDist + yDist * yDist < 101) {

                    hyd.setPos(); //makes hydrogen disappear

                }

            }

        }

    }

}

 

 

 

 

class Nitrogen {

    constructor(a, b) {

        this.x = a;

        this.y = b;

 

        this.yDirSetter = Math.random();

        this.yDir;

        if (this.yDirSetter < 0.5) {

            this.yDir = -1;

        } else {

            this.yDir = 1;

        }

        this.xVel = (int)(Math.random() * 35 - 17);

        this.yVel = this.yDir * (int)(sqrt((float)(289 - this.xVel * this.xVel)));

    }

 

    move() {

        this.x += this.xVel;

        this.y += this.yVel;

        if (this.x >= 1000 || this.x <= 0) {

            this.xVel = -this.xVel;

        }

        if (this.y >= 1000 || this.y <= 0) {

            this.yVel = -this.yVel;

        }

    }

    show() {

        fill(255, 0, 0);

        ellipse(this.x, this.y, 10, 10);
        noStroke();

    }

    setPos() {

        this.x = 1901;

        this.y = 1901;

        this.xVel = 1;

        this.yVel = 1;

    }

    getX() {

        return this.x;

    }

    getY() {

        return this.y;

    }

 

 

}

 

 

 

class Hydrogen {

 

 

    constructor(a, b) {

        this.x = a;

        this.y = b;

 

        this.yDirSetter = Math.random();

        this.yDir;

        if (this.yDirSetter < 0.5) {

            this.yDir = -1;

        } else {

            this.yDir = 1;

        }

        this.xVel = (int)(Math.random() * 239 - 119);

        this.yVel = this.yDir * (int)(sqrt((float)(14161 - this.xVel * this.xVel)));

    }

 

    move() {

        this.x += this.xVel;

        this.y += this.yVel;

        if (this.x >= 1000 || this.x <= 0) {

            this.xVel = -this.xVel;

        }

        if (this.y >= 1000 || this.y <= 0) {

            this.yVel = -this.yVel;

        }

    }

    show() {

        fill(0, 255, 0);

        ellipse(this.x, this.y, 4, 4);
        noStroke();

    }

    setPos() {

        this.x = 1091;

        this.y = 1091;

        this.xVel = 1;

        this.yVel = 1;

    }

    getX() {

        return this.x;

    }

    getY() {

        return this.y;

    }

}

 

 

class Ammonia {

 

    constructor(a, b) {

        this.x = a;

        this.y = b;

 

        this.yDirSetter = Math.random();

        this.yDir;

        if (this.yDirSetter < 0.5) {

            this.yDir = -1;

        } else {

            this.yDir = 1;

       }

        this.xVel = (int)(Math.random() * 29 - 14);

        this.yVel = this.yDir * (int)(sqrt((float)(196 - this.xVel * this.xVel)));

    }

 

    move() {

        this.x += this.xVel;

        this.y += this.yVel;

        if (this.x >= 1000 || this.x <= 0) {

            this.xVel = -this.xVel;

        }

        if (this.y >= 1000 || this.y <= 0) {

            this.yVel = -this.yVel;

        }

    }

    show() {

        fill(0, 0, 255);

        ellipse(this.x, this.y, 17, 17);
        noStroke();

    }

    setPos() {

        this.arbitraryNumberThatDoesNothingLol = 96485;

    }

    getX() {

        return this.x;

    }

    getY() {

        return this.y;

    }

}