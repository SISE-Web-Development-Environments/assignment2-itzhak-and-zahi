
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function changeDisplay(inDiv, outDiv) {
    outDiv.style.display = "none";
    inDiv.style.display = "inline";
    // document.getElementById(outDiv).style.display = "none";
    // document.getElementById(inDiv).style.display = "true";
  }


  function changeDisplayToLoginOrRegister(inDiv) {
    inDiv.style.display = "block";
  }


 

 