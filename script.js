// Typing name
const text = "Hey Shweta ❤️";
let i = 0;
const nameEl = document.getElementById("name");

function typeText() {
if (i < text.length) {
nameEl.innerHTML += text.charAt(i);
i++;
setTimeout(typeText, 120);
}
}
typeText();

// Music
const music = document.getElementById("bgMusic");

// NO button runaway
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - 120);
const y = Math.random() * (window.innerHeight - 120);
noBtn.style.left = x + "px";
noBtn.style.top = y + "px";
});

// YES button
document.getElementById("yesBtn").addEventListener("click", () => {
music.play();

if (navigator.vibrate) {
navigator.vibrate([300, 100, 300]);
}

document.body.innerHTML = `
<img src="confetti.gif" width="300"><br>
<img src="hearts.gif" width="200"><br>
<img src="teddy-hug.gif" width="260">
<h1>I knew it 😌❤️</h1>
`;
});
