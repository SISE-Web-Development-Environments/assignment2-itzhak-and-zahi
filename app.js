var context;
var shape = new Object();
var monster1 = new Object();
var monster2 = new Object();
var monster3 = new Object();
var monster4 = new Object();
var monsterArr = new Array();
var cherry = new Object();
var extraLife = new Object();
var rottenApple = new Object();
var newMonster = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var intervalMon;
var monsterPattern = 0;
var cherryInterval;
var cherryInterval2;
var rottenInterval;
var rottenExist = false;
var healthInterval;
var firstTime=true;
var afterFailStart = false;
var intervalSound;
var cherryExist = false;
var newMonsterExist = false;

// function startAfterFail() {
// 	let life = parseInt($('#life').text());
// 	context = canvas.getContext("2d");
// 	life--;
// 	$('#life').text(life);
// 	updateHealthBar(life);
// 	board = new Array();
// 	score = 0;
// 	pac_color = "yellow";
// 	var cnt = 100;
// 	var food_remain = $('#numOfBalls').val();
// 	var five_remain = Math.floor(food_remain * 60/100);
// 	var fifteen_remain = Math.floor(food_remain * 30/100);
// 	var twenty_five_remain = Math.floor(food_remain * 10/100);
// 	if (five_remain + fifteen_remain + twenty_five_remain != food_remain){
// 		twenty_five_remain++;
// 	}
// 	var pacman_remain = 1;
// 	// start_time = new Date();
// 	for (var i = 0; i < 12; i++) {
// 		board[i] = new Array();
// 		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
// 		for (var j = 0; j < 12; j++) {
// 			if (
// 				(i == 3 && j == 3) ||
// 				(i == 3 && j == 4) ||
// 				(i == 3 && j == 5) ||
// 				(i == 6 && j == 1) ||
// 				(i == 6 && j == 2)
// 			) {
// 				board[i][j] = 4;
// 			} else {
// 				var randomNum = Math.random();
// 				if (randomNum <= (1.0 * food_remain) / cnt) {
// 					let randomNumFood = (Math.floor(Math.random() * 4) +1);
// 					if (randomNumFood === 1 && five_remain > 0 ) {
// 						five_remain--;
// 						food_remain--;
// 						board[i][j] = 1;
// 					}else if (randomNumFood === 2 && fifteen_remain > 0 ) {
// 						/** 5 point - 1    15 point - 3      25 point - 5  */
// 						fifteen_remain--;
// 						food_remain--;
// 						board[i][j] = 3;
// 					} else if (randomNumFood === 3 && twenty_five_remain > 0) {
// 						twenty_five_remain--;
// 						food_remain--;
// 						board[i][j] = 5;
// 					}
// 				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
// 					// shape.i = 0;
// 					// shape.j = 5;
// 					// pacman_remain--;
// 					// board[0][5] = 2;
// 				} else {
// 					board[i][j] = 0;
// 				}
// 				cnt--;
// 			}
//
// 		}
// 	}
//
//
//
//
// 	while (food_remain > 0) {
// 		var emptyCell = findRandomEmptyCell(board);
// 		if ( twenty_five_remain > 0){
// 			board[emptyCell[0]][emptyCell[1]] = 5;
// 			twenty_five_remain--;
// 		}else if ( fifteen_remain > 0){
// 			board[emptyCell[0]][emptyCell[1]] = 3;
// 			fifteen_remain--;
// 		}else if ( five_remain > 0){
// 			five_remain--;
// 			board[emptyCell[0]][emptyCell[1]] = 1;
//
// 		}
// 		food_remain--;
// 	}
//
// 	let numOfMonsters = $('#numOfMonsters').val();
// 	switch (numOfMonsters) {
// 		case "1":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1];
// 			break;
// 		case "2":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2];
// 			break;
// 		case "3":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			board[0][11] = 8;
// 			monster3.i = 0;
// 			monster3.j = 11;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monster3.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2,monster3];
// 			break;
// 		case "4":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			board[0][11] = 8;
// 			monster3.i = 0;
// 			monster3.j = 11;
// 			board[11][0] = 9;
// 			monster4.i = 11;
// 			monster4.j = 0;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monster3.WhatWasInTheCellBefore = 0
// 			monster4.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2,monster3,monster4];
// 			break;
// 	}
//
//
// 	var pacmanPos = findRandomEmptyCell(board);
// 	shape.i=pacmanPos[0];
// 	shape.j=pacmanPos[1];
// 	board[shape.i][shape.j]=2;
//
// 	var cherryPos = findRandomEmptyCell(board);
// 	cherry.i = cherryPos[0];
// 	cherry.j = cherryPos[1];
// 	board[cherry.i][cherry.j]=13;
// 	cherry.whatWas =0;
//
// 	var extraLifePos = findRandomEmptyCell(board);
// 	extraLife.i=extraLifePos[0];
// 	extraLife.j=extraLifePos[0];
// 	board[extraLife.i][extraLife.j]=15;
//
//
// 	cherryInterval2 =setInterval(UpdateCherryPosition,350);
// 	healthInterval =setInterval(updateExtraLife,4000);
// 	Draw();
//
// }
function Start() {
	if (firstTime || afterFailStart) {
		afterFailStart = false;
		score = 0;
		/**timeLeft = $('#timeValue').val();*/
		$('#life').text('5');
		let numMon = $('#numOfMonsters').val();
		$('#numOfMonstersInGame').text(numMon);
		let color5 = $('#5PointsColor').val();
		$('#5PointsColorG').val(color5);
		let color15 = $('#15PointsColor').val();
		$('#15PointsColorG').val(color15);
		let color25 = $('#25PointsColor').val();
		$('#25PointsColorG').val(color25);
		updateHealthBar(5);
		var currentTimeLeft = setInterval(function () {
			if (timeLeft <= 0) {
				if (parseInt($('#lblScore').text()) > 100) {
					let audio1 = new Audio('resources/tada.mp3');
					audio1.play();
					window.alert("Winner");
				} else {
					window.alert("Youre better than " + $('#lblScore').text() + " points!!");
				}
				changeDisplay(document.getElementById("settingPage"));
				resetSettings();
				clearInterval(currentTimeLeft);
				window.clearInterval(interval);
				window.clearInterval(rottenInterval);
				clearInterval(cherryInterval);
				window.clearInterval(intervalMon);
				intervalMon.stop();
				cherryInterval.stop();
				interval.stop();
				rottenInterval.stop();

			}
			timeLeft -= 1;
			$('#lblTime').text(timeLeft);
		}, 1000);

		context = canvas.getContext("2d");
		board = new Array();
		pac_color = "yellow";
		var timeLeft = parseInt($('#timeValue').text());

		var cnt = 100;
		var food_remain = $('#numOfBalls').val();
		var five_remain = Math.floor(food_remain * 60 / 100);
		var fifteen_remain = Math.floor(food_remain * 30 / 100);
		var twenty_five_remain = Math.floor(food_remain * 10 / 100);
		if (five_remain + fifteen_remain + twenty_five_remain != food_remain) {
			twenty_five_remain++;
		}

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
						let randomNumFood = (Math.floor(Math.random() * 4) + 1);
						if (randomNumFood === 1 && five_remain > 0) {
							five_remain--;
							food_remain--;
							board[i][j] = 1;
						} else if (randomNumFood === 2 && fifteen_remain > 0) {
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
			if (twenty_five_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 5;
				twenty_five_remain--;
			} else if (fifteen_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 3;
				fifteen_remain--;
			} else if (five_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 1;
				five_remain--;

			}
			food_remain--;
		}

		var pacmanPos = findRandomEmptyCell(board);

		shape.i = pacmanPos[0];
		shape.j = pacmanPos[1];
		board[shape.i][shape.j] = 2;


	} else {
		let life = parseInt($('#life').text());
		life--;
		$('#life').text(life);
		updateHealthBar(life);

		var pacmanPos = findRandomEmptyCell(board);

		shape.i = pacmanPos[0];
		shape.j = pacmanPos[1];
		board[shape.i][shape.j] = 2;

	}

	var pacman_remain = 1;
	// start_time = new Date();


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
			monsterArr = [monster1, monster2];
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
			monsterArr = [monster1, monster2, monster3];
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
			monsterArr = [monster1, monster2, monster3, monster4];
			break;
	}

	if (!cherryExist) {
		var cherryPos = findRandomEmptyCell(board);
		cherry.i = cherryPos[0];
		cherry.j = cherryPos[1];
		board[cherry.i][cherry.j] = 13;
		cherry.whatWas = 0;
		cherryExist = true;
	}

	if (!rottenExist) {
		var rotPos = findRandomEmptyCell(board);
		rottenApple.i = rotPos[0];
		rottenApple.j = rotPos[1];
		board[rottenApple.i][rottenApple.j] = 16;
		rottenApple.whatWas = 0;
		rottenExist = true;
	}

	var extraLifePos = findRandomEmptyCell(board);
	extraLife.i=extraLifePos[0];
	extraLife.j=extraLifePos[0];
	board[extraLife.i][extraLife.j]=15;

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
	healthInterval =setInterval(updateExtraLife,4000);
	cherryInterval = setInterval(UpdateCherryPosition,350);
	interval = setInterval(UpdatePosition, 130);
	intervalMon = setInterval(UpdatePositionForMonster, 270);
	rottenInterval = setInterval(UpdateApplePosition, 350);
	playSong();
	intervalSound = setInterval(playSong, 5000);
	firstTime=false;
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
	//lblTime.value = time_elapsed;
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
			}else if (board[i][j] === 13) {
				let img = new Image(10, 10);
				img.src = "resources/cherry.png"
				context.drawImage(img, i * 60, j * 60);
			}else if (board[i][j] === 16){
				let img4 = new Image(10,10);
				img4.src = "resources/rotten.png"
				context.drawImage(img4, i*60, j*60);
			}else if (board[i][j] === 15){
				let img = new Image(10,10);
				img.src = "resources/life.png"
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

	let changed = false;
	if(board[shape.i][shape.j-1]===15){
		let life = parseInt($('#life').text());
		if(life<5) {
			life++;
		}
		$('#life').text(life);
		updateHealthBar(life);
		window.clearInterval(healthInterval);
	}
	var x = GetKeyPressed();
	if (x == 1) {

		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			/****MAYBE????? COS IMA SHAL ZA
			if(board[shape.i][shape.j-1] === 3){
				score = score + 15;
			}else if(board[shape.i][shape.j-1] === 5){
				score = score + 25;
			}else if (board[shape.i][shape.j-1] === 1) {
				score = score + 5;
			}else if(board[shape.i][shape.j-1]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
			 */
			board[shape.i][shape.j] = 0;
			shape.j--;
		}
		changed = true;
	}
	if (x == 2) {

		if (shape.j < 11 && board[shape.i][shape.j + 1] != 4) {
			/****
			if(board[shape.i][shape.j+1] === 3){
				score = score + 15;
			}else if(board[shape.i][shape.j+1] === 5){
				score = score + 25;
			}else if (board[shape.i][shape.j+1] === 1) {
				score = score + 5;
			}else if(board[shape.i][shape.j+1]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
			 */
			board[shape.i][shape.j] = 0;
			shape.j++;
		}
		changed = true;
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			/****
			if(board[shape.i-1][shape.j] === 3){
				score = score + 15;
			}else if(board[shape.i-1][shape.j] === 5){
				score = score + 25;
			}else if (board[shape.i-1][shape.j] === 1) {
				score = score + 5;
			}else if(board[shape.i-1][shape.j]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
			 */
			board[shape.i][shape.j] = 0;
			shape.i--;
		}
		changed = true;
	}
	if (x == 4) {
		if (shape.i < 11 && board[shape.i + 1][shape.j] != 4) {
			/****
			if(board[shape.i+1][shape.j] === 3){
				score = score + 15;
			}else if(board[shape.i+1][shape.j] === 5){
				score = score + 25;
			}else if (board[shape.i+1][shape.j] === 1) {
				score = score + 5;
			}else if(board[shape.i+1][shape.j]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
			 */
			board[shape.i][shape.j] = 0;
			shape.i++;
		}
		changed = true;
	}
	if (changed){
		let sa = 8;
	}

	if(board[shape.i][shape.j] == 3){
		score = score + 15;
	}else if(board[shape.i][shape.j] == 5){
		score = score + 25;
	}else if (board[shape.i][shape.j] == 1) {
		score = score + 5;
	}
	let b = score.toString();
	$('#lblScore').text(b);

	if(board[shape.i][shape.j]===13) {
		let audio = new Audio('resources/eat.wav');
		audio.play();
		//alert("FAS");
		board[shape.i][shape.j]=0;
		score = score + 50;
		window.clearInterval(cherryInterval);
		window.clearInterval(cherryInterval2);
		//cherryInterval.stop();
	}

	if(board[shape.i][shape.j]===16) {
		let audio = new Audio('resources/apple.wav');
		audio.play();
		board[11][7] = 7;
		newMonster.i = 11;
		newMonster.j = 7;
		newMonster.WhatWasInTheCellBefore = 0
		monsterArr.push(newMonster);
		board[shape.i][shape.j]=0;
		newMonsterExist = true;
		window.clearInterval(rottenInterval);
	}

	switch (x) {
		case 1:
			board[shape.i][shape.j] = 11;
			break;
		case 2:
			board[shape.i][shape.j] = 12;
			break;
		case 3:
			board[shape.i][shape.j] = 10;
			break;
		case 4:
			board[shape.i][shape.j] = 2;
			break;
	}
	//board[i][j] = 0;


	let life = parseInt($('#life').text());
	if (life !== 0) {

		Draw();
	}else{
		window.clearInterval(interval);
		window.clearInterval(intervalMon);
		clearInterval(cherryInterval);
		clearInterval(cherryInterval2);
		clearInterval(rottenInterval);

	}

}

window.addEventListener("keydown",function (e) {
	if ([32,37,38,39,40].indexOf(e.keyCode) > -1 ){
		e.preventDefault();
	}
},false);


function updateExtraLife() {
	board[extraLife.i][extraLife.j]=0;
	var extraLifePos = findRandomEmptyCell(board);
	extraLife.i=extraLifePos[0];

	extraLife.j=extraLifePos[0];
	board[extraLife.i][extraLife.j]=15;

}
function updateHealthBar(life) {
	switch (life) {
		case 0: $('#healthBar').attr("src","resources/health0.png")
			break;
		case 1: $('#healthBar').attr("src","resources/health1.png")
			break;
		case 2: $('#healthBar').attr("src","resources/health2.png")
			break;
		case 3: $('#healthBar').attr("src","resources/health3.png")
			break;
		case 4: $('#healthBar').attr("src","resources/health4.png")
			break;
		case 5: $('#healthBar').attr("src","resources/health5.png")
			break;
	}

}

function UpdateCherryPosition() {
	var random = Math.random();
	let cherryWhatWas = cherry.whatWas;
	if(random>0&&random<0.25){
		if(cherry.i<11&&board[cherry.i+1][cherry.j]!==4){
			if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherryWhatWas;
			}
				cherry.whatWas = board[cherry.i + 1][cherry.j];
				board[cherry.i + 1][cherry.j] = 13;
				cherry.i=cherry.i+1;
		}
	}
	else if(random>0.25&&random<0.5){
		if(cherry.i>0&&board[cherry.i-1][cherry.j]!==4){
			if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
				board[cherry.i][cherry.j] = 0
			}else{
				board[cherry.i][cherry.j] = cherryWhatWas;
			}
			cherry.whatWas = board[cherry.i-1][cherry.j];
			board[cherry.i-1][cherry.j]=13;
			cherry.i=cherry.i-1;
		}
	}else if(random>0.5&&random<0.75){
		if(cherry.j<11&&board[cherry.i][cherry.j+1]!==4){
			if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherryWhatWas;
			}
			cherry.whatWas = board[cherry.i][cherry.j+1];
			board[cherry.i][cherry.j+1]=13;
			cherry.j=cherry.j+1;
		}
	}else if(random>0.75){
		if(cherry.j>0&&board[cherry.i][cherry.j-1]!==4){
			if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
				board[cherry.i][cherry.j] = 0;
			}else{
				board[cherry.i][cherry.j] = cherryWhatWas;
			}
			cherry.whatWas = board[cherry.i][cherry.j-1];
			board[cherry.i][cherry.j-1]=13;
			cherry.j=cherry.j-1;
		}
	}
	if(board[shape.i][shape.j]===13) {
		//alert("FAS");
		board[shape.i][shape.j]=0;
		score = score + 50;
		window.clearInterval(cherryInterval);
		window.clearInterval(cherryInterval2);
		//cherryInterval.stop();
	}
	Draw();
}
function UpdatePositionForMonster() {

	for (let i = 0; i < monsterArr.length; i++) {
		let placeToGo = findWhereToGo(monsterArr[i].i,monsterArr[i].j);
		var whatWas = monsterArr[i].WhatWasInTheCellBefore;

		monsterArr[i].WhatWasInTheCellBefore = board[placeToGo[0]][placeToGo[1]];
		if(!(placeToGo[0] === monsterArr[i].i && placeToGo[1] === monsterArr[i].j)){
			board[placeToGo[0]][placeToGo[1]]=6+i;
			if((whatWas === 6 || whatWas === 7 || whatWas === 8 || whatWas === 9 || whatWas===13 || whatWas === 16 ) ){
				board[monsterArr[i].i][monsterArr[i].j]=0;
			}else{
				board[monsterArr[i].i][monsterArr[i].j]=whatWas;
			}
			monsterArr[i].i = placeToGo[0];
			monsterArr[i].j = placeToGo[1];

		}
		Draw();
		 if (monsterArr[i].i === shape.i && monsterArr[i].j === shape.j){
		 	board[shape.i][shape.j] = 0;
			 let audio = new Audio('resources/Death.mp3');
			 audio.play();
		 	 score = score - 10;
			 let b = score.toString();
			 $('#lblScore').text(b);
			 window.clearInterval(intervalSound);

		 	let life = parseInt($('#life').text());
		 	if (life === 1){
				// window.clearInterval(interval);
				if(parseInt($('#lblScore').text())>100){
					let audio1 = new Audio('resources/tada.mp3');
					audio1.play();
					window.alert("Winner");
				}else{
					window.alert("Youre better than " + $('#lblScore').text() + " points!!");
				}
				changeDisplay(document.getElementById("settingPage"));
				resetSettings();
				window.clearInterval(interval);
				clearInterval(cherryInterval);
				let bx = 0;
				let by = bx.toString();
				$('#lblScore').text(by);
				window.clearInterval(intervalMon);
				window.clearInterval(healthInterval);
				window.clearInterval(intervalSound);
				window.clearInterval(rottenInterval);
				afterFailStart = true;

			}else if(life === 0){
				//var context
				firstTime=true;
				clearInterval(cherryInterval);
				window.clearInterval(interval);
				window.clearInterval(intervalMon);
				window.clearInterval(healthInterval);
				window.clearInterval(intervalSound);
				window.clearInterval(rottenInterval);
			}
		 	else{
		 		if(newMonsterExist){
		 			newMonsterExist = false;
		 			board[newMonster.i][newMonster.j]=0;
				}
				clearInterval(cherryInterval);
				window.clearInterval(interval);
				window.clearInterval(intervalMon);
				window.clearInterval(healthInterval);
				window.clearInterval(rottenInterval);
				window.clearInterval(intervalSound);
		 		// life--;
		 		// $('#life').text(life);
				Start();
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


function stopp(){
	alert(hihi);
	clearInterval(intervalMon);
	clearInterval(interval);
	clearInterval(cherryInterval);
	intervalMon.stop();
	interval.stop();
	cherryInterval.stop();
}

function playSong() {
	let audio = new Audio('resources/begin.wav');
	audio.play();

}

function UpdateApplePosition() {
	var random = Math.random();
	let rottenWhatWas = rottenApple.whatWas;
	if(random>0&&random<0.25){
		if(rottenApple.i<11&&board[rottenApple.i+1][rottenApple.j]!==4){
			if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
				board[rottenApple.i][rottenApple.j] = 0;
			}else{
				board[rottenApple.i][rottenApple.j] = rottenWhatWas;
			}
			rottenApple.whatWas = board[rottenApple.i + 1][rottenApple.j];
			board[rottenApple.i + 1][rottenApple.j] = 16;
			rottenApple.i=rottenApple.i+1;
		}
	}
	else if(random>0.25&&random<0.5){
		if(rottenApple.i>0&&board[rottenApple.i-1][rottenApple.j]!==4){
			if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
				board[rottenApple.i][rottenApple.j] = 0
			}else{
				board[rottenApple.i][rottenApple.j] = rottenWhatWas;
			}
			rottenApple.whatWas = board[rottenApple.i-1][rottenApple.j];
			board[rottenApple.i-1][rottenApple.j]=16;
			rottenApple.i=rottenApple.i-1;
		}
	}else if(random>0.5&&random<0.75){
		if(rottenApple.j<11&&board[rottenApple.i][rottenApple.j+1]!==4){
			if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
				board[rottenApple.i][rottenApple.j] = 0;
			}else{
				board[rottenApple.i][rottenApple.j] = rottenWhatWas;
			}
			rottenApple.whatWas = board[rottenApple.i][rottenApple.j+1];
			board[rottenApple.i][rottenApple.j+1]=16;
			rottenApple.j=rottenApple.j+1;
		}
	}else if(random>0.75){
		if(rottenApple.j>0&&board[rottenApple.i][rottenApple.j-1]!==4){
			if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
				board[rottenApple.i][rottenApple.j] = 0;
			}else{
				board[rottenApple.i][rottenApple.j] = rottenWhatWas;
			}
			rottenApple.whatWas = board[rottenApple.i][rottenApple.j-1];
			board[rottenApple.i][rottenApple.j-1]=16;
			rottenApple.j=rottenApple.j-1;
		}
	}

	Draw();
}