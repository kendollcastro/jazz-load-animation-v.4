const sportBalls = [
  "/img/soccer.png",
  "/img/football.png",
  "/img/basketball.png",
  "/img/baseball.png",
];

const ballElement = document.getElementById("sportBall");
let currentIndex = 0;

function changeSportBall() {
  currentIndex = (currentIndex + 1) % sportBalls.length;
  const newBallImage = sportBalls[currentIndex];
  ballElement.style.backgroundImage = `url('${newBallImage}')`;
}

// Cambiar la imagen de la bola automáticamente cada 2 segundos (2000 ms)
setInterval(changeSportBall, 2000);

// Cambiar la imagen de la bola cuando se carga la página
changeSportBall();
