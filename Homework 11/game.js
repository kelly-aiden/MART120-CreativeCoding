//global variables
var playerX = 50
var playerY = 350

var obs1X;
var obs1Y;
var obs1speed;

var obs2X;
var obs2Y;
var obs2speed;

var mousex = -200
var mousey = -200
    
function setup() {
  createCanvas(900, 700);
  noFill();
  
  obs1X = floor(random(1, 900)) + 100;
  obs1Y = floor(random(1, 900));

  obs2X = floor(random(1, 900)) + 100;
  obs2Y = floor(random(1, 900));
}

function draw() {
  stroke(26, 27, 28);
  fill(26, 27, 28);
  rect(0,0,900,700);
  //win screen
  if (playerX > 800 && playerY < 50){
    strokeWeight(10);
    stroke(7, 240, 11);
    textSize(150);
    text("YOU WIN!", 50,350);
  } else{
    //create player
    stroke(255, 246, 176);
    strokeWeight(100);
    point(playerX,playerY)
    stroke(201, 123, 26);
    strokeWeight(80);
    point(playerX,playerY)
    stroke(89, 15, 26);
    strokeWeight(60);
    point(playerX,playerY)
  
    //create exit
    stroke(7, 240, 11);
    rect(790,0,110,40);
    strokeWeight(3);
    stroke(26, 27, 28);
    textSize(40);
    text("EXIT", 790, 50);
  
    stroke(111, 43, 214);
    strokeWeight(8);
    
    //create obstacle one
    fill(232, 7, 63);
    triangle(obs1X,obs1Y,obs1X+75,obs1Y-125,obs1X+150,obs1Y);
    if (obs1X > 900){
          obs1X -= 800;
        } else if(obs1Y > 700){
          obs1Y -= 600;
        } else if(obs1Y < 0){
          obs1Y += 600;
        } else if(obs1X < 0){
          obs1X += 800;
        } else{
          obs1X += floor(random(-20, 20));
          obs1Y += floor(random(-20, 20));
        }
        
    //create obstacle two
    fill(20, 208, 250);
    square(obs2X,obs2Y,150)
    if (obs2X > 900){
          obs2X -= 850;
        } else if(obs2Y > 700){
          obs2Y -= 650;
        } else if(obs2Y < 0){
          obs2Y += 650;
        } else if(obs2X < 0){
          obs2X += 850;
        } else{
          obs2X += floor(random(-20, 20));
          obs2Y += floor(random(-20, 20));
        }
    //mouse obstacle
    fill(252, 81, 241);
    ellipse(mousex,mousey,150,100);
    
    fill(26, 27, 28);
  }
}

function keyPressed(){
  stroke(26, 27, 28);
  strokeWeight(105);
  point(playerX,playerY)
  if (key == 'd'){
    playerX+=50;
  }
  if (key == 'a'){
    playerX-=50;
  }
  if (key == 'w'){
    playerY-=50;
  }
  if (key == 's'){
    playerY+=50;
  }
}

function mouseClicked() {    
  mousex = mouseX;
  mousey = mouseY;
}