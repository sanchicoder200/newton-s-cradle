const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =  Matter.Constraint
var engine, world;



function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(400,height,800,20);
    rod= new Ground(400, 300, 300, 20);
    ball1= new Ball(400, 500, 30);
    chain1 = new Chain(ball1.body, {x:400, y:300})
    ball2= new Ball(370, 500, 30);
    chain2 = new Chain(ball2.body, {x:370, y:300})
    ball3= new Ball(340, 500, 30);
    chain3 = new Chain(ball3.body, {x:340, y:300})
    ball4= new Ball(430, 500, 30);
    chain4 = new Chain(ball4.body, {x:430, y:300})
    ball5= new Ball(460, 500, 30);
    chain5 = new Chain(ball5.body, {x:460, y:300})


}

function draw(){
   
    background(0);
    Engine.update(engine);
     fill("white");
    textSize(25);
    text("press up arrow key to move the ball", 50, 50);
    
    
    ground.display();
    rod.display();
    chain1.display();
    ball1.display();
    ball2.display();
   chain2.display();
   ball3.display();
   chain3.display();
   ball4.display();
   chain4.display();
   ball5.display();
   chain5.display();
}

function keyPressed(){
if(keyCode==UP_ARROW){
    Matter.Body.applyForce(ball3.body,ball3.body.position , {x:-40, y:-150})
}
}
