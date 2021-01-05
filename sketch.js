
var bullet,wall;


var speed, weight; 


function setup() {
  createCanvas(1600, 400);


	speed=random(223,321)
	weight=random(30,52)


	car=createSprite(50, 200, 50,50);   

	car.velocityX = speed;

	bullet.shapeColor=color(255);


  
  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}

thickness = random(22,83)

function draw() {
  background(0);

  if(hasCollided(bullet5,width))
  {
  	bullet.velocityX=0;
	  var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);
	  
	if(damage>10)
	{
		wall.shapeColor=color(255,0,0);
	}

	if(damage<10)
	{
		car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		wall.shapeColor=color(0,255,0);
	}
  }  
  


  drawSprites();
}


function hasCollided(lbullet, lwall)
{
	bulletRightEdge= lbullet.x + lbullet.width;
	wallleftEdge=lwall.x;
	if(bulletRightEdge>=wallleftEdge){
		return true
	}
	return false;
}