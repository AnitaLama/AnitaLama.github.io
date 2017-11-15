body = document.getElementsByTagName("body")[0];
main = document.getElementById("main");
let score = document.createElement("div");
main.appendChild(score);
score.style.top="420px";
score.style.height="50px";
score.style.width="120px";
score.style.position="absolute";
//score.style.background="red";
score.innerHTML="Score"
class Game{
  constructor(){
	  this.y=0;
   this.world = document.createElement("div");
   this.world.style.height = "410px";
   this.world.style.width = "1200px";
   this.world.style.backgroundImage = "url('background.jpg')"
   this.world.style.position = "relative";
   this.world.style.overflow = "hidden";
   
   main.appendChild(this.world);
   
  }
  moveBackground(){
		this.world.style.backgroundPosition = this.y + "px"+ " 0px";
		this.y--;
	}
   gameInit() {
    let flappybird = new Bird();
    let that = this;
    let count = 0;
    let obstacleArray = [];
    let obstacleArrayD = [];
    this.world.appendChild(flappybird.bird);
    setInterval(function(){
    	count++;
    	flappybird.moveDown();
    	document.onkeydown = function(event) {
		    if(event.keyCode == 38){
		    	//console.log("up");
		      flappybird.moveUp();
		      //console.log(flappybird);
		    }
			}
			if(count == 100 || count ==1){
  		let obs = new ObstacleUp();
  		let obsD = new ObstacleDown();
      obstacleArray.push (obs);
      obstacleArrayD.push (obsD);
      //console.log(obsD);
      
      //console.log("count"+count);
      
      that.world.appendChild(obs.obstacle);
      that.world.appendChild(obsD.obstacle);
      count = 2;
      }

    	for(let i=0;i<obstacleArray.length;i++){
		 var obs=obstacleArray[i];
		 var obsD=obstacleArrayD[i];
    		obs.updatePosition();
    		obsD.updatePosition();
    		obs.checkCollision(flappybird);
    		obsD.checkCollision(flappybird);
			}
},500);
}
}
class Bird{
  constructor(){
    this.x = 0;
    this.y = 185;
    this.dy = 1;
    this.bird = document.createElement("div");
    this.bird.style.height = "50px";
    this.bird.style.width = "80px";
    this.bird.style.left = this.x + "px";
    this.bird.style.top = this.y + "px";
    this.bird.style.position = "absolute";
    this.bird.style.backgroundImage = "url('flappybird.png')";
   
  }

  moveDown(){
  	if((parseInt(this.bird.style.top) < (410- 50)) ){
  	let top = parseInt(this.bird.style.top);
  		this.y = (top + this.dy);
    	this.bird.style.top = ( this.y) + "px";
    }
    if(this.bird.style.top == "360px"){alert("GAME OVER!")}
  }
  
  moveUp(){
  	if((parseInt(this.bird.style.top)) > (0+100)){

	  	this.y = this.y - 100;
	  	//console.log(this.y);
	  	this.bird.style.top = ( this.y) + "px";
  	}

  }
	
}
class ObstacleUp{
	constructor(){
   
    this.x = 1200;
    this.y = 0;
    this.height = 0;
    this.height = Math.floor(Math.random()*180);
    this.obstacle = document.createElement("div");
    this.obstacle.style.height = this.height + "px";
    this.obstacle.style.backgroundImage = "url('obstacleTop.png')";
    this.obstacle.style.width = "138px";
    this.obstacle.style.left = this.x + "px";
    this.obstacle.style.top = this.y + "px";
    this.obstacle.style.position = "absolute";


    }

	updatePosition(){
		this.x = this.x - 10;
		this.obstacle.style.left = this.x + 'px';
		
	}
	
	

	checkCollision(flappybird){
		/*if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y)*/

   if( this.x < flappybird.x + 80 && this.x + 138 > flappybird.x &&
    this.y < flappybird.y + 50 &&  this.height + this.y > flappybird.y){
   		alert("OVER");
   }
	}
}

class ObstacleDown{
	constructor(){
   
    this.x = 1650;
    this.y = 0;
    this.height = 0;
    this.height = Math.floor(Math.random()*180);
    this.obstacle = document.createElement("div");
    this.obstacle.style.height = this.height + "px";
    this.obstacle.style.backgroundImage = "url('obstacleTop.png')";
    this.obstacle.style.width = "138px";
    this.obstacle.style.left = this.x + "px";
    this.obstacle.style.top = (410 - this.height) + "px";
    this.obstacle.style.position = "absolute";


    }

	
	updatePosition(){
		this.x = this.x - 10;
		this.obstacle.style.left = this.x + 'px';
		
	}
	
	
	

	checkCollision(flappybird){
		/*if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y)*/

   //if( this.x < flappybird.x + 80 && this.x + 138 > flappybird.x &&
    //this.y < flappybird.y + 50 &&  this.height + this.y > flappybird.y){
   		if(flappybird.x + 80 > this.x && flappybird.y + 50 > 410 - this.height){
   		alert("OVER");
   		
   }
	}
}

let world = new Game();
world.gameInit();
setInterval(function(){
world.moveBackground();
},10);

