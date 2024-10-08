const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const customButton = document.getElementById('customButton');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
    customButton.style.animation = 'slideOut 0.5s ease-out';
    setTimeout(() => {
        customButton.style.animation = '';
    }, 500); // Reset animation after 0.5s
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
    customButton.style.animation = 'slideOut 0.5s ease-out';
    setTimeout(() => {
        customButton.style.animation = '';
    }, 500); // Reset animation after 0.5s
});
