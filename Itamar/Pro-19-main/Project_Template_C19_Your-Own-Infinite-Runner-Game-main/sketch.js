var chao,boy,leftBoundary,rightBoundary;
var chaoImg,boyImg;
var i;


function preload(){
chaoImg = loadImage("chao.jpg");
boyImg = loadImage("boy.jpeg");
}

function setup(){
 createCanvas(400,400);

chao=createSprite(200,200);
chao.addImage(chaoImg);
chao.velocityY=4;
chao.scale=1.2;

boy=createSprite(180,340,30,30);
boy.addImage(boyImg);
boy.scale=0.1;
 
leftBoundary=createSprite(10,0,100,800);
leftBoundary.visible = false;


rightBoundary=createSprite(400,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
chao.velocityY = 4;

edges= createEdgeSprites();
boy.x=World.mouseX
boy.collide(edges[3]);



 if(chao.y>400){
     chao.y=height/2
 }



 drawSprites();

 }
