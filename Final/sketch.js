//Global Variables
var frames = 0;

var triX = 285;
var triY = 570;
var triColor = new Array(75).fill().map(() => [26, 27, 28]);
var newColor;
var colorTracker = 0;

var squareX = 0;
var squareY = 0;
var Xmod = 0;
var Ymod = 0;

var circleX = 400;
var circleY = 200;
var diameter;
var circColors = [[23, 255, 46], [156, 2, 45], [189, 252, 210], [3, 28, 252]];
var ripColor = 0;
var ripple1 = 1;
var ripple2 = 1;
var ripple3 = 1;
var ripple4 = 1;
var ripple5 = 1;
var ripple6 = 1;
var ripple7 = 1;
var ripple8 = 1;
var ripple9 = 1;
var ripple10 = 1;

function setup() {
  createCanvas(600,600);
  triColor[0] = [255, 129, 56];
}

function draw() {
  
  //begin drawing the triangles
  if (frames < 201){
    frameRate(40);
    var remainder = frames % 3;
    if (remainder == 0) {
      var newColor;
      if (colorTracker == 0){
        newColor = [255, 41, 201];
        colorTracker = 1;
      } else if (colorTracker == 1){
        newColor = [227, 210, 134];
        colorTracker = 2;
      } else {
        newColor = [255, 129, 56];
        colorTracker = 0;
      }
      triColor.unshift(newColor);
      triColor.pop();
    }
      for(var k = 74; k > -1; k--){
        fill(triColor[k]);
        stroke(triColor[k]);
        triangle(triX - (k*15) - (colorTracker*5), 600, triX, triY - (k*30) - (colorTracker*10), triX + (k*15) + (colorTracker*5), 600);
      }
  }
  
  //erase the triangles
  if (frames > 200 && frames < 331){
    var remainder = frames % 3;
    if (remainder == 0) {
      triColor.unshift([26, 27, 28]);
      triColor.pop();
    }
      for(var k = 74; k > -1; k--){
        fill(triColor[k]);
        stroke(triColor[k]);
        triangle(triX - (k*15) - (colorTracker*5), 600, triX, triY - (k*30) - (colorTracker*10), triX + (k*15) + (colorTracker*5), 600);
      }
  }
  
  //horizontal box stripes
  if (frames > 330 && frames < 357){
    frameRate(15);
    strokeWeight(6);
    for (var j = 0; j< 3; j++){
      squareX = 0
      stroke(5, 218, 255);
      fill(120, 3, 255);
      square (squareX + Xmod, squareY + (200 * j),100);
       
      squareX = 500;
      stroke(120, 3, 255);
      fill(5, 218, 255);
      square (squareX - Xmod, squareY + 100 + (200 * j),100);
    }
    Xmod += 20
  }
  
  //vertical box stripes
  if (frames > 358 && frames < 385){
    frameRate(15);
    strokeWeight(6);
    for (var j = 0; j< 3; j++){
      squareX = 0
      stroke(5, 218, 255);
      fill(120, 3, 255);
      square (squareY + (200 * j), squareX + Ymod, 100);
       
      squareX = 500;
      stroke(120, 3, 255);
      fill(5, 218, 255);
      square (squareY + 100 + (200 * j), squareX - Ymod, 100);
    }
    Ymod += 20
  }
  
  //reset Xmod and Ymod
  if (frames == 385){
    Xmod = 0;
    Ymod = 0;
  }

  //horizontal box stripes
  if (frames > 386 && frames < 413){
    frameRate(15);
    strokeWeight(6);
    for (var j = 0; j< 3; j++){
      squareX = 0
      stroke(5, 218, 255);
      fill(120, 3, 255);
      square (squareX + Xmod, squareY + (200 * j),100);
       
      squareX = 500;
      stroke(120, 3, 255);
      fill(5, 218, 255);
      square (squareX - Xmod, squareY + 100 + (200 * j),100);
    }
    Xmod += 20
  }
  
  //vertical box stripes
  if (frames > 414 && frames < 441){
    frameRate(15);
    strokeWeight(6);
    for (var j = 0; j< 3; j++){
      squareX = 0
      stroke(5, 218, 255);
      fill(120, 3, 255);
      square (squareY + (200 * j), squareX + Ymod, 100);
       
      squareX = 500;
      stroke(120, 3, 255);
      fill(5, 218, 255);
      square (squareY + 100 + (200 * j), squareX - Ymod, 100);
    }
    Ymod += 20
  }  
  
  //erasing box stripes
  if (frames == 442){
    Xmod = 0;
  }
  if (frames > 442 && frames < 469){
    frameRate(15);
    strokeWeight(6);
    stroke(26, 27, 28);
    fill(26, 27, 28);
    for (var j = 0; j< 3; j++){
      squareX = 0
      square (squareX + Xmod, squareY + (200 * j),100);
       
      squareX = 500;
      square (squareX - Xmod, squareY + 100 + (200 * j),100);
    }
    Xmod += 20
  }
  
  //first ripple
  if (frames > 470 && frames < 510){
    frameRate(5);
    strokeWeight(0);
    ripple (300,300,15,ripple1);
    if (ripple1 < 26){
      ripple1 += 1;
    }
  }
  //second ripple
  if (frames > 490 && frames < 524){
    ripple (65,425,50,ripple2);
    if (ripple2 < 26){
      ripple2 += 1;
    }
  }
  //third ripple
  if (frames > 500 && frames < 524){
    ripple (350,90,100,ripple3);
    if (ripple3 < 26){
      ripple3 += 1;
    }
  }
  //fourth ripple
  if (frames > 505 && frames < 529){
    ripple (525,400,70,ripple4);
    if (ripple4 < 26){
      ripple4 += 1;
    }
  }
  //fifth ripple
  if (frames > 510 && frames < 540){
    ripple (125,175,60,ripple5)
    if (ripple5 < 26){
      ripple5 += 1;
    }
  }
  //sixth ripple
  if (frames > 515 && frames < 545){
    ripple (75,500,110,ripple6)
    if (ripple6 < 26){
      ripple6 += 1;
    }
  }
  //seventh ripple
  if (frames > 520 && frames < 550){
    ripple (375,570,20,ripple7)
    if (ripple7 < 26){
      ripple7 += 1;
    }
  }
  //eighth ripple
  if (frames > 525 && frames < 555){
    ripple (250,150,60,ripple8)
    if (ripple8 < 26){
      ripple8 += 1;
    }
  }
  //ninth ripple
  if (frames > 530 && frames < 560){
    ripple (480,275,90,ripple9)
    if (ripple9 < 26){
      ripple9 += 1;
    }
  }
  //erase ripple
  if (frames > 540 && frames < 570){
    for (var e = ripple10; e > 0; e--){
      fill(26, 27, 28);
      circle (300, 300, 20 * (1.2 ** e))
    }
    ripple10 += 1
  }
  
  
  frames += 1;
  
  //reset the animation
  if (frames == 570){
    frames = 0;

    Xmod = 0;
    Ymod = 0;
    
    ripple1 = 1;
    ripple2 = 1;
    ripple3 = 1;
    ripple4 = 1;
    ripple5 = 1;
    ripple6 = 1;
    ripple7 = 1;
    ripple8 = 1;
    ripple9 = 1;
    ripple10 = 1;
  }
}


function ripple (x,y,diameter,ripCount){
  if (ripColor > 3){
    ripColor = 0;
  }
  for (var i = ripCount; i > 0; i--){
    if (ripColor == 4){
      ripColor = 0;
    }
    fill(circColors[ripColor]);
    circle (x, y, diameter * (1.2 ** i))
    ripColor += 1;
  }
}



