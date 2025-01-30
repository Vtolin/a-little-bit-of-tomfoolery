const dv1 = document.querySelector('.tac');
const container = document.querySelector('.container');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');

b1.addEventListener('click', () => {
    dv1.style.display = 'block';
    container.style.display = 'none';
});

b2.addEventListener('click', () => {
    dv1.style.display = 'block';
    container.style.display = 'none';
});