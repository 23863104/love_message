const messages = [
    "Are you sure you don't want to be my Valentine?",
    "Please reconsider, you make my heart skip a beat!",
    "You are the sunshine in my life, say yes!",
    "My heart longs for you, don't say no!",
    "You are my everything, be my Valentine!"
];

const messageElement = document.getElementById('message');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

yesButton.addEventListener('click', () => {
    messageElement.textContent = "Yay! You've made my day! 💖";
    noButton.style.display = 'none';
    yesButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    messageElement.textContent = randomMessage;
});
