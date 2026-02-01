// ---------- TYPING EFFECT ----------
const text = `Dear pattu kunje ❤️

I don’t know how to code love,
but if I did, you’d be the main function of my life.

Every smile of yours,
every little moment we share,
it all means more to me than you know.

This website is just a small thing,
but my love for you is infinite. 💖`;

const typingElement = document.getElementById("typing-text");
let index = 0;

function typeText() {
  if (index < text.length) {
    typingElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 50);
  }
}

window.addEventListener("load", typeText);

// ---------- FINAL BUTTON ----------
const loveBtn = document.getElementById("loveBtn");
const finalText = document.getElementById("finalText");

loveBtn.addEventListener("click", () => {
  finalText.innerHTML = "I knew it 😌💘 I love you, always.";
  loveBtn.style.display = "none";
});
// ---------- PRIVATE GALLERY UNLOCK ----------
const unlockBtn = document.getElementById("unlockGalleryBtn");
const privateGallery = document.getElementById("privateGallery");

unlockBtn.addEventListener("click", () => {
  unlockBtn.style.display = "none";
  setTimeout(() => {
    privateGallery.classList.add("show");
  }, 50);
});
