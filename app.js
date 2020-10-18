// Contructor Method for sound-effect
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

// Eventlistener, declaring variables to add correct class after event.
document.addEventListener("mouseover", (event) => {
  const isBalloon = event.target.classList.contains("balloon");
  const isPopped = event.target.classList.contains("popped");
  // if statement to evaluate what class should show.
  if (isBalloon && !isPopped) {
    event.target.classList.add("popped");
    // running sound effect when event takes place.
    pop = new sound("blop.mp3");
    pop.play();
    // Variables for counting elements with specified classes.
    const poppedCount = document.querySelectorAll(".balloon.popped").length;
    const balloonCount = document.querySelectorAll(".balloon").length;
    // if statement to show Congrats Message when all balloons is popped.
    if (poppedCount === balloonCount) {
      console.log("All popped!");
      const balloons = document.querySelector(".balloons");
      balloons.innerHTML = "";
      const h1 = document.createElement("h1");
      h1.textContent = "Congrats You won!";
      h1.classList.add("congratsMessage");
      balloons.appendChild(h1);
    }
  }
});
