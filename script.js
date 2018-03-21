// JavaScript Document
myFile = { FirstName:"Anita",
		 LastName:"Lama", 
		 phone:"9818981898",
		 email:"anitalama07@gmail.com",
		 address:"Ktm", 
		 age:23,
		 interests:["listening music","reading books","watching anime"],
		 education:{
			 Bachelor:"BSc. CSIT from Madan Bhandari Memorial College",
				plusTwo: "WhiteGold H.S.S. (2013)",
				school: "Rosebud School (2010)"
				},
		skills:["C","C++","Java","PHP","JS","React JS","MySql","Oracle","Microsoft Products"],
	
		 };
		 
		 
var head=document.getElementById("main-wrapper");

head.style.width="500px";
head.style.margin="0 auto";
head.style.textAlign="center";
head.innerHTML +=myFile.FirstName+" "+myFile.LastName+"<br>";
head.innerHTML +=("+977 ")+myFile.phone+"<br>";
head.innerHTML +=myFile.email+"<hr>";

var x=document.createElement("div");
x.style.textAlign="left";
x.innerHTML +=("Address : ")+myFile.address+"<br>";
x.innerHTML +=("Age : ")+myFile.age+"<br>";
x.innerHTML +=("Interests : ");
//create a list
var ul=document.createElement('ul');
ul.style.listStyleType="none";
ul.style.listStylePosition="outside";
ul.style.margin="0px";
x.appendChild(ul);
for (var i=0; i<myFile.interests.length; i++){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML+=myFile.interests[i];
}
x.innerHTML +=("Education : ")+"<br>";
var ul=document.createElement('ul');

x.appendChild(ul);
    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML+=("Bachelor : ")+myFile.education.Bachelor;
	var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML+=("High School : ")+myFile.education.plusTwo;
    var li=document.createElement('li');
    ul.appendChild(li);
	li.innerHTML+=("Secondary School : ")+myFile.education.school;
	

x.innerHTML +=("Computer Skills : ");
var ul=document.createElement('ul');
ul.style.listStyleType="none";
x.appendChild(ul);
ul.style.margin="0px";

for (var i=0; i<myFile.skills.length; i++){
    var li=document.createElement('li');
    ul.appendChild(li);
    li.innerHTML+=myFile.skills[i];
}
head.appendChild(x);