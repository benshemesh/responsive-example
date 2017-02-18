function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
		document.getElementById("menu").src = "images/close.png";
    } else {
       x.className = "topnav";
	   document.getElementById("menu").src = "images/menu-button.png";
    }
}


function changeText(){
	x=document.getElementsByClassName("text"); 
	if(window.innerWidth > 817){
		for(var i = 0; i < x.length; i++){
		x[i].innerText="Free Text Free Text Free Text";    
		}
	}
	else{
		for(var i = 0; i < x.length; i++){
		x[i].innerText="Free Text!";    
		}
	}
}

window.onresize = function(event) {
    changeText();
};
