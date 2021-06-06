const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
  var ground_options= {
    isStatic: true
  }
  ground = Bodies.rectangle(200,770,200,20, ground_options);
  World.add(world,ground);
  var ball_options = {
    restitution:  1.5
  }
  ball = Bodies.circle(200,100,50, ball_options);
  World.add(world,ball);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x, ground.position.y, 800,20);
  ellipseMode(RADIUS);
  fill("white");
  ellipse(ball.position.x, ball.position.y, 20,20);
}