document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('loginBtn');
  const createBtn = document.getElementById('createBtn');
  const loginForm = document.getElementById('loginForm');
  const createForm = document.getElementById('createForm');
  const closeLogin = document.getElementById('closeLogin');
  const closeCreate = document.getElementById('closeCreate');
  const switchToCreate = document.getElementById('switchToCreate');
  const switchToLogin = document.getElementById('switchToLogin');
  const subscribeBtn = document.querySelector('.subscribe-btn');
  const heroText = document.querySelector('.hero h1');

  // Hide forms initially
  loginForm.style.display = 'none';
  createForm.style.display = 'none';

  loginBtn.addEventListener('click', () => {
      loginForm.style.display = 'block';
  });

  closeLogin.addEventListener('click', () => {
      loginForm.style.display = 'none';
  });

  createBtn.addEventListener('click', () => {
      createForm.style.display = 'block';
  });

  closeCreate.addEventListener('click', () => {
      createForm.style.display = 'none';
  });

  switchToCreate.addEventListener('click', () => {
      loginForm.style.display = 'none';
      createForm.style.display = 'block';
  });

  switchToLogin.addEventListener('click', () => {
      createForm.style.display = 'none';
      loginForm.style.display = 'block';
  });

  subscribeBtn.addEventListener('click', () => {
      subscribeBtn.innerHTML = 'Welcome aboard!';
      setTimeout(() => {
          subscribeBtn.innerHTML = 'Subscribe Now';
      }, 3000);
  });

  // Text animation loop
  setInterval(() => {
      heroText.style.animation = 'none';
      setTimeout(() => {
          heroText.style.animation = '';
      }, 10);
  }, 10500);
});

document.addEventListener("DOMContentLoaded", function() {
const textElement = document.getElementById('typewriter-text');
const text = textElement.innerText;
let index = 0;
const typingSpeed = 150; // Speed in milliseconds between each letter
const sound = new Audio('https://www.soundjay.com/button/sounds/button-4.mp3'); // Example sound URL

textElement.innerText = ""; // Clear the initial text
textElement.style.visibility = "visible"; // Make the element visible

function typeLetter() {
  if (index < text.length) {
    textElement.innerText += text[index];
    sound.play();
    index++;
    setTimeout(typeLetter, typingSpeed);
  }
}

typeLetter(); // Start the typing effect
});
