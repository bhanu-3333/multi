const basket = document.getElementById("basket");
const ball = document.getElementById("ball");
const scoreText = document.getElementById("score");

let basketX = 180;
let ballX = Math.random() * 380;
let ballY = 0;
let score = 0;
let missed = 0;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    basketX -= 20;
    if (basketX < 0) basketX = 0;
  } else if (e.key === "ArrowRight") {
    basketX += 20;
    if (basketX > 340) basketX = 340;
  }
  basket.style.left = basketX + "px";
});

function dropBall() {
  ballY += 5;
  ball.style.top = ballY + "px";

  if (ballY > 480) {
    // Check if basket caught it
    if (ballX > basketX && ballX < basketX + 60) {
          score++;
      scoreText.innerText = score;
    } else {
      missed++;
    }

    // Reset ball
    ballY = 0;
    ballX = Math.random() * 380;
    ball.style.left = ballX + "px";
  }

  if (missed < 3) {
    requestAnimationFrame(dropBall);
  } else {
    alert("Game Over! Your score: " + score);
  }
}

dropBall();
