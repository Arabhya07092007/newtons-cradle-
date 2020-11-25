const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var b1, b2, b3, b4, b5;
var r1, r2, r3, r4, r5;
 
var mConstraint; 
var bg ;

function preload(){

  bg = loadImage("rooke.jpg");

}


function setup(){

  var canvas = createCanvas(windowWidth/2.3,windowHeight/1.3);
  engine = Engine.create();
  world = engine.world;



  b1 = new Ball(150,190,60,60);
  r1 = new Rope(b1.body,{x:150,y:100});

  b2 = new Ball(210,190,60,60);
  r2 = new Rope(b2.body,{x:210,y:100});

  b3 = new Ball(270,190,60,60);
  r3 = new Rope(b3.body,{x:270,y:100});

  b4 = new Ball(330,190,60,60);
  r4 = new Rope(b4.body,{x:330,y:100});

  b5 = new Ball(390,190,60,60);
  r5 = new Rope(b5.body,{x:390,y:100});

  console.log(b1.body);

  var  canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixeRatio = pixelDensity();
  
  console.log(canvasmouse);

  var  options = {
    mouse: canvasmouse
  }
  mConstraint = MouseConstraint.create(engine,options);
  World.add(world,mConstraint);



 

}

function draw(){
  background("black");
  Engine.update(engine);



 imageMode(CENTER);
  image(bg,bg.width/5,bg.height/2);

  b1.display();
  r1.display();
  b2.display();
  r2.display();
  b3.display();
  r3.display();
  b4.display();
  r4.display();
  b5.display();
  r5.display();

  textSize(30);
  fill(153, 0, 255);
  text("Newton's cradle",210,50);

  




}


/*function mouseDragged(){
Matter.Body.setPosition(b1.body, {x: mouseX, y:mouseY});
//Matter.Body.setPosition(b2.body, {x: mouseX, y:mouseY});

}*/