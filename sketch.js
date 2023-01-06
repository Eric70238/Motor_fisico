const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body

var engine,world;
var ball;
var ground;
var angle=60;

var vent1,vent2,vent3,vent4;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  };

  var ground_options ={
    isStatic: true
  };

  ground = Bodies.rectangle(100,400,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball1 = Bodies.circle(300,150,30,ball_options);
  World.add(world,ball1);

  btn1=createImg("up.png");
  btn1.position(20,30);
  btn1.size(50,50);
  btn1.mouseClicked(vForce);

  btn2=createImg("up.png");
  btn2.position(320,30);
  btn2.size(50,50);
  btn2.mouseClicked(hForce);

  con = Matter.Constraint.create({
    pointA:{x:200,y:20},
    //bodyA
    bodyB:ball1,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con);

  //vent1 = new ground(50,370,50,30);
  //vent2 = new ground(150,370,50,30);
  //vent3 = new ground(250,370,50,30);
  //vent4 = new ground(350,370,50,30);

  ground1=Bodies.rectangle(100,300,80,20,ground_options);
  World.add(world,ground1);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(50);
  Engine.update(engine);
  
  //ellipse(ball.position.x,ball.position.y,20);
  ellipse(ball1.position.x,ball1.position.y,30);
  rect(ground.position.x,ground.position.y,500,20);
  strokeWeight(2);
  stroke(255);
  line (con.pointA.x,con.pointA.y,ball1.position.x,ball1.position.y);

  //vent1.show();
  //vent2.show();
  //vent3.show();
  //vent4.show();
  
}

function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function hForce(){
  Matter.Body.applyForce(ball1,{x:0,y:0},{x:-0.05,y:0})
}