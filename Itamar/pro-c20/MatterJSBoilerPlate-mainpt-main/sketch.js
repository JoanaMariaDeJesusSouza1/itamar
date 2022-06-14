
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado, bola, retanglo
var engine, world, ground

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var options={
		isStatic: true
	}


	ground=Bodies.rectangle(400,690,800,20,options)
	World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background();
  
  
  fill("blue")
  rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
 
}



