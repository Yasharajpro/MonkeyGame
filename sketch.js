
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var ground,inground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400)
  ground=createSprite(200,390,400,10);
  FoodGroup = new Group();
  obstacleGroup = new Group();
  monkey=createSprite(50,355,20,40);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  inground=createSprite(200,390,400,10);
  inground.visible=false;
}


function draw() {
  background("white");
 
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
  
  monkey.velocityY=monkey.velocityY+0.8;
  if(keyDown("space")&& monkey.y>=220){
    monkey.velocityY=-12;
    
  }

  monkey.collide(inground);
  var survive=0;
  stroke("black");
  textSize(15);
  fill("black");
   survive=Math.round(frameCount/30);
  text("Survival Time:" + survive,150,50);
  bananas();
  stone();

  drawSprites();
}

function bananas(){
  if(frameCount%80===0){
  var banana=createSprite(400,300,20,5);
    banana.addImage(bananaImage);
    banana.scale=0.08;
    banana.velocityX=-4;
    banana.y=Math.round(random(225,300));
    banana.lifetime=110;
    FoodGroup.add(banana);
  }
  
  
}
function stone(){
  if(frameCount%300===0){
   var obstacle=createSprite(400,355,50,50);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.15;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);
    obstacle.lifetime=90;
  
  }
  
  
  
}
