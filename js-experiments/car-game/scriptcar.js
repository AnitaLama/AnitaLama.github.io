

var road = document.getElementById('world');
road.id='road';
road.style.backgroundImage="url('road.jpg')";
road.style.margin="auto";
road.style.height="1800px";
road.style.width="800px";
road.style.position="relative";

function randomGenerator()
	{
		var random= Math.random();
		if(random>=0 && random<0.25)
		{
			return 0;
		}
		else if(random >=0.25 && random <0.5)
		{
			return (100);
		}
		else if(random >=0.5 && random <0.75)
		{
			return (200);
		}
		else
		{
			return (300);
		}
	}
function Frame(){
	this.y=0;
	this.update = function(){
	road.style.backgroundPosition="0px "+this.y+"px";
	this.y++;
	}
}
function Enemy(){
	this.x=randomGenerator();
	
	this.y=100;
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
		//console.log(this.element);
		road.appendChild(this.element);
	 }
	
	this.updateEnemyPostion = function(){
		var that=this;
		this.dy=0;		
		//console.log(this.dy);
		var count =0;
		while(count<200){
		this.dy = this.dy+5;
		//console.log(this.dy);
			this.y=this.y+this.dy;
			
			
		console.log(this.element.style.top);
			this.element.style.top = this.y+"px";
			
		console.log(this.element.style.top);
		coun++;}
		}
	this.removeEnemy = function(){
				if ((this.y+200)>800){
					road.removeChild(this.element);
					obstacles.splice(0,1);
          }
	}
	this.checkCollision = function(){
		if((this.y+138)>car.y && this.y<=(car+138) && (this.x+138)>car.x && this.x <= (car.x+138)){
			console.log("GAME OVER");
	}
}
}
var i = 0;
var obstacles = [];
setInterval(function () {
	var obj = new Enemy();
	obj.createEnemy();
	obstacles.push(obj);
	while(i<obstacles.length){
		//console.log(i);
			  obstacles[i].updateEnemyPostion(); 
              obstacles[i].removeEnemy();
              obstacles[i].checkCollision();
			  i++
	}
    
	
}
	,1000);



function Car(elementID){
	
	this.x=0;
	this.y= 0;
	this.dx=0;
	this.element= document.getElementById(elementID);
	this.element.style.backgroundImage="url(car.gif)";
	this.element.style.height="300px";
    this.element.style.left="35px";
    this.element.style.width="138px";
	this.element.style.position="absolute";
    this.element.style.bottom = this.y + "px";
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


var frame = new Frame();


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

