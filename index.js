//num of drum selected by using .length and for loop//

var numberOfDrum=document.querySelectorAll(".drum").length;



 for(var i=0;i<numberOfDrum;i++){

   document.querySelectorAll(".drum")[i].addEventListener("click", function(){
var buttonInnerHTML=this.innerHTML;

makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

   });
 }
 //now about instead of click we will use keyboard pressing//

document.addEventListener("keypress", function(){
  makeSound(event.key);
  buttonAnimation(event.key);
});


function makeSound(key){
switch(key){
  case "w":var x = new Audio("sounds/crash.mp3");
        x.play();

  break;
  case "a":var x = new Audio("sounds/kick-bass.mp3");
        x.play();

  break;
  case "s":var x = new Audio("sounds/snare.mp3");
        x.play();

  break;
  case "d":var x = new Audio("sounds/tom-1.mp3");
        x.play();

  break;
  case "j":var x = new Audio("sounds/tom-2.mp3");
        x.play();

  break;
  case "k":var x = new Audio("sounds/tom-3.mp3");
        x.play();
        break;

  case "l": var x= new Audio("sounds/tom-4.mp3");
                  x.play();
                  break;



                default:console.log(buttonInnerHTML);


  }


}

function buttonAnimation(currentKey){

var activeButton=document.querySelector("."+currentKey);

activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);

}
