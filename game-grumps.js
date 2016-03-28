var audio = {
  "red-plant-purple-plant": new Audio("sounds/game-grumps/red-plant-purple-plant.mp3"),
  "intro": new Audio("sounds/game-grumps/intro.mp3"),
  "poopy-ass-dicks": new Audio("sounds/game-grumps/poopy-ass-dicks.mp3"),
  "funny-joke": new Audio("sounds/game-grumps/funny-joke.mp3"),
  "ahh": new Audio("sounds/game-grumps/ahh.mp3"),
  "what-is-this": new Audio("sounds/game-grumps/what-is-this.mp3")
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
}``
