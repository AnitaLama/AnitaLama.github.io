var data = [
   {
       tagName: 'div',
       className: 'test-class',
       styles: {
          width: "100px",
           height: "100px",
           backgroundColor: 'red'
       },
   },
      { children: [
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'blue'
               },
           },
           {
               tagName: 'div',
               className: 'box',
               styles: {
                   width: "50px",
                   height: "50px",
                   backgroundColor: 'brown',
                   float: 'right'
               },
           }
       ]
   }
];
var main = document.getElementById('main');

	 //console.log(data.length);
for(var i=0; i<data.length; i++){
	if(i == 0){
		var tagParent = document.createElement(data[0].tagName);
		tagParent.class=data[0].className;
		
		for(styles in data[0].styles){
		  //console.log(styles);
		   tagParent.style[styles] = data[0].styles[styles];
		}
		main.appendChild(tagParent);
		}
	var j = i;
	if(i > 0){
		var j = 0;
		while(j < data[i].children.length){
			//console.log(data[i].children.length);
			var tag = document.createElement(data[i].children[j].tagName);
			tag.class=data[i].children[j].className;
			console.log(tagParent);
			tagParent.appendChild(tag);
			for(styles in data[i].children[1].styles){
			  console.log(styles);
			   tag.style[styles] = data[i].children[j].styles[styles];
			}
			j++;
			 
		}
	
	 
	 
}
	   
}