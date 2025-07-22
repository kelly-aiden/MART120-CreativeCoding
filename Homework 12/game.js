//global variables
var playerX = 50;
var playerY = 350;

var obs1X;
var obs1Y;
var obs2X;
var obs2Y;
var oldTime = 0;

var mousex = -200;
var mousey = -200;


function setup() {
  createCanvas(900, 700);
  noFill();
  
  obs1X = random(50, 750);
  obs1Y = random(50, 550);
  
  obs2X = random(50, 750);
  obs2Y = random(50, 550);
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
    drawObstacle1();
    drawObstacle2();
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
  return playerX > 800 && playerY < 50;
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

//draws the red triangle
function drawObstacle1() {
  fill(230, 98, 98);
  stroke(111, 43, 214);
  strokeWeight(8)
  triangle(obs1X,obs1Y,obs1X+100,obs1Y-150,obs1X+200,obs1Y);
}

//draws the blue square
function drawObstacle2() {
  fill(102, 166, 255);
  stroke(111, 43, 214);
  strokeWeight(8)
  square(obs2X,obs2Y,150)
}

//moves the obstacles randomly to a new position in the screen every 2 seconds
function moveObstacles() {
  if (millis() - oldTime > 2000) {
    obs1X = random(50, 750);
    obs1Y = random(50, 550);
    obs2X = random(50, 750);
    obs2Y = random(50, 550);
    oldTime = millis();
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
