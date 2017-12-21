
var colors = generateColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var backgroundColor = window.getComputedStyle(document.querySelector("body")).getPropertyValue("background-color");
var messageDisplay = document.querySelector("#message");
var randomColors = generateColors();
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor === pickedColor){
			changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
      messageDisplay.innerHTML = "Correct!";
		}else{
			
      this.style.backgroundColor = backgroundColor;
      messageDisplay.innerHTML = "Try Again";
		}
	});
}

function changeColors(color){
  //loop through all the squares
  for(var i = 0; i < squares.length; i++){
    //change each color to match the correct color
    squares[i].style.backgroundColor = color;
  }
  
  
}

function generateColors(num){
  //make an array
  var arr = [];
  //make num random colors
  for(var i = 0; i < num; i++){
    //generate random color and push
    //into array
    arr.push(getRandomColor());
  }
  //return array
  return arr;
  
  
}

function getRandomColor(){
  //pick a red 
  var r = Math.floor(Math.random() * 256);
  //pick a green
  var g = Math.floor(Math.random() * 256);
  //pick a blue
  var b = Math.floor(Math.random() * 256);
  
  return "rgb(" + r +", " + g + ", " + b +")";
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
