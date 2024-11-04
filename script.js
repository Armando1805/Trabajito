const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const myAudio = document.getElementById("myAudio");
let audioPlayed = false;

function playAudio() {
  if (!audioPlayed) {
      myAudio.play().catch((error) => {
          console.error("Error al reproducir el audio:", error);
      });
      audioPlayed = true;
  }
}

document.addEventListener("click", playAudio);

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yo tambien te quiero mucho! 🥰";
  gif.src = "https://media.tenor.com/PXKZhCEfEfsAAAAj/bubu-bubu-dudu.gif";
  
});



noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height; 

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY * -1);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";

  console.log(maxX);
  console.log(maxY);
});
