
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
// falta criar a variavel para engine e world

// criar uma variavel ground para o chão
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var plane_options={
	isStartic:true
}

// criar o corpo do choa e colocar o plane_options no final para que ele seja um corpo estatico


block1=Bodies.circle(220,10,10,block1_options);
World.add(world,block1);

block2=Bodies.rectangle(110,50,10,10,block2_options);
World.add(world,block2);

block3=Bodies.rectangle(350,50,10,10,block3_options);
World.add(world,block3);


var block1_options = {
	restitution:0.5,
	friction:0.02,
	frictionAir:0,
}

var block2_options = {
	restitution:0.7,
	friction:0.01,
	frictionAir:0.01,
}

var block3_options = {
	restitution:0.01,
	friction:1,
	frictionAir:0.03,
}

rectMode(CENTER);
ellipseMode(CENTER)
  
}


function draw() {
 
  background(0);

  Engine.run(engine);
// tava todos com _ ao inves de ponto

  ellipse(block1.position.x,block1.position.y,20); 
  rect(block2.position.x,block2.position.y,90,30);
  rect(block3.position.x,block3.position.y,70,15);
  ///fazer o corpo do chão aparecer


  drawSprites();
 
}



