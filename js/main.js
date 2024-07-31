console .log("Javascript file is linked")


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const soundButton = document.getElementById('sound-btn');
    const minusButton = document.getElementById('minus-btn');
    const resetButton = document.getElementById('reset-btn');
    const playButton = document.getElementById('play-btn');
    const pauseButton = document.getElementById('pause-btn');
    const stopButton = document.getElementById('stop-btn');

    const likeAudio = document.getElementById('likeAudio');
    const dislikeAudio = document.getElementById('dislikeAudio');

    const likeButton = document.getElementById('like-btn');
    const dislikeButton = document.getElementById('dislike-btn');

    likeButton.addEventListener('click', () => {
        dislikeAudio.pause();
        dislikeAudio.currentTime = 0;
        likeAudio.play();

         likeButton.classList.add('animate');

         likeButton.addEventListener('animationend', () => {
             likeButton.classList.remove('animate');
         }, { once: true });
    });

    dislikeButton.addEventListener('click', () => {
        likeAudio.pause();
        likeAudio.currentTime = 0;
        dislikeAudio.play();

         dislikeButton.classList.add('animate');

         dislikeButton.addEventListener('animationend', () => {
             dislikeButton.classList.remove('animate');
         }, { once: true });
    });

    playButton.addEventListener('click', () => {
        if (likeAudio.paused && dislikeAudio.paused) {
            likeAudio.play(); 
        } else if (!likeAudio.paused) {
            likeAudio.play();
        } else if (!dislikeAudio.paused) {
            dislikeAudio.play();
        }
    });

    pauseButton.addEventListener('click', () => {
        likeAudio.pause();
        dislikeAudio.pause();
    });

    stopButton.addEventListener('click', () => {
        likeAudio.pause();
        likeAudio.currentTime = 0;
        dislikeAudio.pause();
        dislikeAudio.currentTime = 0;
    });

    addButton.addEventListener('click', () => {
        console.log('Add button clicked.');
    });

    soundButton.addEventListener('click', () => {
        console.log('Sound button clicked.');
    });

    minusButton.addEventListener('click', () => {
        console.log('Minus button clicked.');
    });

    resetButton.addEventListener('click', () => {
        likeAudio.pause();
        likeAudio.currentTime = 0;
        dislikeAudio.pause();
        dislikeAudio.currentTime = 0;
        console.log('Reset button clicked.');
    });
});

