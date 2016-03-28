var audio = {
  "red-plant-purple-plant": new Audio("sounds/game-grumps/red-plant-purple-plant.mp3"),
  "intro": new Audio("sounds/game-grumps/intro.mp3"),
  "poopy-ass-dicks": new Audio("sounds/game-grumps/poopy-ass-dicks.mp3"),
  "funny-joke": new Audio("sounds/game-grumps/funny-joke.mp3"),
  "ahh": new Audio("sounds/game-grumps/ahh.mp3"),
  "what-is-this": new Audio("sounds/game-grumps/what-is-this.mp3")
};

function playSound(prop) {
  audio[prop].pause();
  audio[prop].load();
  audio[prop].play();
}

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('stopAll').addEventListener('click', function() {
      for(var prop in audio) {
        audio[prop].pause();
        audio[prop].load();
      }
    });

    document.getElementById('red-plant-purple-plant').addEventListener('click', function() {
      playSound("red-plant-purple-plant");
    });

    document.getElementById('intro').addEventListener('click', function() {
      playSound("intro");
    });

    document.getElementById('poopy-ass-dicks').addEventListener('click', function() {
      playSound("poopy-ass-dicks");
    });

    document.getElementById('funny-joke').addEventListener('click', function() {
      playSound("funny-joke");
    });

    document.getElementById('ahh').addEventListener('click', function() {
      playSound("ahh");
    });

    document.getElementById('what-is-this').addEventListener('click', function() {
      playSound("what-is-this");
    });

});
