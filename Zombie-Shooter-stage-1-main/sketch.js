var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
   ZOMBIEimg=loadImage("assets/zombie.png")
  bgImg = loadImage("assets/bg.jpeg")
   
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
//creating shooter
player=createSprite(displayWidth-1150,displayHeight-300,50,50)
player.addImage(shooterImg)
player.scale=0.3

}

function draw() {
  background(0); 
   
  if(keyDown("UP_ARROW")){
    player.y=player.y-30; 
  }
if(keyDown("Down_ARROW")){
  player.y=player.y+30;
}
if(keyWentDown("space")){
  bullet = createSprite(displayWidth-1150,player.y-30,20,10)
  bullet.velocityX = 20
}

if(keyWentUp("a")){
  player.addImage(shooterImg)
}


enemy();

drawSprites();

}
function SPAWNZOMIBES(){
  if(frameCount%50==0){
      ZOMBIE=createSprite(random(500,1100),random(100,500),50,50)
      ZOMBIE.addImage(ZOMBIEimg)
      ZOMBIE.scale=0.15 

      ZOMBIE.velocityX=-3
      ZOMBIE.lifetime=displayWidth/3
  }
}
function enemy(){
  if(frameCount %60==0){
    zombie=createSprite(random(500,1100),random(100,500),40,40)
    zombie.addImage(ZOMBIEimg)
    zombie.scale=0.15
    zombie.velocityX=-3
  }
}


