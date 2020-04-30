
var currentUser;
var userArray = [{username: "p",
    password: "p",
    fullName: "Admin",
    email: "p@p.p",
    highestScore: 0}];
localStorage.setItem("p",userArray);
var fullNameError = false;
var userNameError = false;
var passwordError = false;
var emailError = false;




$(function(){

    //window.alert("$$$$$$$")
   // changeDisplay("welcome")
   //  document.getElementById("welcome").style.display = "block";
   //  document.getElementById("login").style.display = "none";
   //  document.getElementById("register").style.display = "none";
   //  document.getElementById("mainContent").style.display = "none";
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
        }else{
            userNameError = false;
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
        var score = 0;
        //arrDetails = {username,fullName,pass,email};
        localStorage.setItem(userName,[userName, pass, fullName, email, score]);
        changeDisplay(document.getElementById("mainContent"),document.getElementById("welcome"));
        //document.getElementById("currentUser").innerHTML = "Hello, " + uname;
        //document.getElementById("register").style.display="none";
        document.getElementById("registerForm").reset();
    }
   // document.getElementById('register').style.display='none'
}

function checkLoginDetails() {
    var loginForm = document.getElementById("loginForm");
    var uname = loginForm.elements[0].value;
    var pass = loginForm.elements[1].value;

    var details=localStorage.getItem(uname);
    if (details != null){
        if( details[1].localeCompare(pass)){
            //document.getElementById("currentUser").innerHTML = "Hello, " + uname;
            changeDisplay(document.getElementById("mainContent"),document.getElementById("welcome"));
            document.getElementById("loginForm").reset();
            document.getElementById("registerForm").reset();
            document.getElementById("navbar").show();
        }else{
            window.alert("Wrong username or password! ");
        }
    }else{
    window.alert("Wrong username or password! ");


    }

}

$("#loginForm").submit(function() {

    window.alert("login good")
    checkLoginDetails()
    // if (checkLoginDetails()) {
    //     document.getElementById("loginForm").reset();
    //     document.getElementById("registerForm").reset();
    //     document.getElementById('login-link').style.display = 'none';
    //     document.getElementById('register-link').style.display = 'none';
    //     document.getElementById('logout-link').style.display = 'inline-block';
    //
    //     changeDisplay("mainContent");
    //     $("#login-error").hide();
    //     $("nav").show();
    //     return false;
    // } else {
    //     $("#login-error").html("Invalid username or password");
    //     $("#login-error").show();
    //     return false;
    // }
});


function changeDisplay(inDiv) {
    var allDivs = document.getElementsByClassName("allDivs");
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.display="none";
    }

    //outDiv.style.display = "none";
    inDiv.style.display = "block";
    // document.getElementById(outDiv).style.display = "none";
    // document.getElementById(inDiv).style.display = "true";
}


function changeDisplayToLoginOrRegister(inDiv) {
    inDiv.style.display = "block";
}

function cancelbtn(divElement) {
    divElement.style.display = "none";
}