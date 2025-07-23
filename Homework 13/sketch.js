//global variables
var playerX = 50;
var playerY = 350;

var obsX = [];
var obsY =[];
var obsSize = [];
var direction = [];
var obsColor =[[66, 173, 245],[45, 37, 250],[212, 245, 66],[250, 37, 62],[250, 115, 37]];   

var mousex = -200;
var mousey = -200;


function setup() {
  createCanvas(900, 700);
  noFill();
  
  for (var i = 0; i < 5; i++) {
      obsX[i] = floor(random(100, 750));
      obsY[i] = floor(random(50, 550));
      obsSize[i] = floor(random(15,150));
      direction[i] = floor(random(1,4.9))
    }
}

function draw() {
  drawBackground();
  if (checkWinCondition()) {
    drawWinScreen();
    drawBorder()
  } else {
    drawPlayer();
    drawExit();
    drawBorder()
    moveObstacles();
    drawObstacles()
    drawMouseObstacle();
  }
}

// FUNCTIONS

//Draws the background
function drawBackground() {
  stroke(26, 27, 28);
  fill(26, 27, 28);
  rect(0, 0, 900, 700);
}

//Draws the player character
function drawPlayer() {
  stroke(255, 246, 176);
  strokeWeight(100);
  point(playerX, playerY);
  stroke(201, 123, 26);
  strokeWeight(80);
  point(playerX, playerY);
  stroke(89, 15, 26);
  strokeWeight(60);
  point(playerX, playerY);
}

//Creates the exit
function drawExit() {
  stroke(7, 240, 11);
  rect(790, 0, 110, 40);
  strokeWeight(3);
  stroke(26, 27, 28);
  textSize(40);
  text("EXIT", 790, 50);
}

//Checks the player's position and whether that is in the exit
function checkWinCondition() {
  return playerX > 750 && playerY < 50;
}

//Draws the border around the screen
function drawBorder() {
  if (checkWinCondition()) {
    stroke(7, 240, 11); // same green as exit
  } else {
    stroke(111, 43, 214); // purple border
  }
  strokeWeight(10);
  noFill();
  rect(0, 0, 900, 700);
}

//Draws the you win message and clears the screen
function drawWinScreen() {
  strokeWeight(10);
  stroke(7, 240, 11);
  textSize(150);
  text("YOU WIN!", 50, 350);
}

//draws the 5 squares
function drawObstacles() {
  stroke(111, 43, 214);
  strokeWeight(8)
  for (var i = 0; i < 5; i++) {
    fill(obsColor[i]); 
    square(obsX[i],obsY[i],obsSize[i]);
  }
}

//moves the squares in a randomly asssigned direction around the screen, teleporting when they go off screen
function moveObstacles(){
    for (var i = 0; i < 5; i++) {    
      if (direction[i] == 1){
        if (obsY[i] > 690){
          obsY[i] = 0;
        }
        obsY[i] += 4;
      } else if (direction[i] == 2){
        if (obsX[i] > 890){
          obsX[i] = 0;
        }
        obsX[i] += 4;
      } else if (direction[i] == 3){
        if (obsY[i] < 10){
          obsY[i] = 700;
        }
        obsY[i] -= 4;
      } else if (direction[i] == 4){
        if (obsX[i] < 10){
          obsX[i] = 900;
        }
        obsX[i] -= 4;
      }
    }
}

//draws the pink oval
function drawMouseObstacle() {
  fill(252, 81, 241);
  ellipse(mousex, mousey, 150, 100);
  fill(26, 27, 28);
}

//moves the coordinates of the player when the wasd keys are pressed thus "moving" it
function keyPressed() {
  if (key == 'd') {
    playerX += 50;
  }
  if (key == 'a') {
    playerX -= 50;
  }
  if (key == 'w') {
    playerY -= 50;
  }
  if (key == 's') {
    playerY += 50;
  }
}

//Change the coordinates of the pink oval 
function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;
}
