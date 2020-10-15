var fixedrect;
var movingrect;
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  fixedrect.velocityX=-4;
  
  movingrect=createSprite(200, 200, 100, 50);
  movingrect.velocityX=4;

  movingrect.shapeColor="green";
  fixedrect.shapeColor="green";
  movingrect.debug=true;
  fixedrect.debug=true;



  
}

function draw() {
  background(0); 
  //movingrect.x=World.mouseX;
  //movingrect.y=World.mouseY; 

//isTouching();
bounceoff();
  drawSprites();
}
function isTouching(){
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2 && movingrect.y-fixedrect.y<=movingrect.height/2+fixedrect.height/2 && fixedrect.y-movingrect.y<=movingrect.height/2+fixedrect.height/2  ){
    movingrect.shapeColor="red";
    fixedrect.shapeColor="red";
    
    }
    else{
      movingrect.shapeColor="green";
      fixedrect.shapeColor="green";
    }
}
function bounceoff(){
  if(movingrect.x-fixedrect.x<=movingrect.width/2+fixedrect.width/2 && fixedrect.x-movingrect.x<=movingrect.width/2+fixedrect.width/2){
movingrect.velocityX=movingrect.velocityX*(-1);
fixedrect.velocityX=fixedrect.velocityX*(-1);
    
  }
}

