function tap() {
const body = document.getElementById("body");
body.classList.toggle("dark");
const audio = document.getElementById("myAudio");
const button = document.getElementsByTagName("img")[0];
if (audio.paused) {
audio.play();
//button.innerHTML = "Pozastavit"//
}
else if (audio.play){
audio.pause();
//button.innerHTML = "Přehrávat"//
 }	

}

const audio = document.getElementById('myAudio');
const seekSlider = document.getElementById('seekbar');

audio.addEventListener('timeupdate', () => {
  const value = (100 / audio.duration) * audio.currentTime;
  seekSlider.value = value;
});

seekSlider.addEventListener('input', () => {
  const value = seekSlider.value;
  audio.currentTime = (audio.duration / 100) * value;
});
