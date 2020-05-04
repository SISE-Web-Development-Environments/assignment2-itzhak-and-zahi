var upKey;
var downKey;
var leftKey;
var rightKey;


function updateTextInputMonsters(val) {
    document.getElementById('monstersInput').value=val;
    document.getElementById('inGameMonstersInput').value=val;
}

function updateTextInputBalls(val) {
    document.getElementById('ballsInput').value=val;
    document.getElementById('inGameBallsInput').value=val;
}
function updateTextInputTime(val) {
    document.getElementById('timeInput').value=val;
    document.getElementById('inGameTimeInput').value=val;
}

function updateKey(event, moving) {
    switch (moving) {
        case "up": upKey = event.which || event.keyCode;
        break;
        case "down": downKey = event.which || event.keyCode;
        break;
        case "left": leftKey = event.which || event.keyCode;
        break;
        case "right": rightKey = event.which || event.keyCode;
        break;
    }

}

function fillFormRandomly() {
    // $('upKey').reset();
    // $('downKey').reset();
    // $('leftKey').reset();
    // $('rightKey').reset();
    var x =Math.floor(Math.random()*40)+50;
    var y =Math.floor(Math.random()*4)+1;
    var z =Math.floor(Math.random()*(10000-60+1))+60;
    $(document).ready(function(){
            $('#numOfBalls').val(x);
            $('#ballsInput').val(x);
            updateTextInputBalls(x);
            $('#monstersInput').val(y);
            $('#numOfMonsters').val(y);
            updateTextInputMonsters(y)
            $('#gameTime').val(z);
            $('#timeInput').val(z);
            updateTextInputTime(z);
            $('#5PointsColor').val(getRandomColor());
            $('#15PointsColor').val(getRandomColor());
            $('#25PointsColor').val(getRandomColor());

    });
    //$('#ballsInput').value = x ;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function startGame() {
   // document.getElementById('gameSettings').reset();
    changeDisplay(document.getElementById("mainContent"));
}