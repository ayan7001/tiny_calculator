var theInput = [];
var allButtons = document.querySelectorAll(".btn");
allButtons.forEach(function (allButtons) {
  allButtons.addEventListener("click", function () {
    console.log(this.classList[1]);
    var animateTheButton = this.classList[1];

    var activeButton = this.innerHTML;
    theInput.push(activeButton);
    document.querySelector(".input").innerHTML = theInput.join("");
    animationFunction(animateTheButton);
  });
});

document.querySelector(".clear").addEventListener("click", function () {
  theInput = [];
  document.querySelector(".input").innerHTML = "";
  document.querySelector(".output").innerHTML = "";
  var animateTheButton = "clear";
  animationFunction(animateTheButton);
});
document.querySelector(".equal").addEventListener("click", evaluate);
function evaluate() {
  document.querySelector(".input").innerHTML += "=";
  document.querySelector(".output").innerHTML = eval(theInput.join(""));
  theInput = [];
  var animateTheButton = "equal";
  animationFunction(animateTheButton);
}
function animationFunction(animateTheButton) {
  var buttonToAnimate = document.querySelector("." + animateTheButton);
   buttonToAnimate.classList.add("pressed");
  setTimeout(removeTheAnimation,200,animateTheButton);
}
function removeTheAnimation(animateTheButton) {
  var buttonToAnimate = document.querySelector("." + animateTheButton);
  buttonToAnimate.classList.remove("pressed");
}
