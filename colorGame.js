var numSquares = 6;
var colors = [];
var pickedColor;
var h1 = document.querySelector("h1");
var headerColor = "#4286f4";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var playerWon = false;

init();

function init(){
	//loop through mode buttons
	setupModeButtons();
	
	//game logic
	setupGameLogic();
	
	//Make game ready for first time use
	resetGame();
}

function setupModeButtons(){
	for(var i = 0; i< modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			//remove selected class from all buttons
			modeButtons[0].classList.remove("active");
			modeButtons[1].classList.remove("active");
			//apply the selected class
			this.classList.add("active");

			//figure out how many squares to show
			//ternary operator good for quick one line if statements
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;

			//reset the game
			resetGame();
		});
	}
}

function setupGameLogic(){
	for(var i = 0; i < squares.length; i++){
		//add click listeners to squares
		squares[i].addEventListener("click",function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor){
				//alert("correct");
				messageDisplay.textContent = "Correct!";
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again!"
				changeColors(clickedColor);
				playerWon = true;
			}else{
				//alert("wrong");
				if(!playerWon){
					messageDisplay.textContent = "Try Again!";
					this.style.backgroundColor = '#232323';
				}
			}
		});
	}
}

//add event listener to resetbutton
resetButton.addEventListener("click", function(){
	
	//reset game
	resetGame();
});


function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < numSquares; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

//pick a random color from the colors array
function randomColor(){
	//generate a random number
	var randomNum = Math.floor(Math.random() * numSquares);
	//return the array index 
	return colors[randomNum];
}

//function to apply new colors to the squares

function applySquareColors(){
	
	//apply colors to the squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.backgroundColor = "#232323";
		}
	}

}

function resetGame(){
	//resets all displays, sets and picks a new random color
	//sets and picks all new colors for the squares
	//updates button text
	//generate random colors
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = randomColor();
	//assign square colors
	applySquareColors();
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = headerColor;
	resetButton.textContent = "Change Colors";
	messageDisplay.textContent = "";
	playerWon = false;
}

//generate random colors for the array
function generateRandomColors(numSquares){
	var arr = [];
	
	//loop through to create color for each square
	for(var i = 0; i < numSquares; i++){
		//random r
		var r = Math.floor(Math.random() * 256);
		//random g
		var g = Math.floor(Math.random() * 256);
		//random b
		var b = Math.floor(Math.random() * 256);
		//create rgb string and add to array
		var str = "rgb(" + r + ", " + g + ", " + b + ")";
		arr.push(str);
	}

	return arr;
}

