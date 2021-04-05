
var bin1, bin2, bin3, paperObject,ground1
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1600, 700);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bin1 = new Bin(300, 660, 10, 50);
	//bin2 = new Bin(400, 660, 10, 50);
	bin = new Bin(1200,650)

	paperObject = new Paper(200,450,70)

	ground1 = new Ground(width/2,670,width,20);
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);



	drawSprites();

	paperObject.display();

	ground1.display();

	
	bin.display();

	

	
}

function keyPressed (){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:1000 , y:-1450});
	}
}



