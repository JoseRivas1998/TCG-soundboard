var audio = {
  "red-plant-purple-plant": new Audio("sounds/game-grumps/red-plant-purple-plant.mp3"),
  "intro": new Audio("sounds/game-grumps/intro.mp3"),
  "poopy-ass-dicks": new Audio("sounds/game-grumps/poopy-ass-dicks.mp3"),
  "funny-joke": new Audio("sounds/game-grumps/funny-joke.mp3"),
  "ahh": new Audio("sounds/game-grumps/ahh.mp3"),
  "what-is-this": new Audio("sounds/game-grumps/what-is-this.mp3")
};

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('stopAll').addEventListener('click', function() {
      for(var prop in audio) {
        audio[prop].pause();
        audio[prop].load();
      }
    });

    document.getElementById('red-plant-purple-plant').addEventListener('click', function() {
      audio["red-plant-purple-plant"].pause();
      audio["red-plant-purple-plant"].load();
      audio["red-plant-purple-plant"].play();
    });

    document.getElementById('intro').addEventListener('click', function() {
      audio["intro"].pause();
      audio["intro"].load();
      audio["intro"].play();
    });

    document.getElementById('poopy-ass-dicks').addEventListener('click', function() {
      audio["poopy-ass-dicks"].pause();
      audio["poopy-ass-dicks"].load();
      audio["poopy-ass-dicks"].play();
    });

    document.getElementById('funny-joke').addEventListener('click', function() {
      audio["funny-joke"].pause();
      audio["funny-joke"].load();
      audio["funny-joke"].play();
    });

    document.getElementById('ahh').addEventListener('click', function() {
      audio["ahh"].pause();
      audio["ahh"].load();
      audio["ahh"].play();
    });

    document.getElementById('what-is-this').addEventListener('click', function() {
      audio["what-is-this"].pause();
      audio["what-is-this"].load();
      audio["what-is-this"].play();
    });

});
