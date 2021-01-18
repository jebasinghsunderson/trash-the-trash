
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3,box4;

function setup() {
	createCanvas(800, 700);
   

	engine = Engine.create();
	world = engine.world;

 	//Create the Bodies Here.
   box1=new Box (720,545,200,100);
// invisiblegnd=createSprite(56,634,100,10)
 
// box2 =new Box(470,585,10,100);
// box3 =new Box(680,585,10,100);
//	box4 =createSprite(100,600,100,10);
    paper = new Paper();
    ground=new Ground(400,650,900,20)
    Engine.run(engine);
  
}


function draw() {

   Engine.update(engine);
  background("yellow");
  ground.display();
  paper.display()
   box1.display();
 
  //box2.display();
  //box3.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:345,y:-355})
  }
 /* if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:85})
  }*/
}

