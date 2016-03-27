var audio = {
  "tru": new Audio("sounds/tru.mp3"),
  "gimme-dat-pussy": new Audio("sounds/gimme-dat-pussy.mp3"),
  "lemon": new Audio("sounds/lemon.mp3"),
  "normies": new Audio("sounds/normies.mp3"),
  "allahu-akbar": new Audio("sounds/allahu-akbar.mp3"),
  "nobody-gives-a-shit": new Audio("sounds/nobody-gives-a-shit.mp3"),
  "now-thats-edgy-as-fuck": new Audio("sounds/now-thats-edgy-as-fuck.mp3"),
  "fuck-you": new Audio("sounds/fuck-you.mp3")
};

document.addEventListener('DOMContentLoaded', function() {

    document.getElementById('stopAll').addEventListener('click', function() {
      for(var prop in audio) {
        audio[prop].pause();
        audio[prop].load();
      }
    });

    document.getElementById('tru').addEventListener('click', function() {
      audio["tru"].pause();
      audio["tru"].load();
      audio["tru"].play();
    });

    document.getElementById('gimme-dat-pussy').addEventListener('click', function() {
      audio["gimme-dat-pussy"].pause();
      audio["gimme-dat-pussy"].load();
      audio["gimme-dat-pussy"].play();
    });

    document.getElementById('lemon').addEventListener('click', function() {
      audio["lemon"].pause();
      audio["lemon"].load();
      audio["lemon"].play();
    });

    document.getElementById('normies').addEventListener('click', function() {
      audio["normies"].pause();
      audio["normies"].load();
      audio["normies"].play();
    });

    document.getElementById('allahu-akbar').addEventListener('click', function() {
      audio["allahu-akbar"].pause();
      audio["allahu-akbar"].load();
      audio["allahu-akbar"].play();
    });

    document.getElementById('nobody-gives-a-shit').addEventListener('click', function() {
      audio["nobody-gives-a-shit"].pause();
      audio["nobody-gives-a-shit"].load();
      audio["nobody-gives-a-shit"].play();
    });

    document.getElementById('now-thats-edgy-as-fuck').addEventListener('click', function() {
      audio["now-thats-edgy-as-fuck"].pause();
      audio["now-thats-edgy-as-fuck"].load();
      audio["now-thats-edgy-as-fuck"].play();
    });

    document.getElementById('fuck-you').addEventListener('click', function() {
      audio["fuck-you"].pause();
      audio["fuck-you"].load();
      audio["fuck-you"].play();
    });

});
