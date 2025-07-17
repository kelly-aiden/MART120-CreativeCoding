//global variables
var noseSpeed;
var jawSpeed;
var eyeSpeed;

var eyeBool = true;
var jawBool = true;
var noseBool = true;
var nameBool = true;

var noseX = 375;
var noseY = 370;
var eyeX = 325;
var jawY = 500;

var nameCounter = 1;
var delay = 0;

function setup() {
  createCanvas(800, 800);
  noFill();
  
  noseSpeed = floor(random(1, 5));
  jawSpeed = floor(random(1, 20));
  eyeSpeed = floor(random(1, 15));
}

function draw() {
  //outer skull
  stroke('cyan');
  strokeWeight(40);
  background(6, 8, 10);
  arc(400, 350, 550, 600, PI, 0);
  line(125,350,250,350);
  line(250,350,250,500);
  line(550,350,675,350);
  line(550,350,550,500);
  line(250,500,550,500);
  
  //teeth
  strokeWeight(25);
  line(350,500,350,425);
  line(450,500,450,425);
  
  //eye socket
  strokeWeight(15);
  ellipse(325,200,125,200);
  ellipse(475,200,125,200);
  
  //nose
  if (noseX > 400){
    noseBool = false;
  } 
  if (noseX < 375){
    noseBool = true;
  } 
  if (noseBool){
    noseX += noseSpeed;
    noseY += noseSpeed;
  } else{
    noseX -= noseSpeed;
    noseY -= noseSpeed;
  }
  strokeWeight(7);
  triangle(noseX,noseY,noseX+25,noseY-70,noseX+50,noseY);
  
  //bottom jaw
  if (jawY > 575){
    jawBool = false;
  }
  if (jawY < 500){
    jawBool = true;
  }
  if (jawBool){
    jawY += jawSpeed;
  } else{
    jawY -= jawSpeed;
  }
  strokeWeight(40);
  rect(250,jawY,300,125);
  strokeWeight(25);
  line(350,jawY,350,jawY+75);
  line(450,jawY,450,jawY+75);
  
  //eyes
  stroke('#5802F1');
  strokeWeight(70);
  if (eyeX < 300){
    eyeBool = false;
  } 
  if (eyeX > 350){
    eyeBool = true;
  } 
  if (eyeBool){
    eyeX -= eyeSpeed;
  } else{
    eyeX += eyeSpeed;
  }
  point(eyeX,200);
  point(eyeX+150,200);
  
  //name
  if (delay % 50 == 0){
    if (nameCounter == 6) {
      nameBool = false;
    }
    if (nameCounter == 1) {
      nameBool = true;
    }
    if (nameBool) {
      nameCounter += 1;
    } else {
      nameCounter -= 1;
    }
  }
  strokeWeight(3);
  textSize(nameCounter * 20);
  text("Aiden Kelly", 50, 750);
  delay++
}