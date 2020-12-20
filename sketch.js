
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1, ball2, ball3,ball4,ball5;

var floor;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	ball1 = new Ball(400,350,40);
	ball2 = new Ball(480,350,40);
	ball3 = new Ball(560,350,40);
	ball4 = new Ball(320,350,40);
	ball5 = new Ball(200,310,40);

	string = new String(ball1.body,{x:400,y:115});
	string2 = new String(ball2.body,{x:480,y:115});
	string3 = new String(ball3.body,{x:560,y:115});
	string4 = new String(ball4.body,{x:320,y:115});
	string5 = new String(ball5.body,{x:240,y:115});

	floor = new Floor(400,100,400,30);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ball1.display();
ball2.display();
ball3.display();
ball4.display();
ball5.display();


floor.display();
string.display();
string2.display()
string3.display();
string4.display();
string5.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball5.body,ball5.body.position,{x: -50,y: -50});
}
if (keyCode === DOWN_ARROW){
	Matter.Body.applyForce(ball3.body,ball3.body.position,{x: 50,y: 50});
}
}

