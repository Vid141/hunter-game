
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;

var world,boy;
var launchingForce=100;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	stoneObj=new Stone(235,420,30); 

	fruit1=new Fruit(1100,100,30);
  fruit2=new Fruit(1170,130,30);
	fruit3=new Fruit(1010,140,30);
	fruit4=new Fruit(1000,70,30);
	fruit5=new Fruit(1100,70,30);
	fruit6=new Fruit(1000,230,30);
	fruit7=new Fruit(900,230,40);
	fruit8=new Fruit(1140,150,40);
	fruit9=new Fruit(1100,230,40);
	fruit10=new Fruit(1200,200,40);
	fruit11=new Fruit(1120,50,40);
	fruit12=new Fruit(900,160,40);

	treeObj=new Tree(1050,580);
	//Create the Bodies Here.
	ground=new Ground(width/2,600,width,20);
	launcherObject=new Launcher(stoneObj.body,{x:235,y:420})
	boy=createSprite(200,340,200,300)
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1300,
		  height: 600,
		  wireframes: false
		}
	  });
		
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  treeObj.display();
  stoneObj.display();
 fruit1.display();
 fruit2.display();
 fruit3.display();
 fruit4.display();
 fruit6.display();
fruit7.display();
 fruit8.display();
 fruit9.display();
 fruit10.display();
 fruit11.display();
 fruit12.display();
  stoneObj.display();

  ground.display();
  launcherObject.display();
  detectollision(stoneObj,fruit1);
  detectollision(stoneObj,fruit2);
  detectollision(stoneObj,fruit3);
  detectollision(stoneObj,fruit4);
  detectollision(stoneObj,fruit5);
  detectollision(stoneObj,fruit6);
  detectollision(stoneObj,fruit7);
  detectollision(stoneObj,fruit8);
  detectollision(stoneObj,fruit9);
  detectollision(stoneObj,fruit10);
  detectollision(stoneObj,fruit11);
  detectollision(stoneObj,fruit12);
  function mouseDragged()
  {
	  Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
  }
  
  function mouseReleased()
  {
	  launcherObject.fly();
	  // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
  }
  
  function keyPressed() {
	  if (keyCode === 32) {
	  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
		launcherObject.attach(stoneObj.body);
	  }
	}
  
	function detectollision(lstone,lfruit){
	  /*var collision = Matter.SAT.collides(lstone,lmango);
	  if(collision.collided){
		  console.log("collided");
		  Matter.Body.setStatic(lmango,false);	
	  }*/
	fruitBodyPosition=lfruit.body.position
	stoneBodyPosition=lstone.body.position
	
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, fruitBodyPosition.x, fruitBodyPosition.y)
	//console.log(distance)
   // console.log(lmango.r+lstone.r)
		if(distance<=lfruit.r+lstone.r)
	  {
		//console.log(distance);
		  Matter.Body.setStatic(lfruit.body,false);
	  }
  
	}
  drawSprites();
 
}



