const heart = document.getElementById('heart');

document.addEventListener('click', (e) => {
    
    // Calculate click position relative to the board
    // Subtract half the circle's size (20px) so it centers on the click
    const x = e.clientX - 20;
    const y = e.clientY - 20;
    
    // Move the circle to the clicked spot
    heart.style.transform = 'translate(0px,-100px)';
});