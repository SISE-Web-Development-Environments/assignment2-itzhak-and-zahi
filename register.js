
var currentUser;
var userArray = [{username: "p",
    password: "p",
    firstName: "Admin",
    lastName: "",
    email: "p@p.p",
    highestScore: 0}];
var firstNameError = false;
var userNameError = false;
var lastNameError = false;
var passwordError = false;
var emailError = false;




$(function(){

    $("#uname").focusout(function () {
        check_username();
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
}