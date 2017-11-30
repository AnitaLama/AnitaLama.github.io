
var search_btn = document.getElementById('searchButton');
console.log(search_btn);
var search_box = document.getElementById('search-box');
console.log(search_box);
search_btn.onclick = function(){
	if( search_box.style.display == 'block'){
		search_box.style.display = 'none';
	}else{
		search_box.style.display = 'block';
		
	}
}



//main body slider

var titleUL = document.getElementById('titleUL');
var list = document.getElementById('titleUL').children;
len = list.length;
var picUL = document.getElementById('mainSlider');
var picLI = document.getElementById('mainSlider').children;
var left = document.getElementById('left');
var right = document.getElementById('right');

var x = 0;
a = 1;
//top div
var leftTitle = document.getElementById('leftTitle');
leftTitle.onclick = function(){
	console.log('left')
	if(a > 1 ){
		list[a-1].classList.remove("active");
		list[a-2].className='active';
		picLI[a-1].classList.remove("active");
		picLI[a-2].className +='active';


		a--;
}
else{
	a=1;	
}
} 
 
var rightTitle = document.getElementById('rightTitle');
rightTitle.onclick = function(){
	//console.log(len);
	
	if(a < len){
		list[a-1].classList.remove("active");
		list[a].className='active';
		picLI[a-1].classList.remove("active");
		picLI[a].className='active';
    a++;
}
else{
	a = len -1;
}

} 
var imageSlideUl = document.getElementsByClassName('pictureSlide');
var imageSlideLi = imageSlideUl[1].children;
var imageSlideLi1 = imageSlideUl[0].children;

var scrollLi = document.getElementById('scroll').children;

right.onclick = function(){
		if(x<len-1){
			
console.log('a'+a)
		imageSlideLi1[x].classList.remove('active');
		imageSlideLi1[x+1].classList.add('active');

		imageSlideLi[x].classList.remove('active');
		imageSlideLi[x+1].classList.add('active');

		scrollLi[x].classList.remove('active');
		scrollLi[x+1].classList.add('active');

			console.log(imageSlideLi[x+1])
		x++;
	}
}
left.onclick = function(){
		if(x>0){
			imageSlideLi1[x].classList.remove('active');
			imageSlideLi1[x-1].classList.add('active');
			imageSlideLi[x].classList.remove('active');
			imageSlideLi[x-1].classList.add('active');

			scrollLi[x].classList.remove('active');
			scrollLi[x-1].classList.add('active');
		x--;
	}
}


// related projects slider
var relatedProjectSlider = document.getElementById('picture-display').children;
var relatedCounter =0
var currentRelatedProject = relatedProjectSlider[0];
document.getElementById('displayPicLeft').addEventListener('click', function () {
    	fade(-1);
    });
document.getElementById('displayPicRight').addEventListener('click', function () {
    	fade(1);
    });


function fade(direction){
	fadeout(currentRelatedProject);
		relatedCounter += direction;
	if(direction == -1 && relatedCounter<0){
		relatedCounter = relatedProjectSlider.length-1;
	}
	if(direction == 1 && relatedCounter> relatedProjectSlider.length-1)
	{
		console.log(relatedCounter);
		relatedCounter = 0;
	}
	currentRelatedProject = relatedProjectSlider[relatedCounter];

	setTimeout(function(){ currentRelatedProject.classList.add("active");
	 currentRelatedProject.style.opacity=1;
	 currentRelatedProject.style.display="block";
}, 1000);

}


function fadeout(element) {
    var op = 1; 
    var newelement = element; // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
        	currentRelatedProject.classList.remove("active");

            clearInterval(timer);
            newelement.style.display="none";
        }
        element.style.opacity = op;
        op -= op * 0.12;
    }, 50);

}
