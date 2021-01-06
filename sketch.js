//Create variables here
var dog,happydog,foodS,foodStock,database;
function preload()
{    
  dog1 = loadImage("images/dogImg.png");
  dog2 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(200,200,20,20)
  dog = addImage(dog1);

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}

function draw() {  
  background(0);

  if(KeyWentDown(UP_ARROW)){
    WriteStock(foodS)
    dog.addImage(dog2)
  }

  strokeWeight(2)
  stroke("white")
  textSize(25);
  fill("red");
  text(" PRESS UP ARROW KEY TO FEED THE DOG ")
  drawSprites();
  //add styles here

}



