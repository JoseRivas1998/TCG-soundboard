var audio = {
  "dress": new Audio("sounds/pumkin/clothes/dress.mp3"),
  "gloves": new Audio("sounds/pumkin/clothes/gloves.mp3"),
  "jacket": new Audio("sounds/pumkin/clothes/jacket.mp3"),
  "pants": new Audio("sounds/pumkin/clothes/pants.mp3"),
  "perfect-for-drying-these-clothes": new Audio("sounds/pumkin/clothes/perfect-for-drying-these-clothes.mp3"),
  "sandles": new Audio("sounds/pumkin/clothes/sandles.mp3"),
  "scarf": new Audio("sounds/pumkin/clothes/scarf.mp3"),
  "shoes": new Audio("sounds/pumkin/clothes/shoes.mp3"),
  "shorts": new Audio("sounds/pumkin/clothes/shorts.mp3"),
  "skirt": new Audio("sounds/pumkin/clothes/skirt.mp3"),
  "sneakers": new Audio("sounds/pumkin/clothes/sneakers.mp3"),
  "socks": new Audio("sounds/pumkin/clothes/socks.mp3"),
  "sweater": new Audio("sounds/pumkin/clothes/sweater.mp3"),
  "t-shirt": new Audio("sounds/pumkin/clothes/t-shirt.mp3"),
  "what-a-windy-day": new Audio("sounds/pumkin/clothes/what-a-windy-day.mp3")
};

document.addEventListener('DOMContentLoaded', function() {

    for(var prop in audio) {
      addSound(prop);
    }

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
