
var trex ,trex_running;
var edges,ground,ground_image
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
  ground_image=loadImage("ground2.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex=createSprite(50,160,10,50) 
  trex.addAnimation("running",trex_running) 
  trex.scale=0.5

  edges=createEdgeSprites()

  ground=createSprite(300,180,600,20)
  ground.addImage(ground_image)
}

function draw(){
  background("black")

  ground.velocityX=-5
  if(ground.x<0){
    ground.x=ground.width/2
  }

  if(keyDown("space")){
   trex.velocityY=-10
   
  }
  trex.velocityY=trex.velocityY+0.5

  trex.collide(ground)
  drawSprites()

}
