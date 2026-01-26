const toggle = document.getElementById('mode-toggle');
const body = document.body;

// Check for saved user preference
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggle.checked = true;
}

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Simple animation for the name
const nameText = document.querySelector('.glow-text');
nameText.addEventListener('mouseover', () => {
    nameText.style.letterSpacing = "4px";
    nameText.style.transition = "0.5s";
});
nameText.addEventListener('mouseout', () => {
    nameText.style.letterSpacing = "normal";
});