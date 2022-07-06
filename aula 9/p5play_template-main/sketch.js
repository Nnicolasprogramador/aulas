var box;


function setup() {
  createCanvas(1500,800);
  box = createSprite(200,200,10,10);

}

function draw() 
{
  background(30);

  if (keyDown("right")){
    box.x += 10;
  }
  if (keyDown("left")){
    box.x -= 10;
  }
  if (keyDown("up")){
    box.y -= 10;
  }
  if (keyDown("down")){
    box.y += 10;
  }






  drawSprites(); 
}




