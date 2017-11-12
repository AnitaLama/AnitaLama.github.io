
var main =  document.getElementById("main-wrapper");
var startButton = document.getElementById("start");
var resetButton = document.getElementById("reset");
startButton.onclick=function() {
	if(data.length>0)startMain(); else init()};

var box = document.createElement("div");
main.appendChild(box);

var data = [];
box.style.height = "550px";
box.style.width = "550px";
box.style.backgroundColor = "grey";
box.style.position = "relative";
box.id = "box";
dx = dy = 1;

function init(){
	alert("click START to start the game!");
	for(var i = 0; i < 5; i++){	
		//console.log(i);
			var x = new Box(i);
			x.create();
			data.push(x);
	}
}
function startMain(){
	
	setInterval(function(){
	for(var i = 0; i < data.length;i++){	
		data[i].update();
		
			var boxA = data[i];
			for(var j = 1; j < data.length; j++){
				var boxB = data[j];
				if(collide(boxA, boxB)){
					boxA.change();
					boxB.change();
					
			
					
				}
			
		}
	}
		},100);	
}



function Box(){
	this.div = document.createElement("div");
	
	this.box = document.getElementById("box");
	
	this.dx = 1;
	this.dy = 1;
	this.x = 0;
	this.y = 0;
		var that = this;
				
		this.create = function(i){
			
			this.div.style.height = "20px";
			this.div.style.width = "20px";
			this.div.style.backgroundColor = "red";
			this.div.style.backgroundImage="url(ant.png)";
			//alert(this.div.style.backgroundImage);
			this.div.style.position = "absolute";
			this.div.style.top = Math.floor((Math.random()*530)+1)+"px";
			this.div.style.left = Math.floor((Math.random()*530)+1)+"px";
			this.box.appendChild(this.div);
		}
		
		this.update = function(){
				this.x = parseInt(this.div.style.left);
				this.y = parseInt(this.div.style.top);
				//console.log(this.x+" "+this.y)
				if((this.x+20) < 550){this.dx = this.dx;}
				if((this.x+20) == 550){this.dx = -this.dx;}
				if((this.x+20) == 20){this.dx = -this.dx;}
				
				if((this.y+20) < 550){this.dy = this.dy;}
				if((this.y+20) == 550){this.dy = -this.dy;}
				if((this.y) == 0){this.dy = -this.dy;}
				
				this.x = this.x + this.dx;
				this.y = this.y + this.dy;
				this.div.style.left = this.x + "px";
				
				this.div.style.top = this.y + "px";
			}
				this.count=0;
				//console.log(count);
				this.div.onclick = function(){
					data.pop(this);
					//this.count = count + 1;
					that.box.removeChild(this);
					if(data.length == 0){
						alert("GAME OVER!")
						}
				}	
				
				this.change = function(){
					this.dx = -this.dx;
					this.dy = -this.dy;
				}	
				
				
				
	}
	
	
	 collide = function(boxA,boxB){
		
					var ax = boxA.x;
					var ay = boxA.y;
					var bx = boxB.x;
					var by = boxB.y;
					
					//
					if(ax < bx + 20 && ax + 20 >bx && ay <by + 20 && ay + 20 > by){
						
						return true;
						}
					}
	