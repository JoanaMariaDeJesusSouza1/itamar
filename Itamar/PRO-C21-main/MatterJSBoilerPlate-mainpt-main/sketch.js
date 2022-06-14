
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var quadrado, bola, retanglo
var engine, world
var ball

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Crie os Corpos Aqui.
	
	
	var options={
		isStatic: true
	}

	ground=Bodies.rectangle(400,690,800,20, options)
	World.add(world,ground)
	
	// vc colocou llargura e altura mais um circulo so tem raio colisor
  	ball=Bodies.circle(430,40,30,ball_options)
  	World.add(world,ball)
}


function draw() {
  rectMode(CENTER);
  background("green");

  rect(ground.position.x,ground.position.y,800,20)

  ellipse(ball.position.x,ball.position.y,30)

  Engine.run(engine);
  drawSprites();
 
}


