const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,iron,rubber,stone;


function setup(){
    var canvas = createCanvas(1400,700);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(1300,650,3300,20)
   hammer = new Hammer(100,10);
    iron= new Iron(200,550)
     rubber = new Rubber(350,550,50,50)
     stone= new Stone(600,550)

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


   plane.display();
   hammer.display();
    stone.display();
    rubber.display();
    iron.display();
    
 
}