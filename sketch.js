var gameState = "start";

function preload(){
  waiterImage = loadImage("assets/waiter.png");
  waiterWalkAnim = loadAnimation("assets/waiter-walk1.png", "assets/waiter-walk2.png");
  waiterServeImage = loadImage("assets/waiter-serve.png");
  steakImage = loadImage("assets/steak.png");
  startImage = loadImage("assets/start-menu.png");
  backgroundImage = loadImage("assets/background.jpg");
  pizzaImage = loadImage("assets/pizza.png");
}

function setup(){
  createCanvas(900,500);

  form = new Form();
  //gameLogo = createSprite(430,230);
  //gameLogo.addImage(startImage);
  //gameLogo.scale = 0.3;

  //  playButton = createButton('Play');
   // playButton.position(430,300);
  
}

function draw(){
  background(backgroundImage);
  form.show();
  drawSprites();
}