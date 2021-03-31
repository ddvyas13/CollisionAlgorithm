var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  //coordinates are taken in the CENTER
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor="blue";
  fixedRect.debug=true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor="yellow";
  movingRect.debug=true;

  a = createSprite(100,100,30,30);
  a.shapeColor="purple";

  b = createSprite(500,100,30,30);
  b.shapeColor="pink";
}

function draw() {
  background("black");
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  b.x = World.mouseX;
  b.y = World.mouseY;


  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
     {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else {
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="yellow";
  }
  
  
  if(b.x - a.x < a.width/2 + b.width/2 &&
    a.x - b.x < a.width/2 + b.width/2 &&
    b.y - a.y < a.height/2 + b.height/2 &&
    a.y - b.y < a.height/2 + b.height/2)
     {
    a.shapeColor="red";
    b.shapeColor="red";
  }
  else {
    a.shapeColor="purple";
    b.shapeColor="pink";
  }
  drawSprites();
}