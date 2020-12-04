
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var stone1;
var mango1,mango2,mango3,mango4,mango5;
var boy,boyImage;
var ground;
var tree;
var chain1;
function preload()
{
  boyImage=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200,400);
    engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
    ground=new Ground(600,350,1200,20);
   
  tree=new Tree(900,200,200,300);
  
  mango1=new Mango(870,190);
  mango2=new Mango(980,190);
  mango3=new Mango(950,150);
  mango4=new Mango(940,100);
  mango5=new Mango(870,100);

  stone1=new Stone(290,245);
 
  chain1=new Chain(stone1.body,{x:279,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  image(boyImage,250,130,200,300);
  ground.display();
  stone1.display(); 
 
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  chain1.display();
  drawSprites();
  textSize(20);
  text("Press space To Reset",100,50);
  detectCollision(stone1,mango1);
  detectCollision(stone1,mango2);
  detectCollision(stone1,mango3);
  detectCollision(stone1,mango4);
  detectCollision(stone1,mango5);
}
function mouseDragged(){
Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone1.body,{x:235,y:420});
    chain1.attach(stone1.body);
  }
}
function detectCollision(lstone,lmango){
	console.log(lstone.body.circleRadius)
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  console.log(distance)
  s = lstone.body.circleRadius+lmango.body.circleRadius;
  if(distance<=s)
  {
    Matter.Body.setStatic(lmango.body,false);
  }

}

