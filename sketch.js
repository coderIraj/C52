var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, maincharacter, ghost1, ghost2, ghost3, ghost4


function preload(){
spookyhouseformygame=loadImage("spooky house for my game.jpg")
imageformygame=loadImage("image for my game.png")
ghostformygame=loadImage("ghost for my game.png")


}





function setup() {
  createCanvas(1530,740);

   wall1=createSprite(100, 560, 750,30)
  wall1.shapeColor="white"

  wall2=createSprite(800, 560, 400,30)
  wall2.shapeColor="white"
  
  wall3=createSprite(1350, 560, 1250, 30)
  wall3.shapeColor="white"

  wall4=createSprite(180, 340, 750,30)
  wall4.shapeColor="white"

  wall5=createSprite(880, 340, 400, 30)
  wall5.shapeColor="white"

  wall6=createSprite(1430, 340,1250,30)
  wall6.shapeColor="white"

  wall7=createSprite(260,120,750,30) 
  wall7.shapeColor="white"

  wall8=createSprite(960,120,400,30)
  wall8.shapeColor="white"

  wall9=createSprite(1510,120,1250,30)
  wall9.shapeColor="white"

  main=createSprite(960,60)
  main.addImage(imageformygame);
  main.scale=0.5
  

  ghost1=createSprite(5,5)
  ghost1.addImage(ghostformygame);
  ghost1.velocity.x=5
  ghost1.scale=0.5

  ghost2=createSprite(1530,270)
  ghost2.addImage(ghostformygame);
  ghost2.velocity.x=6
  ghost2.scale=0.5

  ghost3=createSprite(5,490)
  ghost3.addImage(ghostformygame);
  ghost3.velocity.x=7
  ghost3.scale=0.5

  ghost4=createSprite(1530,710);
  ghost4.addImage(ghostformygame);
  ghost4.velocity.x=8
  ghost4.scale=0.5



  wall1.debug=true
  wall2.debug=true
  wall3.debug=true
  wall4.debug=true
  wall5.debug=true
  wall6.debug=true
  wall7.debug=true
  wall8.debug=true
  wall9.debug=true

  edges=createEdgeSprites();

  
  
  
  
  
}

function draw() 
{
  background(spookyhouseformygame);

  drawSprites();



  if(keyDown(RIGHT_ARROW)){
    main.velocity.x=6
  }
  if(keyDown(LEFT_ARROW)){
  main.velocity.x=-6
  }
  if(keyDown(UP_ARROW)){
  main.velocity.y=-6
  }
   if(keyDown(DOWN_ARROW)){
    main.velocity.y=6
   }
  
   main.collide(wall1)
   main.collide(wall2)
   main.collide(wall3)
   main.collide(wall4)
   main.collide(wall5)
   main.collide(wall6)
   main.collide(wall7)
   main.collide(wall8)
   main.collide(wall9)
   main.collide(edges)
   ghost1.bounceOff(edges)
   ghost2.bounceOff(edges)
   ghost3.bounceOff(edges)
   ghost4.bounceOff(edges)
   

   if(main.isTouching(ghost1)||main.isTouching(ghost2)||main.isTouching(ghost3)||main.isTouching(ghost4))
   {
    ghost1.velocity.x=0
    ghost2.velocity.x=0
    ghost3.velocity.x=0
    ghost4.velocity.x=0
    main.velocity.x=0
    main.velocity.y=0
    textSize(35);
    fill("white")
    text("you lose try to do better next time!",500,400);
    
   }
}




