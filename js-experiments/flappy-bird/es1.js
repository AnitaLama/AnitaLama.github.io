body = document.getElementsByTagName("body")[0];
main = document.getElementById("main");

		let score = 0;
		let dead = 0;

class World{
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
	init(){

		this.gameName = document.createElement("h1");
		this.gameName.innerHTML = "Flappy Bird ";
		this.gameName.style.position = "absolute";
		this.gameName.style.margin = "20px";
		this.gameName.style.color = "#fff";
		this.gameName.style.textAlign = "center";

		this.startButton = document.createElement("button");
		this.startButton.innerHTML = "START";
		this.startButton.style.margin = "200px 500px";

		this.world.appendChild(this.gameName);
		this.world.appendChild(this.startButton);

		this.startButton.onclick = () => {
			this.world.removeChild(this.gameName);
			this.world.removeChild(this.startButton);
			this.start();
		}
	}
	start(){
		this.score = document.createElement("h1");
		this.score.innerHTML = score;
		this.score.style.position = "absolute";
		this.score.style.left = "15px";
		this.score.id = "score";
		this.world.appendChild(this.score);

		let obstacleArray = [];
		let obstacleArrayD = [];
		let count = 0;

		let flappybird = new Bird();
		this.world.appendChild(flappybird.bird);
		
		this.move = setInterval(() => {
			console.log(dead);
			this.world.style.backgroundPosition = this.y + "px"+ " 0px";
			this.y--;

			flappybird.moveDown();
			    	
			    	document.onkeydown = function(event) {
					    if(event.keyCode == 38){
					      flappybird.moveUp();
					    }
						}

			count++;
			if(count == 50){
				let obstacle = new ObstacleUp();
				this.world.appendChild(obstacle.obstacle);

				let obstacleDown = new ObstacleDown();
				this.world.appendChild(obstacleDown.obstacle);

				obstacleArray.push(obstacle);
				obstacleArrayD.push(obstacleDown);
				count = 0;
			}
			for(let i=0;i<obstacleArray.length;i++){
		 		var obs=obstacleArray[i];
    		obs.updatePosition();
    		obs.checkCollision(flappybird);
    		

    		var obsD=obstacleArrayD[i];
    		obsD.updatePosition();
    		obsD.checkCollision(flappybird);
    		}

    		if(dead){
    			dead = 0;
    			score = 0;
    			clearInterval(this.move);
					this.gameOver();
				}
		},20);
		
		
	}
	gameOver(){
		let display = document.createElement("div");
		display.innerHTML = "GAME OVER";
		display.style.fontsize = "20px";
		display.style.height = "20px";
		display.style.margin = "200px 480px";
		display.style.marginBottom = "0px";
		
		display.style.fontsize = "20px";
		this.world.appendChild(display);

		let restartButton = document.createElement("button");
		restartButton.innerHTML = "RESTART";
		restartButton.style.margin = "200px"
		restartButton.style.marginTop = "20px"
		restartButton.style.marginLeft = "500px"

		restartButton.onclick = () => {
			this.world.removeChild(display);
			this.world.removeChild(restartButton);
			main.removeChild(this.world);
			let world = new World();
			world.init();
			this.init();

		}
		
		this.world.appendChild(restartButton);		
		console.log(restartButton);
		
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
    if(this.bird.style.top == "360px"){dead =1;}
  }
  
  moveUp(){
  	if((parseInt(this.bird.style.top)) > (0+100)){

	  	this.y = this.y - 100;
	  	//console.log(this.y);
	  	this.bird.style.top = ( this.y) + "px";
  	}
	}	
	init(){
		
}
}
class ObstacleUp{
	constructor(){
		this.x = 1200;
    this.y = 0;
    this.height = 0;
    this.height = Math.floor((Math.random()*120)+50);
    this.obstacle = document.createElement("div");
    this.obstacle.style.height = this.height + "px";
    this.obstacle.style.backgroundImage = "url('obstacleTop.png')";
    this.obstacle.style.width = "138px";
    this.obstacle.style.left = this.x + "px";
    this.obstacle.style.top = this.y + "px";
    this.obstacle.style.position = "absolute";
	}
	init(){
		
	}
	updatePosition(){
	//	console.log(this.x);
		this.x = this.x - 10;
		//console.log(this.x);
		
		this.obstacle.style.left = this.x + 'px';
		this.removeObstacle(this.x);
	}

	checkCollision(flappybird){
   if( this.x < flappybird.x + 80 && this.x + 138 > flappybird.x &&
    this.y < flappybird.y + 50 &&  this.height + this.y > flappybird.y){
   		 dead = 1;
   }
	}

	removeObstacle(x) {
		if ( x == 0) {
			score++;
			let scoreObj = document.getElementById("score");
			scoreObj.innerHTML = score;
			}
		}

}
class ObstacleDown{
	constructor(){
   
    this.x = 1600;
    this.y = 0;
    this.height = 0;
    this.height = Math.floor((Math.random()*120)+50);
    this.obstacle = document.createElement("div");
    this.obstacle.style.height = this.height + "px";
    this.obstacle.style.backgroundImage = "url('obstacleTop.png')";
    this.obstacle.style.width = "138px";
    this.obstacle.style.left = this.x + "px";
    this.obstacle.style.top = (410 - this.height) + "px";
    this.obstacle.style.position = "absolute";
    }
	
	updatePosition(){
	//	console.log("d");
		this.x = this.x - 10;
		this.obstacle.style.left = this.x + 'px';
		this.removeObstacle(this.x);
	}
	
	checkCollision(flappybird){
		/*if (rect1.x < rect2.x + rect2.width &&
   rect1.x + rect1.width > rect2.x &&
   rect1.y < rect2.y + rect2.height &&
   rect1.height + rect1.y > rect2.y)*/

   //if( this.x < flappybird.x + 80 && this.x + 138 > flappybird.x &&
    //this.y < flappybird.y + 50 &&  this.height + this.y > flappybird.y){
   		if(flappybird.x + 80 > this.x && flappybird.y + 50 > 410 - this.height && this.x + 138 < flappybird.x){
   		dead = 1;
   		
   }
	}

		removeObstacle(x) {
		if ( x == 0) {
			score++;
			let scoreObj = document.getElementById("score");
			scoreObj.innerHTML = score;
			}
		}
}




let game = new World();
game.init();