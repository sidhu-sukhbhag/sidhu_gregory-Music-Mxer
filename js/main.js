// Get all the elements
const musicAlbums = document.querySelectorAll('#music-albums > div');
const dropZone = document.getElementById('drop-zone');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const stopBtn = document.getElementById('stop-btn');
const resetBtn = document.getElementById('reset-btn');
let currentAudio = null;
let isPlaying = false;

musicAlbums.forEach((album) => {
  album.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', album.id);
  });
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const albumId = e.dataTransfer.getData('text');
  const album = document.getElementById(albumId);
  const audio = album.querySelector('audio');
  currentAudio = audio;
  playAudio();
});

// Add event listeners for playback controls
playBtn.addEventListener('click', playAudio);
pauseBtn.addEventListener('click', pauseAudio);
stopBtn.addEventListener('click', stopAudio);
resetBtn.addEventListener('click', resetAudio);

// Playback control functions
function playAudio() {
  if (currentAudio && !isPlaying) {
    currentAudio.play();
    isPlaying = true;
  }
}

function pauseAudio() {
  if (currentAudio && isPlaying) {
    currentAudio.pause();
    isPlaying = false;
  }
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    isPlaying = false;
  }
}

function resetAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    isPlaying = false;
    currentAudio = null;
  }
}


musicAlbums.forEach((album) => {
  album.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', album.id);
  });
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const albumId = e.dataTransfer.getData('text');
  const album = document.getElementById(albumId);
  const audio = album.querySelector('audio');
  currentAudio = audio;
  playAudio();
  dropZone.appendChild(album); 
  album.classList.add('dropped'); 
});

musicAlbums.forEach((album) => {
  album.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', album.id);
  });
});

dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const albumId = e.dataTransfer.getData('text');
  const album = document.getElementById(albumId);
  const audio = album.querySelector('audio');
  currentAudio = audio;
  playAudio();
  album.style.width = '100%'; // Make the album fit the drop zone
  album.style.height = '100%'; // Make the album fit the drop zone
  album.style.position = 'absolute'; // Make the album position absolute
  album.style.top = '0'; // Position the album at the top of the drop zone
  album.style.left = '0'; // Position the album at the left of the drop zone
  dropZone.appendChild(album); // Add the album to the drop zone
});

resetBtn.addEventListener('click', () => {
  musicAlbums.forEach((album) => {
    album.style.width = ''; // Reset the album width
    album.style.height = ''; // Reset the album height
    album.style.position = ''; // Reset the album position
    album.style.top = ''; // Reset the album top
    album.style.left = ''; // Reset the album left
    album.parentNode.removeChild(album); // Remove the album from the drop zone
    document.getElementById('music-albums').appendChild(album); // Return the album to its initial place
  });
  currentAudio.pause();
  currentAudio.currentTime = 0;
  isPlaying = false;
});
