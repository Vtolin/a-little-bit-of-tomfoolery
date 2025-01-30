function toggleDarkMode() {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeToggle.style.backgroundColor = 'black';
        darkModeToggle.style.color = 'white';
        darkModeToggle.textContent = 'Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeToggle.style.backgroundColor = '';
        darkModeToggle.style.color = '';
        darkModeToggle.textContent = 'Dark Mode';
    }
}

function checkDarkModePreference() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');

    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.style.backgroundColor = 'black';
            darkModeToggle.style.color = 'white';
            darkModeToggle.textContent = 'Light Mode';
        }
    } else {
        body.classList.remove('dark-mode');
        if (darkModeToggle) {
            darkModeToggle.style.backgroundColor = '';
            darkModeToggle.style.color = '';
            darkModeToggle.textContent = 'Dark Mode';
        }
    }
}

const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

document.addEventListener('DOMContentLoaded', checkDarkModePreference);

const dv1 = document.querySelector('.tac');
const container = document.querySelector('.container');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const video = document.querySelector('.vid');

b1.addEventListener('click', () => {
    dv1.style.display = 'block';
    container.style.display = 'none';
    video.muted = false;
    video.volume = 1.0;
});

b2.addEventListener('click', () => {
    dv1.style.display = 'block';
    container.style.display = 'none';
    video.muted = false;
    video.volume = 1.0;
});
