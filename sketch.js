var dog , happyDog , database , foodS , foodStock;

function preload()
{
  dog = loadImage("images/dogImg1.png");
  happyDog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500, 500);
  
  database = firebase.database();
  dog = createSprite(250 , 250 , 40 , 40);
  dog.addImage(dog);

  foodStock = database.ref('Food')
  foodStock.on("value" , readStock);

}


function draw() { 
  
  if(KeyWentDown(UP_ARROW))
  {
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  text("food remaining" , 250 , 150)

  background(46 , 139 , 87);
  drawSprites();
text("PRESS THE UP ARROW TO FEED THE DOG",250,90)
}
function readStock(data)
{
foodS = data.val();
}

function writeStock(x)
{
  if(x<=0)
  {
    x = 0;
  }
  else
  {
    x = x - 1;
  }
database.ref('/').update({
  Food : x
})
}



