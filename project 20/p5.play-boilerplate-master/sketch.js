var bg;
var brush;
var eat;
var drink;
var sleep;
var astronaut
function preload(){

bg=loadImage("images/iss.png");
brush = loadImage("images/brush.png");
eat = loadImage("images/eat1.png","images/eat2.png");
drink = loadImage("images/drink1.png","images/drink2.png");
move = loadImage("images/move.png","images/,move1.png");
sleep = loadImage("images/sleep.png");
}



function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
   astronaut = createSprite(300,230) ;
   astronaut.addAnimation("sleeping",sleep);
   astronaut.scale=0.1;

}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("UP_ARROW")){

   astronaut.addAnimation("brushing",brush);
   astronaut.changeAnimation("brushing");
   astronaut.y=350;
   astronaut.velocityX=0;
   astronaut.velocityY=0;


  }

}
