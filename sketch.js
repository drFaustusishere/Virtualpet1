//Create variables here
var dogimg, dogimg1, dog;
var database, foodS, foodstock;
function preload()
{
	//load images here
 dogimg=loadImage('images/dogImg.png');
 dogimg1=loadImage('images/dogImg1.png');
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;
  foodstock=databaseRef('Food');
  foodstock.on('value', readStock);
  textSize(20);
}

function draw() {  
background(46,139,87);
  
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(Foods);
    dog.addImage(dogimg1);
  }
  drawSprites();
  fill(255,255,254);
   stroke("black");
    text("Food remaining : "+foodS,170,200);
     textSize(13);
      text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20)
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else {
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

