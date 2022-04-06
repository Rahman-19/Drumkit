// Detecting button mousepress

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  function handleClick() {

    // var tom1 = new Audio("sounds/tom-1.mp3"); //new Audio ==> Audio is an object!
    // tom1.play(); //audio.play() ==> here play ia a method!

    var buttonInnerHTML = this.innerHTML; //if innerHTML is not working try textContent!

    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }
}

// detecting keyboard press

document.addEventListener("keydown", function(event) {

  makeSound(event.key);
  buttonAnimation(event.key);
});

// function to create sound

function makeSound(key) {
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3"); //new Audio ==> Audio is an object!
      tom1.play(); //audio.play() ==> here play ia a method!
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3"); //new Audio ==> Audio is an object!
      tom2.play(); //audio.play() ==> here play ia a method!
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3"); //new Audio ==> Audio is an object!
      tom3.play(); //audio.play() ==> here play ia a method!
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3"); //new Audio ==> Audio is an object!
      tom4.play(); //audio.play() ==> here play ia a method!
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3"); //new Audio ==> Audio is an object!
      snare.play(); //audio.play() ==> here play ia a method!
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3"); //new Audio ==> Audio is an object!
      crash.play(); //audio.play() ==> here play ia a method!
      break;

    case "l":
      var kick = new Audio("sounds/kickbass.mp3"); //new Audio ==> Audio is an object!
      kick.play(); //audio.play() ==> here play ia a method!
      break;

    default:
      console.log(key);
    }
}

// function for animation

function buttonAnimation(alpahbets){

  var actievButton = document.querySelector("."+ alpahbets);
  
  actievButton.classList.add("pressed");
  setTimeout(function(){
    actievButton.classList.remove("pressed");
  }, 100);
}