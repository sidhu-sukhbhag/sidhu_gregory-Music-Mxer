// Select elements
const musicAlbums = document.querySelectorAll('#music-albums div');
const dropZone = document.getElementById('drop-zone');
const resetBtn = document.getElementById('reset-btn');

// Store original positions
const originalPositions = {};

musicAlbums.forEach(album => {
    // Store original positions
    originalPositions[album.id] = album.getBoundingClientRect();

    // Make the elements draggable
    album.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', album.id);
    });

    album.addEventListener('dragend', () => {
        // If the item was dropped in the drop zone, stop playback
        if (album.dataset.dropped === 'true') {
            const audio = document.getElementById(`${album.id}-audio`);
            if (audio) {
                audio.pause();
                audio.currentTime = 0; // Reset the audio
            }
        }
        album.style.position = 'absolute'; // Reset position style
    });
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Allow drop
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    const draggedElement = document.getElementById(id);
    if (draggedElement) {
        // Place the dragged element inside the drop zone
        dropZone.appendChild(draggedElement);
        draggedElement.dataset.dropped = 'true'; // Mark as dropped

        // Start audio playback
        const audio = document.getElementById(`${id}-audio`);
        if (audio) {
            audio.play();
        }
    }
});

resetBtn.addEventListener('click', () => {
    musicAlbums.forEach(album => {
        // Reset position
        const { left, top } = originalPositions[album.id];
        album.style.position = 'relative';
        album.style.left = `${left}px`;
        album.style.top = `${top}px`;

        // Stop audio playback and reset
        const audio = document.getElementById(`${album.id}-audio`);
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }

        // Clear dropped state
        delete album.dataset.dropped;
    });
});
