

var road = document.getElementById('world');
road.id='road';
road.style.backgroundImage="url('road.jpg')";
road.style.margin="auto";
road.style.height="1800px";
road.style.width="800px";
road.style.overflow="hidden";
road.style.position="relative";
//update bg
function Frame(){
	this.y=0;
	this.update = function(){
		road.style.backgroundPosition="0px "+this.y+"px";
		
	this.y++;
	}
}

function randomGenerator()
	{
		var random= Math.floor(Math.random()*700);
		//console.log(random);
		if(random < 200) return 100;
		
		if(random < 400) return 300;
		if(random < 600) return 500;
		if(random < 700) return 700;
	}

var background = new Frame();
setInterval(function(){
background.update();
},10);


function Car(elementID){
	this.x=0;
	this.y= 1500;
	this.dx=0;
	this.element= document.getElementById(elementID);
	this.element.style.backgroundImage="url(car.gif)";
	this.element.style.height="300px";
    this.element.style.left="0px";
    this.element.style.width="138px";
	this.element.style.position="absolute";
    this.element.style.top = this.y + "px";
	//console.log(this.element.style.left);
	this.updatePosition = function(){
		this.x=this.x+this.dx;
		this.element.style.left=this.x+"px";
		
	}
	this.moveLeft = function(){
		if(parseInt(this.element.style.left)>(0+35)){
		//console.log("left");
		this.dx=-200;
		
		}
		else{
			this.dx=0;
		}
		car.updatePosition();
	}
	this.moveRight=function(){
		if(parseInt(this.element.style.left)<(800-200)){
		this.dx=200;
		
		//console.log(this.dx);
		}
		else{
			this.dx=0;
		}
		car.updatePosition();
	}
}



var car = new Car("car");
document.onkeydown=function(event){
	switch(event.keyCode){
		case 37:
		car.moveLeft();
		break;
		
		case 39:
		car.moveRight();
		break;
		
		case 38:
		//bullet
		//console.log("UP");
		
	}
}

function Enemy(){
	this.x=randomGenerator();
	this.y=-100;
	this.dy = 0;
	  this.createEnemy =  function(){
		this.element = document.createElement('div');
		this.element.style.position="absolute";
		//console.log(this.x);
		this.element.style.left=this.x+"px";
		//console.log(this.element.style.left);
		this.element.style.top="0px";
		this.element.style.height="100px";
		this.element.style.width="100px";
		
		this.element.style.borderRadius="50px";
		this.element.style.backgroundColor="red";
		this.element.style.left=this.x+'px';
		road.appendChild(this.element);
	 }
	
	this.update = function(){
		var that=this;
		this.dy=0;		
		this.dy = this.dy + 100;
			this.y=this.y+this.dy;
			this.element.style.top = this.y+"px";
		}
	this.checkCollision = function(){
		if (car.x < this.x + 100 &&
   car.x + 138 > this.x &&
   car.y < this.y + 100 &&
   300 + car.y > this.y) {
    alert("GAME OVER");
}

		
}

}
var obstacles = []; var i = 0; var count =0;
setInterval(function(){
count++;
if(count == 5){
var enemy = new Enemy();
enemy.createEnemy();
obstacles.push(enemy);
count = 0;
}
	for(var i=0;i<obstacles.length;i++){
	  obstacles[i].update(); 
      obstacles[i].checkCollision();
   }
},500);