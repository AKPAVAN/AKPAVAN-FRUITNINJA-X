var PLAY=1;
var END=0;
var gamestate=1;
var sword;
var alien1;
var alien2;
var fruit1;
var fruit2;
var fruit3;
var fruit;
var monster;
var fruit4;
var gameover;
var score;

function preload(){
  swordImage = loadImage("sword.png")
  monsterImage = loadAnimation("alien1.png","alien2.png")
  fruit1 = loadImage("fruit1.png")
  fruit2 = loadImage("fruit2.png")
  fruit3 = loadImage("fruit3.png")
  fruit4 = loadImage("fruit4.png")
  gameoverImage = loadImage("gameover.png")
}

function setup(){
createCanvas(500,500);
 sword=createSprite(40,200,20,20)
  sword.addImage(swordImage);
  sword.scale=0.7;
  
  fruitGroup = new Group();
  alienGroup = new Group();
  
  score=0;
  
}

function draw(){
  background("cyan")
  sword.x=World.mouseX
  sword.y=World.mouseY
  fruits()
  enemy()
  drawSprites();
  text("score: "+score, 400,50)
if(fruitGroup.isTouching(sword)){
  fruitGroup.destroyEach();
  score=score+1;
  
   }
if(alienGroup.isTouching(sword)){
  sword.x=200;
  sword.y=200;
  }

}

function fruits(){
  if(frameCount%80===0){
  fruit=createSprite(400,200,20,20)
  fruit.scale=0.2;
  //fruit.debug=true;
  fruit.y=Math.round(random(50,340));
  fruit.velocityX=-7;
  r=Math.round(random(1,4));
  if(r == 1){
  fruit.addImage(fruit1)
     }
  else if(r == 2){
  fruit.addImage(fruit2)        
          }
  else if(r == 3){
  fruit.addImage(fruit3)
  }
  else if(r == 4){
  fruit.addImage(fruit4)
  }
  fruit.setLifetime=100;
  fruitGroup.add(fruit);
  }
}
function enemy(){
  if(frameCount%200===0)
{
  monster=createSprite(400,200,20,20)
  monster.addAnimation("moving",monsterImage)
  monster.y=Math.round(random(100,300));
  monster.velocityX=-8;
  monster.setLifetime=50;
  alienGroup.add(monster);
}
}