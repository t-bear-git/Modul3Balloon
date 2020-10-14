class sound {
  constructor(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto", "controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
      this.sound.play();
    };
    this.stop = function () {
      this.sound.pause();
    };
  }
}
document.addEventListener("mouseover", (event) => {
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");
  if (isBalloon && !isPopped) {
    event.target.classList.add("popped");
    pop = new sound("blop.mp3");
    pop.play();
    const poppedCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;
    if (poppedCount === balloonCount) {
      console.log("All popped!");
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "Yay! You won!";
      h1.classList.add("congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
