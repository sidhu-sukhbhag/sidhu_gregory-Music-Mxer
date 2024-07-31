
const likeAudio = document.getElementById('likeAudio');
const dislikeAudio = document.getElementById('dislikeAudio');


const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
playBtn.addEventListener('click', playLikeAudio);
pauseBtn.addEventListener('click', pauseAudio);


function playLikeAudio() {
  likeAudio.play();
}


function playDislikeAudio() {
  dislikeAudio.play();
}


function pauseAudio() {
  likeAudio.pause();
  dislikeAudio.pause();
}



document.getElementById('like-btn').addEventListener('click', playLikeAudio);
document.getElementById('dislike-btn').addEventListener('click', playDislikeAudio);


const addBtn = document.getElementById('add-btn');


addBtn.addEventListener('click', () => {

  const audio = new Audio('track 2.mp3');
  audio.play();
});


stopButton.addEventListener('click', () => {

  if (!likeAudio.paused) {
      likeAudio.pause();
      likeAudio.currentTime = 0;
  }

  if (!dislikeAudio.paused) {
      dislikeAudio.pause();
      dislikeAudio.currentTime = 0;
  }

  console.log('Stop button clicked. All audio has been stopped and reset.');
});
