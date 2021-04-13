const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron1;
var rubber1;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1=new Iron(100,200,50,50)
    rubber1=new Rubber(600,300,50);
    stone1=new Stone(900,500,80,60);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    rubber1.display();
    stone1.display();

    
 
}