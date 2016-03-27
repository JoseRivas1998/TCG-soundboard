var audio = {
  "tru": new Audio("sounds/tru.mp3")
};

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('stopAll').addEventListener('click', function() {
      for(var prop in audio) {
        audio[prop].pause();
        audio[prop].load();
      }
    });
    
    document.getElementById('tru').addEventListener('click', function() {
      audio["tru"].play();
    });
});
