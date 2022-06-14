
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado, bola, retanglo
var engine, world

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var options={
		isStatic:true
	}

	quadrado=Bodies.rectangle(200,600,100,100,options)
	World.add(world,quadrado)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(quadrado.position.x,quadrado.position.y,100,100)

  drawSprites();
 
}



