const aura = document.getElementById('cursor-glow');

// Smoothly follow the mouse with the purple aura
document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    aura.style.left = `${x - 150}px`;
    aura.style.top = `${y - 150}px`;
});

// Fade in effect for the glass box
window.addEventListener('DOMContentLoaded', () => {
    const glassBox = document.querySelector('.glass-box');
    glassBox.style.opacity = '0';
    glassBox.style.transform = 'translateY(30px)';
    glassBox.style.transition = 'all 1s cubic-bezier(0.19, 1, 0.22, 1)';
    
    setTimeout(() => {
        glassBox.style.opacity = '1';
        glassBox.style.transform = 'translateY(0)';
    }, 800);
});
