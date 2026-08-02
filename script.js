const heart = document.getElementById('heart');
const video = document.getElementById('myVideo')
const isMobile = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;

if (isMobile) {
    setTimeout(spawnHeartFromVideo, 30 * 40);
}
video.addEventListener('play', (e) => {
    for (let i = 0; i < 20; i++) {
        setTimeout(spawnHeartFromVideo, i * 40); // Staggered release
    }
});
function spawnHeartFromVideo() {
    const videoElement = document.getElementById('myVideo');
    
    // Get position of video and center
    const rect = videoElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    //create a heart element
    const heart = document.createElement('div');
    heart.classList.add('arc-heart');

    /*this is just css
        .heart{
            left: centerXpx;
        }
    */
    heart.style.left = `${centerX}px`;
    heart.style.top = `${centerY}px`;

    // Random directoin and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = 200 + Math.random() * 150; 

    const xEnd = Math.cos(angle) * distance;
    const yEnd = Math.sin(angle) * distance;

    // Set end points and rotation also pretty much css
    heart.style.setProperty('--x-end', `${xEnd}px`);
    heart.style.setProperty('--y-end', `${yEnd}px`);
    heart.style.setProperty('--rot', `${Math.random() * 360}deg`);

    // Append to body
    document.body.appendChild(heart);


    heart.addEventListener('animationend', () => {
        heart.remove();
    });
}