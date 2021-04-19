
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg
var score = 0

var gameState = "onSling";

function preload() {
    getTime()
 }

function setup(){
    var canvas = createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;


    block8 = new block (330,685,30,40);
    block9 = new block (360,685,30,40);
    block10 = new block (390,685,30,40);
    block11 = new block (420,685,30,40);
    block12 = new block (450,685,30,40);
    block13 = new block (360,670,30,40);
    block14 = new block(390,670,30,40);
    block15 = new block (420,670,30,40);
    block16 = new block (390,655,30,40);

    block1 = new block (630,485,30,40);
    block2 = new block (660,485,30,40);
    block3 = new block (690,485,30,40);
    block4 = new block (720,485,30,40);
    block5 = new block (750,485,30,40);
    block6 = new block (660,470,30,40);
    block7 = new block(690,470,30,40);
    block17 = new block (720,470,30,40);
    block18 = new block (690,455,30,40);

    stopper = new ground (200,700,200,100);


    ground1 = new ground (400,700,200,20);
    ground2 = new ground (700,500,200,20);


    launcher1 = new launcher (200,50);

    slingshot1 = new SlingShot(launcher1.body,{x:200, y:600});
}

function draw(){
    if (backgroundImg){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4)
    fill ("white")
    textSize (14)
    text("score: " + score, 700,100)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block17.display();
    block18.display();
    launcher1.display();
    slingshot1.display(); 
   ground1.display();  
   ground2.display();
   stopper.display(); 
    }
}

function mouseDragged(){
    Matter.Body.setPosition(launcher1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(this.person);
    }
}

async function getTime (){
    var response = await fetch ("http://worldclockapi.com/api/json/pst/now") 
    var responseJson = await response.json ()
    var dateTime = responseJson.currentDateTime
    var hour = dateTime.slice (11,13)
    if (hour >= 06 && hour <= 19){
        bg = "bg.png"
    }
    else {
        bg = "bg.png"
    }
    backgroundImg = loadImage (bg)
}