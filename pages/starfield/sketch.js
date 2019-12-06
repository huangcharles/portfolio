'use strict';

var np = new Array();
var ob = new Array();
var cl = new Array();

function setup() {
  createCanvas(1000, 1000);
    frameRate(30);
    for (let i = 0; i < 200; i++) {
        np[i] = new NormalParticle();
    }
    for (let i = 0; i < 3; i++) {
        ob[i] = new Oddball();
    }

    for (let i = 0; i < 1; i++) {
        cl[i] = new Clock();
    }
}

function draw() {
    background(0);
    for (let part of np) {
        part.show();
        part.move();
    }
    for (let part of ob) {
        part.show();
        part.move();
    }
    for (let part of cl) {
        part.show();
        part.move();
    }
}


class Clock {
    constructor() {
        this.time = "";
        this.timeInt = 0;
        this.timeIntSlow = 0;
    }
    show() {
        fill(255, 255, 255);
        ellipse(width / 2, width / 2, 50, 50);
        noStroke();
    }
    move() {
        this.timeInt++;
        this.timeIntSlow = (int)(this.timeInt / 63);
        this.time = "" + this.timeIntSlow;
        fill(0, 0, 0);

        text(this.time, width / 2 - 9, width / 2 + 4);
    }
}



class NormalParticle {


    constructor() {
        this.x = width / 2;
        this.y = width / 2;
        this.r = random(150);
        this.theta = PI * 2 * random(1);
    }
    show() {
        fill(Math.floor(Math.random() * 255), Math.floor((Math.random() * 255)), Math.floor((Math.random() * 255)));
        ellipse(this.x, this.y, 10, 10);
        noStroke();
    }
    move() {
        this.x += this.r * Math.cos(this.theta);
        this.y += this.r * Math.sin(this.theta);
        var dir;
        dir =1;
        this.r += dir - 1;
        this.theta += 0.1;
    }
}

class Oddball {

    constructor() {
        this.x = width / 2;
        this.y = width / 2;
        this.r = 10;
        this.theta = PI * 2 * random(1);
        this.red = random(255);
        this.blu = random(255);
        this.grn = random(255);
    }
    show() {
        fill(this.red, this.grn, this.blu);
        ellipse(this.x, this.y, 50, 50);
        noStroke();
    }
    move() {
        this.x += this.r * Math.cos(this.theta);
        this.y += this.r * Math.sin(this.theta);
        this.theta -= 0.1;
    }
}
