var box;


function setup() {
  createCanvas(1500,800);
  box = createSprite(200,200,10,10);

}

function draw() 
{
  background(30);
  background("blue");

  if (keyDown("right")){
    box.x += 100;
    background("red");

  }
  if (keyDown("left")){
    box.x -= 100;
    background("yellow");
  }
  if (keyDown("up")){
    box.y -= 100;
    background("black");
  }
  if (keyDown("down")){
    box.y += 100;
    background("purple");
  }






  drawSprites(); 
}




