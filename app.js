var context;
var shape = new Object();
var monster1 = new Object();
var monster2 = new Object();
var monster3 = new Object();
var monster4 = new Object();
var monsterArr = new Array();
var cherry = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var intervalMon;
var monsterPattern = 0;
var cherryInterval;

function startAfterFail() {
	let life = parseInt($('#life').text());
	context = canvas.getContext("2d");
	life--;
	$('#life').text(life);
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = $('#numOfBalls').val();
	var five_remain = Math.floor(food_remain * 60/100);
	var fifteen_remain = Math.floor(food_remain * 30/100);
	var twenty_five_remain = Math.floor(food_remain * 10/100);
	if (five_remain + fifteen_remain + twenty_five_remain != food_remain){
		twenty_five_remain++;
	}
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 12; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 12; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					let randomNumFood = (Math.floor(Math.random() * 4) +1);
					if (randomNumFood === 1 && five_remain > 0 ) {
						five_remain--;
						food_remain--;
						board[i][j] = 1;
					}else if (randomNumFood === 2 && fifteen_remain > 0 ) {
						/** 5 point - 1    15 point - 3      25 point - 5  */
						fifteen_remain--;
						food_remain--;
						board[i][j] = 3;
					} else if (randomNumFood === 3 && twenty_five_remain > 0) {
						twenty_five_remain--;
						food_remain--;
						board[i][j] = 5;
					}
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					// shape.i = 0;
					// shape.j = 5;
					// pacman_remain--;
					// board[0][5] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}

		}
	}




	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		if ( twenty_five_remain > 0){
			board[emptyCell[0]][emptyCell[1]] = 5;
			twenty_five_remain--;
		}else if ( fifteen_remain > 0){
			board[emptyCell[0]][emptyCell[1]] = 3;
			fifteen_remain--;
		}else if ( five_remain > 0){
			five_remain--;
			board[emptyCell[0]][emptyCell[1]] = 1;

		}
		food_remain--;
	}

	let numOfMonsters = $('#numOfMonsters').val();
	switch (numOfMonsters) {
		case "1":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monsterArr = [monster1];
			break;
		case "2":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2];
			break;
		case "3":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2,monster3];
			break;
		case "4":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			board[11][0] = 9;
			monster4.i = 11;
			monster4.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monster4.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2,monster3,monster4];
			break;
	}


	var pacmanPos = findRandomEmptyCell(board);
	shape.i=pacmanPos[0];
	shape.j=pacmanPos[1];
	board[shape.i][shape.j]=2;

	var cherryPos = findRandomEmptyCell(board);
	cherry.i = cherryPos[0];
	cherry.j = cherryPos[1];
	board[cherry.i][cherry.j]=13;
	cherry.whatWas =0;
	cherryInterval =setInterval(UpdateCherryPosition,500);
	Draw();

}
function Start() {

	$('#life').text('5');
	context = canvas.getContext("2d");
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain = $('#numOfBalls').val();
	var five_remain = Math.floor(food_remain * 60/100);
	var fifteen_remain = Math.floor(food_remain * 30/100);
	var twenty_five_remain = Math.floor(food_remain * 10/100);
	if (five_remain + fifteen_remain + twenty_five_remain != food_remain){
		twenty_five_remain++;
	}
	var pacman_remain = 1;
	start_time = new Date();
	for (var i = 0; i < 12; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		for (var j = 0; j < 12; j++) {
			if (
				(i == 3 && j == 3) ||
				(i == 3 && j == 4) ||
				(i == 3 && j == 5) ||
				(i == 6 && j == 1) ||
				(i == 6 && j == 2)
			) {
				board[i][j] = 4;
			} else {
				var randomNum = Math.random();
				if (randomNum <= (1.0 * food_remain) / cnt) {
					let randomNumFood = (Math.floor(Math.random() * 4) +1);
					if (randomNumFood === 1 && five_remain > 0 ) {
						five_remain--;
						food_remain--;
						board[i][j] = 1;
					}else if (randomNumFood === 2 && fifteen_remain > 0 ) {
						/** 5 point - 1    15 point - 3      25 point - 5  */
						fifteen_remain--;
						food_remain--;
						board[i][j] = 3;
					} else if (randomNumFood === 3 && twenty_five_remain > 0) {
						twenty_five_remain--;
						food_remain--;
						board[i][j] = 5;
					}
				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
					// shape.i = 0;
					// shape.j = 5;
					// pacman_remain--;
					// board[0][5] = 2;
				} else {
					board[i][j] = 0;
				}
				cnt--;
			}

		}
	}




	while (food_remain > 0) {
		var emptyCell = findRandomEmptyCell(board);
		if ( twenty_five_remain > 0){
			board[emptyCell[0]][emptyCell[1]] = 5;
			twenty_five_remain--;
		}else if ( fifteen_remain > 0){
			board[emptyCell[0]][emptyCell[1]] = 3;
			fifteen_remain--;
		}else if ( five_remain > 0){
			five_remain--;
			board[emptyCell[0]][emptyCell[1]] = 1;

		}
		food_remain--;
	}

	let numOfMonsters = $('#numOfMonsters').val();
	switch (numOfMonsters) {
		case "1":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monsterArr = [monster1];
			break;
		case "2":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2];
			break;
		case "3":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2,monster3];
			break;
		case "4":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			board[11][0] = 9;
			monster4.i = 11;
			monster4.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monster4.WhatWasInTheCellBefore = 0
			monsterArr = [monster1,monster2,monster3,monster4];
			break;
	}

	var pacmanPos = findRandomEmptyCell(board);

	shape.i=pacmanPos[0];
	shape.j=pacmanPos[1];
	board[shape.i][shape.j]=2;

	var cherryPos = findRandomEmptyCell(board);
	cherry.i = cherryPos[0];
	cherry.j = cherryPos[1];
	board[cherry.i][cherry.j]=13;
	cherry.whatWas =0;

	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);

	cherryInterval = setInterval(UpdateCherryPosition,500);
	interval = setInterval(UpdatePosition, 130);
	intervalMon = setInterval(UpdatePositionForMonster, 270);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 11 + 1);
	var j = Math.floor(Math.random() * 11 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 11 + 1);
		j = Math.floor(Math.random() * 11 + 1);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] === 6){
				let img1 = new Image(3,3);
				img1.src = "resources/monsterLogo.png";
				context.drawImage(img1, i*60, j*60);
			}
			else if (board[i][j] === 7){
				let img2 = new Image(3,3);
				img2.src = "resources/monsterLogo1.png";
				context.drawImage(img2, i*60, j*60);
			}
			else if (board[i][j] === 8){
				let img = new Image(10,10);
				img.src = "resources/monsterLogo.png";
				context.drawImage(img, i*60, j*60);
			}
			else if (board[i][j] === 9){
				let img = new Image(10,10);
				img.src = "resources/monsterLogo.png";
				context.drawImage(img, i*60, j*60);
			}else if (board[i][j] === 13){
				let img = new Image(10,10);
				img.src = "resources/cherry.png"
				context.drawImage(img, i*60, j*60);
			}
			if (board[i][j] == 2) {  /**right*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 10) {  /**left*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.85 * Math.PI, 1.15 * Math.PI,true);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 5, center.y - 15, 5, 0, 2 * Math.PI, ); // circle
				context.fillStyle = "black"; //color
				context.fill();
			}else if (board[i][j] == 11) {  /**up*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 1.65 * Math.PI, 1.35 * Math.PI);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 15, center.y - 5 , 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 12) {  /**down*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.35 * Math.PI, 0.65 * Math.PI,true);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 15, center.y + 5, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
				context.fillStyle = $('#5PointsColor').val(); //color
				context.fill();
			}  else if (board[i][j] == 3) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = $('#15PointsColor').val(); //color
				context.fill();
			}else if (board[i][j] == 5) {
					context.beginPath();
					context.arc(center.x, center.y, 20, 0, 2 * Math.PI); // circle
					context.fillStyle = $('#25PointsColor').val(); //color
					context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}

function UpdatePosition() {

	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			board[shape.i][shape.j] = 0;
			shape.j--;
			board[shape.i][shape.j] = 11;
		}
	}
	if (x == 2) {
		if (shape.j < 11 && board[shape.i][shape.j + 1] != 4) {
			board[shape.i][shape.j] = 0;
			shape.j++;
			board[shape.i][shape.j] = 12;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			board[shape.i][shape.j] = 0;
			shape.i--;
			board[shape.i][shape.j] = 10;
		}
	}
	if (x == 4) {
		if (shape.i < 11 && board[shape.i + 1][shape.j] != 4) {
			board[shape.i][shape.j] = 0;
			shape.i++;
			board[shape.i][shape.j] = 2;
		}
	}
	//board[i][j] = 0;
	if(board[shape.i][shape.j]===13) {
		score = score + 50;
		//alert("FAS");
		clearInterval(cherryInterval);
		cherryInterval.stop();
	} else if(board[shape.i][shape.j] == 3){
		score = score + 15;
	}else if(board[shape.i][shape.j] == 5){
		score = score + 25;
	} else if(board[shape.i][shape.j]===13){
		score = score +50;
		alert("FAS");
		clearInterval(cherryInterval);
		cherryInterval.stop();
	}else if (board[shape.i][shape.j] == 1) {
	score = score + 5;
	}

	let life = parseInt($('#life').text());
	if (life !== 0) {

		Draw();
	}else{
		window.clearInterval(interval);
		window.clearInterval(intervalMon);
		interval.stop();
		clearInterval(cherryInterval);
		cherryInterval.stop();
		intervalMon.stop();
	}
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;

	// if (score == 50) {
	// 	window.clearInterval(interval);
	// 	window.alert("Game completed");
	// } else {
	// }
}

window.addEventListener("keydown",function (e) {
	if ([32,37,38,39,40].indexOf(e.keyCode) > -1 ){
		e.preventDefault();
	}
},false);




function UpdateCherryPosition() {
	var random = Math.random();
	if(random>0&&random<0.25){
		if(cherry.i<11&&board[cherry.i+1][cherry.j]!==4){
			if(cherry.whatWas ===13) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherry.whatWas;
			}
				cherry.whatWas = board[cherry.i + 1][cherry.j];
				board[cherry.i + 1][cherry.j] = 13;
				cherry.i=cherry.i+1;
		}
	}
	else if(random>0.25&&random<0.5){
		if(cherry.i>0&&board[cherry.i-1][cherry.j]!==4){
			if(cherry.whatWas ===13) {
				board[cherry.i][cherry.j] = 0
			}else{
				board[cherry.i][cherry.j] = cherry.whatWas;
			}
			cherry.whatWas = board[cherry.i-1][cherry.j];
			board[cherry.i-1][cherry.j]=13;
			cherry.i=cherry.i-1;
		}
	}else if(random>0.5&&random<0.75){
		if(cherry.j<11&&board[cherry.i][cherry.j+1]!==4){
			if(cherry.whatWas ===13) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherry.whatWas;
			}
			cherry.whatWas = board[cherry.i][cherry.j+1];
			board[cherry.i][cherry.j+1]=13;
			cherry.j=cherry.j+1;
		}
	}if(random>0.75){
		if(cherry.j>0&&board[cherry.i][cherry.j-1]!==4){
			if(cherry.whatWas ===13) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherry.whatWas;
			}
			cherry.whatWas = board[cherry.i][cherry.j-1];
			board[cherry.i][cherry.j-1]=13;
			cherry.j=cherry.j-1;
		}
	}

}
function UpdatePositionForMonster() {

	for (let i = 0; i < monsterArr.length; i++) {
		let placeToGo = findWhereToGo(monsterArr[i].i,monsterArr[i].j);
		var whatWas = monsterArr[i].WhatWasInTheCellBefore;

		monsterArr[i].WhatWasInTheCellBefore = board[placeToGo[0]][placeToGo[1]];
		board[placeToGo[0]][placeToGo[1]]=6+i;
		if(!(placeToGo[0] === monsterArr[i].i && placeToGo[1] === monsterArr[i].j)){
			if((whatWas === 6 || whatWas === 7 || whatWas === 8 || whatWas === 9 || whatWas===13)){
				board[monsterArr[i].i][monsterArr[i].j]=0;
			}else{
				board[monsterArr[i].i][monsterArr[i].j]=whatWas;
			}
			monsterArr[i].i = placeToGo[0];
			monsterArr[i].j = placeToGo[1];

		}
		 if (monsterArr[i].i === shape.i && monsterArr[i].j === shape.j){
		 	let life = parseInt($('#life').text());
		 	if (life === 1){
				// window.clearInterval(interval);
				$('#endOfTheGame').text("LOSER");

				window.alert("LOSER");
				changeDisplay(document.getElementById("settingPage"));
				resetSettings();
				window.clearInterval(interval);
				clearInterval(cherryInterval);
				window.clearInterval(intervalMon);
				intervalMon.stop();
				cherryInterval.stop();
				interval.stop();
			}else if(life === 0){
				//var context
				clearInterval(cherryInterval);
				window.clearInterval(interval);
				window.clearInterval(intervalMon);
				interval.stop();
				cherryInterval.stop();
				intervalMon.stop();
			}
		 	else{
		 		// life--;
		 		// $('#life').text(life);
				startAfterFail();
			}
		 }


	}
}


function findWhereToGo(x,y) {
	switch (monsterPattern % 8) {
		case 0:
			if ( x > shape.i && x > 0 && board[x-1][y] !== 4 ){
				return [x-1,y];
			}else if (y < shape.j && y < 11 && board[x][y+1] !== 4 ){
				return [x,y+1];
			}else if (x < shape.i && x < 11 && board[x+1][y] !== 4 ){
				return [x+1,y];
			}else if (y > shape.j && y > 0 && board[x][y-1] !== 4 ){
				return [x,y-1];
			}
			break;
		case 1: 																				/** 1 + 2 */
			if (y > shape.j && y < 11 && board[x][y+1] != 4 ){
				return [x,y+1];
			}else if (x < shape.i && x > 0 && board[x-1][y] != 4 ){
				return [x-1,y];
			}else if (y < shape.j && y > 0 && board[x][y-1] != 4 ){
				return [x,y-1];
			}else if ( x > shape.i && x < 11 && board[x+1][y] != 4 ) {
				return [x + 1, y];
			}
			break;
		case 2:
			if (x < shape.i && x > 0 && board[x-1][y] != 4 ){
				return [x-1,y];
			}else if ( x > shape.i && x < 11 && board[x+1][y] != 4 ){
				return [x+1,y];
			}else if (y < shape.j && y > 0 && board[x][y-1] != 4 ){
				return [x,y-1];
			}else if (y > shape.j && y < 11 && board[x][y+1] != 4 ){
				return [x,y+1];
			}
			break;
		case 3:
			if (y > shape.j && y > 0 && board[x][y-1] != 4 ){
				return [x,y-1];

			}else if (x < shape.i && x < 11 && board[x+1][y] != 4 ){
				return [x+1,y];
			}else if (y < shape.j && y < 11 && board[x][y+1] != 4 ){
				return [x,y+1];
			}else if ( x > shape.i && x > 0 && board[x-1][y] != 4 ){
				return [x-1,y];
			}
			break;
		case 4:
			if (y < 11 && board[x][y+1] != 4){
			return [x,y+1];
			}
			break;
		case 5:
			if (y < 11 && board[x][y+1] != 4){
				return [x,y+1];
			}
			break;
		case 6:
			if (x < 11 && board[x+1][y] != 4){
				return [x+1,y];
			}
			break;
		case 7:
			if (x < 11 && board[x+1][y] != 4){
				return [x+1,y];
			}
			break;

	}
	monsterPattern++;

	return[x,y]
}