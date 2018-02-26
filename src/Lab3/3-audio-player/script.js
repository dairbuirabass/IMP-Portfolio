var audio;

function docIsLoaded() {
  audio = new Audio("eco-misty.mp3");
  var slider = document.getElementById("volSlider");

  slider.oninput = function() {
      audio.volume = this.value / 100;
  }
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
