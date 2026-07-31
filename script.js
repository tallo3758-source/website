const heart = document.getElementById('heart');
const video = document.getElementById('myVideo')

video.addEventListener('play', (e) => {
    burstHearts(20);
});
function spawnHeartFromVideo() {
    const videoElement = document.getElementById('myVideo');
    
    // Get position of video directly
    const rect = videoElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const heart = document.createElement('div');
    heart.classList.add('arc-heart');

    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;

    // Random direction and distance straight outward
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 150; 

    const xEnd = Math.cos(angle) * distance;
    const yEnd = Math.sin(angle) * distance;

    // Set end points and rotation
    heart.style.setProperty('--x-end', `${xEnd}px`);
    heart.style.setProperty('--y-end', `${yEnd}px`);
    heart.style.setProperty('--rot', `${Math.random() * 360}deg`);

    // Append to body so screen-relative coordinates align perfectly
    document.body.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}
function burstHearts(count = 15) {
    for (let i = 0; i < count; i++) {
        setTimeout(spawnHeartFromVideo, i * 40); // Staggered release
    }
}