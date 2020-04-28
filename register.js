
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
        if(user.username.localeCompare($("#registerForm").username)  ){
            $("#unameError").html("that username is already exist ! ");
            $("#unameError").show();
            userNameError = true;
        
        }
    }
    if(!userNameError){
        $("#unameError").hide();
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
        $("#password").hide();
    }
}


function check_fullName(){
    if(!$("#fullName").val().match(/^[a-zA-Z]/)){
        $("#fullNameError").html("full name must contains letters !");
        $("#fullNameError").show();
        fullNameError = true;
    }else{
        $("#fullNameError").hide();
    }
}


function check_email(){

    if(!$("#email").val().match(/^[a-z0-9A-Z]+@[a-z0-9A-Z]+.[a-zA-Z]/)){
        $("#emailError").html("not legal email !");
        $("#emailError").show();
    }else{
        $("#emailError").hide();
    }

}