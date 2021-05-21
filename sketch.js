var Alien,Liberator
var score=0
var life=15
function preload(){
  l=loadAnimation("11.png","22.png","33.png","44.png","55.png","66.png")
  a=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png")
  p=loadAnimation("111.png","222.png","333.png","444.png")
  bg=loadImage("bg.jpg")
  wa=loadImage("wall702.png")
  c=loadAnimation("000.png","1111.png","2222.png","3333.png","4444.png","555.png")
}
function setup(){

createCanvas(800,600)

Liberator = createSprite(30,550,10,30);
Liberator.addAnimation("player",l)
Liberator.scale=0.5

ground = createSprite(400,570,800,10)

gr1 = createSprite(270,500,80,10)
gr1.addImage(wa)
gr1.scale=0.7
gr1.debug=true
gr1.setCollider("rectangle",10,10,30,10)
gr2= createSprite(480,370,80,10)
gr2.addImage(wa)
gr2.scale=0.7
gr2.debug=true
gr2.setCollider("rectangle",10,10,30,10)


Agroup= new Group()
Pgroup= new Group()

coin1group = new Group()
coin2group = new Group()

invi = new Group()
}




function draw() {
  background(bg)
  drawSprites()
  Liberator.collide(ground)
  Liberator.collide(gr1)
  Liberator.collide(gr2)
  Liberator.velocityX=0
  Liberator.velocityY=0
  if(keyDown("right")){
  Liberator.velocityX=5
    
  }
   if(keyDown("left")){
  Liberator.velocityX=-5
    
  }
  if(keyDown("up")){
    Liberator.velocityY=-5.6

       }
  Liberator.velocityY=Liberator.velocityY+3
   //gravity

  AlienandPlant()
  coin1()
  coin2()

  if(Liberator.isTouching(invi)){
    console.log("hi")
    Agroup[0].destroy()
    invi[0].destroy()
    Plant = createSprite(Alien.x,Alien.y-22,50,50)
    Plant.addAnimation("plant",p)
    Plant.scale=0.2
    Plant.velocityX=-3
    
    score=score+2

  }
  if(Agroup.isTouching(Liberator)){
   life=life-1
  }
  if(coin1group.isTouching(Liberator)){
    score=score+1
    coin1group.destroyEach()
  }
  if(coin2group.isTouching(Liberator)){
   score=score+1
    coin2group.destroyEach()
  }
  textSize(20)
  fill("WHITE")
  text("Score "+score ,700,40)
  textFont("MAIANDRA GD")
  text("Liberator Health "+Math.round(life),40,40)
  
  if(life<=0){
    background("black")
    textSize(25)
    fill("yellow")
    textFont("algerian")
    text("GAME OVER REFERSH THE SCREEN TO PLAY AGAIN",135,300)
  }



  }


function AlienandPlant(){
if(frameCount%250===0){

Alien =createSprite(800,532,50,50)
Alien.addAnimation("enemy",a)
Alien.scale=0.9
Alien.debug=true
Alien.setCollider("rectangle",-40,10,30,10)
invisbile=createSprite(Alien.x-15,Alien.y-35,10,50)
invisbile.shapeColor=("yellow")
invisbile.velocityX=-3
Alien.velocityX=-3
Agroup.add(Alien)
invi.add(invisbile)


}



}
function coin1(){
if(frameCount%150===0){
  c1 = createSprite(270,480,10,10)
  c1.addAnimation("img",c)
 c1.scale=0.1
  coin1group.add(c1)
}

}
function coin2(){
  if(frameCount%200===0){
    c2 = createSprite(480,350,10,10)
    c2.addAnimation("img",c)
  c2.scale=0.1
    coin2group.add(c2)
  }
  
  }



