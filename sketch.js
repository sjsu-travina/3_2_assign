'use strict'

var canvas;
var click1;
var click2;
var click3;
var click4;
var click5;
var click6;
var click7;
var clickImg;

let state = 'title'
let cnv;
let point = 0;
let w = 600;
let h = 600;

function preload(){
  clickImg = loadImage('assets/logo.png');

  //textfont('courier new');
}
function setup() {
  cnv = createCanvas(w, h);

  // // Click is Plant Create, style and resize clickables.
  // click1 = new Clickable();
  // click1.locate(20, 20);
  // //This function is ran when the clickable is hovered but not pressed.
  // click1.onHover = function () {
  //   this.color = "#AAAAFF";
  //   this.textColor = "#FFFFFF";
  //   this.text = "plant";

  // // Click is Plant Create, style and resize clickables.
  // click1 = new Clickable();
  // click1.image = clickImg;
  // click1.fitImage = true;
  // click1.imageScale = 1;
  // click1.text = "";
  // click1.locate(40, 400);
  // click1.resize(120, 90);
  // //This function is ran when the clickable is hovered but not pressed.
  // click1.onHover = function () {
  //   this.color = "#AAAAFF";
  //   this.textColor = "#FFFFFF";
  //   this.text = "plant";
  // }
  // // This function is ran when the clickable is NOT hovered.
  // click1.onOutside = function () {
  //   this.color = "#EEEEEE";
  //   this.text = "Hello there!";
  //   this.textColor = "#000000";
  // }
  // // //This function is ran when the clickable is pressed.
  // // click1.onPress = function () {
  // //   this.stroke = "#FF0000";
  // // }
  // // //This funcion is ran when the cursor was pressed and then
  // // //rleased inside the clickable. If it was pressed inside and
  // // //then released outside this won't work.
  // // click1.onRelease = function () {
  // //   this.x += 10;
  // // }
  //
  // // click is big Box
  // click2 = new Clickable();
  // click2.cornerRadius = 0;
  // click2.textScaled = true;
  // click2.text = "Second Chance";
  // click2.locate(60, 60);
  // click2.resize(250, 100);
  // click2.onOutside = function () {
  //   this.color = "#FFFFFF";
  // }
  // click2.onHover = function () {
  //   this.color = "#AA33AA";
  // }
  // click2.onPress = function () {
  //   alert("Hi there!");
  // }
  // // click is right side slightly stretched
  // click3 = new Clickable();
  // click3.image = clickImg;
  // click3.locate(280,250);
  // click3.resize(100,100);
  // click3.text = "";
  // click3.onHover = function () {
  //   this.color = "#AA33AA";
  //   this.noTint = false;
  //   this.tint = "#FF0000";
  // }
  // click3.onOutside = function () {
  //   this.color = "#FFFFFF";
  //   this.noTint = true;
  // }
  //
  // // click is completly stretched image will stretch to fill button by default
  // click4 = new Clickable();
  // click4.image = clickImg;
  // click4.imageScale = 1;
  // click4.text = "";
  // click4.locate(10, 200);
  // click4.resize(120, 90);
  // click4.onHover = function () {
  //   click4.imageScale = 1.1;
  // }
  // click4.onOutside = function () {
  //   click4.imageScale = 1;
  // }

  // click is ORIGINAL centered and fitted
  click5 = new Clickable();
  click5.image = clickImg;
  click5.fitImage = true; // no stretching!
  click5.imageScale = 1;
  click5.text = "";
  click5.locate(250, 400);
  click5.resize(120, 90);
  click5.onHover = function () {
    click5.imageScale = 1.1;
  }
  click5.onOutside = function () {
    click5.imageScale = 1;
  }

  // click is ORIGINAL 2 centered and fitted
  click6 = new Clickable();
  click6.image = clickImg;
  click6.fitImage = true; // no stretching!
  click6.imageScale = 1;
  click6.text = "";
  click6.locate(450, 400);
  click6.resize(120, 90);
  click6.onHover = function () {
    click6.imageScale = 1.1;
  }
  click6.onOutside = function () {
    click6.imageScale = 1;
  }

  // click is ORIGINAL 3 centered and fitted
  click7 = new Clickable();
  click7.image = clickImg;
  click7.fitImage = true; // no stretching!
  click7.imageScale = 1;
  click7.text = "";
  click7.locate(40, 400);
  click7.resize(120, 90);
  click7.onHover = function () {
    click7.imageScale = 1.1;
  }
  click7.onOutside = function () {
    click7.imageScale = 1;
  }
}

function draw() {
  background(255);


// Switch Function - the frames will be switch from the 'title' page to 'level page' to 'end game' page. When switched to the Level frame, it will take the player to click 10 times (click x10 = points x10) to switch to the end game page. the player will then be able to return to the 'level' page by clicking the background of the 'end game' page.
  switch (state){
    case 'title':
      title();
  cnv.mouseClicked(titleMouseClicked);
     break;
     case 'level 1':
       level1();
  cnv.mouseClicked(level1MouseClicked);
     break;
     case 'you win':
       youWin();
  cnv.mouseClicked(youWinMouseClicked);
     break;
     default:
     break;
       }

     }

function title(){
  background(125, 180, 175);
  textSize(50);
  strokeWeight(4);
  stroke(230, 111, 100),
  fill(246, 184, 155);
  textAlign(CENTER);
  text('SECOND CHANCE', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background(246, 184, 155);
    //click1.draw();
  //  click2.draw();
  //  click3.draw();
  //  click4.draw();
    click5.draw();
    click6.draw();
    click7.draw();

  text('click for points', w/2, h - 30);
}

function level1MouseClicked(){

  points ++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}
function youWin(){
  background(255, 50, 80);
  textSize(50);
  strokeWeight(2);
  stroke(255);
  text('YOU WIN', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
