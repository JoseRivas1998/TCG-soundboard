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

    document.getElementById('tru').addEventListener('click', function() {
      playSound("tru");
    });

    document.getElementById('gimme-dat-pussy').addEventListener('click', function() {
      playSound("gimme-dat-pussy");
    });

    document.getElementById('lemon').addEventListener('click', function() {
      playSound("lemon");
    });

    document.getElementById('normies').addEventListener('click', function() {
      playSound("normies");
    });

    document.getElementById('allahu-akbar').addEventListener('click', function() {
      playSound("allahu-akbar");
    });

    document.getElementById('nobody-gives-a-shit').addEventListener('click', function() {
      playSound("nobody-gives-a-shit");
    });

    document.getElementById('now-thats-edgy-as-fuck').addEventListener('click', function() {
      playSound("now-thats-edgy-as-fuck");
    });

    document.getElementById('fuck-you').addEventListener('click', function() {
      playSound("fuck-you");
    });

    document.getElementById('khaled-woo').addEventListener('click', function() {
      playSound("khaled-woo");
    });

    document.getElementById('bradberry').addEventListener('click', function() {
      playSound("bradberry");
    });

    document.getElementById('you-mad-bro').addEventListener('click', function() {
      playSound("you-mad-bro");
    });

    document.getElementById('prettygood').addEventListener('click', function() {
      playSound("prettygood");
    });

});
