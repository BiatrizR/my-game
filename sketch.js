const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var chao
var ball
var engine, world;


function setup() {
  var canvas = createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;
 
  var chao_options = {
    isStatic: true
  }

  var ball_options = {

    restitution: 0.75
  }

  ball = Bodies.circle(100, 100, 40, ball_options)
  World.add(world, ball)


  chao = Bodies.rectangle(200,580,400,20, chao_options);
  World.add(world, chao);
}

function draw() {
  background(0);
  Engine.update(engine);
  rect(chao.position.x, chao.position.y, 400, 20);
  ellipse(ball.position.x,ball.position.y,20);
}
