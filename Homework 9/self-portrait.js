function setup() {
  createCanvas(800, 800)
  noFill();
}

function draw() {
  stroke('cyan');
  strokeWeight(40);
  background(6, 8, 10);
  arc(400, 350, 550, 600, PI, 0);
  line(125,350,250,350);
  line(250,350,250,500);
  line(550,350,675,350);
  line(550,350,550,500);
  line(250,500,550,500);
  strokeWeight(25);
  line(350,500,350,425);
  line(450,500,450,425);
  strokeWeight(15);
  ellipse(325,200,125,200);
  ellipse(475,200,125,200);
  strokeWeight(7);
  triangle(375,370,400,300,425,370);
  strokeWeight(40);
  rect(250,500,300,125);
  strokeWeight(25);
  line(350,500,350,575);
  line(450,500,450,575);
  stroke('#5802F1');
  strokeWeight(70);
  point(325,200);
  point(475,200);
  strokeWeight(4);
  textSize(60);
  text("Aiden Kelly",50,700);
}