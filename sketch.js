const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var par1
var par2
var par3
var par4

var bolinha
//var caixa

var botao

function setup() {
  createCanvas(1500,700);
  engine = Engine.create();
  
  world = engine.world;

  par1 = new Paredes(750,690,1500,20,+30)
  par2 = new Paredes(750,10,1500,20)
  par3 = new Paredes(1480,350,50,670)
  par4 = new Paredes(20,350,50,670)

  botao = createImg("push.png")
  botao.position(1360,600)
  botao.size(100,100)

  botao.mouseClicked(vush)

  var bolinha_options = {
    restitution: 1,
    frictionAir: 0.001,
    density: 0.055
  }

  bolinha = Bodies.circle(300,200,100,bolinha_options)
  World.add(world,bolinha)
  
  //caixa = Bodies.rect(750,300,30,80,caixa_options)
  //World.add(world,caixa)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() {

  background(51);

  par1.show()
  par2.show()
  par3.show()
  par4.show()

  ellipse(bolinha.position.x,bolinha.position.y,100)
  //rect(caixa.position.x,bolinha.position.y,30,80)


  Engine.update(engine);
}

function vush(){

  Matter.Body.applyForce(bolinha,{x:0,y:0},{x:150,y:-10})

}