var upKey=38;
var downKey=40;
var leftKey=37;
var rightKey=39;

function updateKey(event, moving) {
    switch (moving) {
        case "up":
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                upKey = event.keyCode;
                if(ImageExist("resources/keys/" + event.keyCode + ".png")) {
                    $('#upKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                    $('#inGameKeyUp').attr("src", "resources/keys/" + event.keyCode + ".png");
                }else {
                    $('#upKeyImg').attr("src", "resources/keys/0.png");
                    $('#inGameKeyUp').attr("src", "resources/keys/0.png");
                }
            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "down": downKey = event.keyCode;
            if(!(event.keyCode===upKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                if(ImageExist("resources/keys/" + event.keyCode + ".png")) {
                     $('#downKeyImg').attr("src","resources/keys/"+event.keyCode+".png");
                    $('#inGameKeyDown').attr("src", "resources/keys/" + event.keyCode + ".png");
                }else {
                    $('#downKeyImg').attr("src", "resources/keys/0.png");
                    $('#inGameKeyDown').attr("src", "resources/keys/0.png");
                }

            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "left": leftKey = event.keyCode;
            if(!(event.keyCode===downKey ||event.keyCode===upKey||event.keyCode===rightKey)) {
                if(ImageExist("resources/keys/" + event.keyCode + ".png")) {
                $('#leftKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                $('#inGameKeyLeft').attr("src", "resources/keys/" + event.keyCode + ".png");
                }else {
                    $('#leftKeyImg').attr("src", "resources/keys/0.png");
                    $('#inGameKeyLeft').attr("src", "resources/keys/0.png");
                }

            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "right": rightKey =event.keyCode;
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===upKey)) {
                if(ImageExist("resources/keys/" + event.keyCode + ".png")) {
                    $('#rightKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                    $('#inGameKeyRight').attr("src", "resources/keys/" + event.keyCode + ".png");
                }
                else {
                        $('#rightKeyImg').attr("src", "resources/keys/0.png");
                        $('#inGameKeyRight').attr("src", "resources/keys/0.png");
                    }
            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
    }
}

function ImageExist(url)
{
    var img = new Image();
    img.src = url;
    return img.height != 0;
}

function GetKeyPressed() {
    if (keysDown[upKey]) {
        return 1;
    }
    if (keysDown[downKey]) {
        return 2;
    }
    if (keysDown[leftKey]) {
        return 3;
    }
    if (keysDown[rightKey]) {
        return 4;
    }
}

