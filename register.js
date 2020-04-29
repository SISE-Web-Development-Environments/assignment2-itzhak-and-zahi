
var currentUser;
var userArray = [{username: "p",
    password: "p",
    fullName: "Admin",
    email: "p@p.p",
    highestScore: 0}];
var fullNameError = false;
var userNameError = false;
var passwordError = false;
var emailError = false;




$(function(){

    $("#uname").focusout(function () {
        check_username();
    });  
    $("#password").focusout(function () {
        check_password();
    });
    $("#fullName").focusout(function () {
        check_fullName();
    });
    $("#email").focusout(function () {
        check_email();
    });
});




function check_username(){
    var form = document.getElementById("registerForm");
    for (var index = 0; index < userArray.length; index++) {
        var user = userArray[index];
        let test = form.elements[0].value;
        let test1 = $("uname".valueOf());
        let userTest = user.username;
        if(user.username.localeCompare(test) ==0 ){
            $("#unameError").html("that username is already exist ! ");
            $("#unameError").show();
            userNameError = true;
        
        }
    }
    if(!userNameError){
        $("#unameError").hide();
        userNameError = false;
    }
}

function check_password(){
    var passwordLength = $("#password").val().length;
    if(!$("#password").val().match(/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/)) {
        if (passwordLength < 6) {
            $("#passwordError").html("At least 6 characters !!! ");
            $("#passwordError").show();
            passwordError = true;
        } else {
            $("#passwordError").html("Password should contains both letters and numbers");
            $("#passwordError").show();
            passwordError = true;
        }
    }else {
        $("#passwordError").hide();
        passwordError = false;
    }
}


function check_fullName(){
    if(!$("#fullName").val().match(/^[a-zA-Z]/)){
        $("#fullNameError").html("full name must contains letters !");
        $("#fullNameError").show();
        fullNameError = true;
    }else{
        $("#fullNameError").hide();
        fullNameError = false;
    }
}


function check_email(){

    if(!$("#email").val().match(/^[a-z0-9A-Z]+@[a-z0-9A-Z]+.[a-zA-Z]/)){
        $("#emailError").html("not legal email !");
        $("#emailError").show();
        emailError = true;
    }else{
        $("#emailError").hide();
        emailError = false;
    }

}


function saveDetails() {

    check_username();
    check_fullName();
    check_password();
    check_email();
    var form = document.getElementById("registerForm");
    if ( !userNameError && !passwordError && !fullNameError && !emailError){
        var userName = form.elements[0].value;
        var pass = form.elements[1].value;
        var fullName = form.elements[2].value;
        var email = form.elements[3].value;
        arrDetails = {fullName,pass,email};
        localStorage.setItem(userName,arrDetails);
        //changeDisplay(document.getElementById("startGameDiv"),document.getElementById("register"));
    }
}

function checkLoginDetails() {

    var uname = $("#uNameLogin").val;
    var pass = $("#passLogin").val;

    details=localStorage.getItem(uname);
    if(details[1].localeCompare(pass)){
        //changeDisplay(document.getElementById("startGameDiv"),document.getElementById("login"));
    }else{
        window.alert("Wrong username or password! ");
    }

}