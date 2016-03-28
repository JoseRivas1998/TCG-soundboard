var audio = {
  "tru": new Audio("sounds/tru.mp3"),
  "gimme-dat-pussy": new Audio("sounds/gimme-dat-pussy.mp3"),
  "lemon": new Audio("sounds/lemon.mp3"),
  "normies": new Audio("sounds/normies.mp3"),
  "allahu-akbar": new Audio("sounds/allahu-akbar.mp3"),
  "nobody-gives-a-shit": new Audio("sounds/nobody-gives-a-shit.mp3"),
  "now-thats-edgy-as-fuck": new Audio("sounds/now-thats-edgy-as-fuck.mp3"),
  "fuck-you": new Audio("sounds/fuck-you.mp3"),
  "khaled-woo": new Audio("sounds/khaled-woo.mp3"),
  "bradberry": new Audio("sounds/bradberry.mp3"),
  "you-mad-bro": new Audio("sounds/you-mad-bro.mp3"),
  "prettygood": new Audio("sounds/prettygood.mp3")
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
