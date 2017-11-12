// JavaScript Document
var main=document.getElementById("main-wrapper");
var box=document.createElement("div");
box.style.height="250px";
box.style.width="250px";
box.style.backgroundColor="grey";
box.style.position="relative";
main.appendChild(box);

var ul=document.createElement("ul");
main.appendChild(ul);


for(var i=0;i<10;i++){
		var div=document.createElement("div");
		div.style.height="10px";
		div.style.width="10px";
		div.style.backgroundColor="red";
		div.style.position="absolute";
		div.style.top=Math.floor((Math.random()*240)+1)+"px";
		div.style.left=Math.floor((Math.random()*240)+1)+"px";
		box.appendChild(div);
		
		div.onclick=function(){
			var removedDiv =box.removeChild(this);
			var x=removedDiv.style.getPropertyValue("top");
			var y=removedDiv.style.getPropertyValue("left");
			var li=document.createElement("li");
			ul.appendChild(li);
			li.innerHTML="Top :"+x+" Laeft :"+y;
			}
	
	}




