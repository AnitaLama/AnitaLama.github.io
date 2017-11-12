main=document.getElementsByTagName("body")[0];
main.style.width="1000px";
main.style.height="250px";

div1=document.getElementById("main");
div1.id="div";
div1.style.width="1000px";
div1.style.height="200px";

div1.style.overflow="hidden";
//div1.style.background="red";
main.appendChild(div1);
//console.log(div);


var div=document.createElement("div");
div.style.width="200px";
div.style.height="200px";
div.style.opacity="1";
div.style.overflow="hidden";
div.style.background="blue";
div1.appendChild(div);

previous=document.createElement('button');
previous.style.width="100px";
previous.style.height="50px";
previous.innerHTML="PREVIOUS";
main.appendChild(previous);

next=document.createElement('button');
next.style.width="100px";
next.style.height="50px";
next.innerHTML="NEXT";
main.appendChild(next);

for( var i = 0; i < 5; i++){
	var img=document.createElement("div");
img.style.position="relative";
img.style.width="200px";
img.style.height="200px";
img.style.opacity="1";
img.style.float="left";

img.style.left=0+"px";
console.log((i)*100+"px");
img.style.backgroundImage="url("+(i+1)+".jpg)";
div.appendChild(img);
}
var count=0;
previous.onclick=function(){
	if(count>0 && count < 5){
	//console.log(div.getPropertyValue.margin);
	var left = parseInt(window.getComputedStyle(div).getPropertyValue("margin-left")); 
	console.log(left);
	
	div.style.marginLeft = (left+200)+"px";
	console.log(window.getComputedStyle(div).getPropertyValue("margin-left"));
	var width = parseInt(div.style.width);
	//console.log(width);
	div.style.width= (width-200)+"px";
	//console.log(div.style.width);
	count--;
	}
}
next.onclick=function(){
	if(count<4&& count>=0){
	var left = parseInt(window.getComputedStyle(div).getPropertyValue("margin-left")); 
	div.style.marginLeft = (left-200)+"px";
	console.log(window.getComputedStyle(div).getPropertyValue("margin-left"));
	var width = parseInt(div.style.width);
	div.style.width= (width+200)+"px";
	
	//console.log(div.style.width);
	count++;
	}
}