var audio = {
  "bread": new Audio("sounds/pumkin/food/bread.mp3"),
  "butter": new Audio("sounds/pumkin/food/butter.mp3"),
  "cheese": new Audio("sounds/pumkin/food/cheese.mp3"),
  "chicken": new Audio("sounds/pumkin/food/chicken.mp3"),
  "coffee": new Audio("sounds/pumkin/food/coffee.mp3"),
  "eggs": new Audio("sounds/pumkin/food/eggs.mp3"),
  "fish": new Audio("sounds/pumkin/food/fish.mp3"),
  "french-fries": new Audio("sounds/pumkin/food/french-fries.mp3"),
  "hamburger": new Audio("sounds/pumkin/food/hamburger.mp3"),
  "hot-dog": new Audio("sounds/pumkin/food/hot-dog.mp3"),
  "jam": new Audio("sounds/pumkin/food/jam.mp3"),
  "juice": new Audio("sounds/pumkin/food/juice.mp3"),
  "noodles": new Audio("sounds/pumkin/food/noodles.mp3"),
  "pepper": new Audio("sounds/pumkin/food/pepper.mp3"),
  "pizza": new Audio("sounds/pumkin/food/pizza.mp3"),
  "rice": new Audio("sounds/pumkin/food/rice.mp3"),
  "salt": new Audio("sounds/pumkin/food/salt.mp3"),
  "sandwich": new Audio("sounds/pumkin/food/sandwich.mp3"),
  "soda": new Audio("sounds/pumkin/food/soda.mp3"),
  "water": new Audio("sounds/pumkin/food/water.mp3")
};

document.addEventListener('DOMContentLoaded', function() {

    addSound("bread");
    addSound("butter");
    addSound("cheese");
    addSound("chicken");
    addSound("coffee");
    addSound("eggs");
    addSound("fish");
    addSound("french-fries");
    addSound("hamburger");
    addSound("hot-dog");
    addSound("jam");
    addSound("juice");
    addSound("noodles");
    addSound("pepper");
    addSound("pizza");
    addSound("rice");
    addSound("salt");
    addSound("sandwich");
    addSound("soda");
    addSound("water");

    document.getElementById('stopAll').addEventListener('click', function() {
      for(var prop in audio) {
        stopSound(prop);
      }
    });

    document.getElementById('playAll').addEventListener('click', function() {
      for(var prop in audio) {
        playSound(prop);
      }
    });

});

function playSound(prop) {
  stopSound(prop);
  audio[prop].play();
}

function addSound(prop) {
  document.getElementById(prop).addEventListener('click', function() {
    playSound(prop);
  });
}

function stopSound(prop) {
  audio[prop].pause();
  audio[prop].load();
}
