
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tree , stone , ground;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango6;
var boy , boyImg;
function preload()
{
	
boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1200, 700);
    engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
  
	boy = createSprite(200 , 400 , 50 , 60);
  boy.addImage(boyImg);
  boy.scale=0.09;
  tree = new Tree(600 , 600 , 20 , 40);
  
    mango1 = new Mango(900,250,15); 
	mango2 = new Mango(800,200,15);
	mango3 = new Mango(800,280,15);
	mango4 = new Mango(1000,250,15);
	mango5 = new Mango(670,300,15);	
	stone = new Stone(220 , 400 , 50);
	ground = new Ground(1190 , 650 , 20 , 20);
	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();
  ground.display();
  drawSprites();
 
}



