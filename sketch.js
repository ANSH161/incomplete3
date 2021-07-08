const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var canvas;

var playerock; 

var comprock;

var human;

var human2;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
  class comprock{
    constructor(x,y,widht,height) {
      var option = {
        isStatic: true
      };
      this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = widht;
    this.height = height;
    this.image = loadImage("./assets/base2.png")

    world.add(world, this.body);
    }
  }

   //Create Player rock and Comprock Obj

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);


  comprock.display();



   //Display Playerbase and computer base 


   //display Player and computerplayer






}
