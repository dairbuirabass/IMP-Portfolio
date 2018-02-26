var canvas, context;
var GAME_STATE;
var timer, score, box,
    timerIntervalId, bestScore;

function docIsLoaded() {
  canvas = document.getElementById("mainCanvas");
  context = canvas.getContext("2d");
  context.fillStyle = "Beige" ;
  context.fillRect( 0, 0, canvas.width, canvas.height ) ;

  GAME_STATE = "WAITING";

  // Check for best score value
  if ( !localStorage.getItem("bestScore") ) {
    bestScore = 0;
  } else {
    bestScore = Number(localStorage.getItem("bestScore"));
    document.getElementById("bestScore").innerHTML = bestScore;
  }

  drawCanvas();
}

function userIsClicking(event) {
  if (GAME_STATE == "WAITING") {
    initializeGame();
    drawCanvas();
  }
  else if (GAME_STATE == "PLAYING") {
    if (box.collides(event))
    {
      if (box instanceof BadBox) {
        score --;
      }
      else if (box instanceof FastBox){
        score += 2;
      }
      else {
        score ++;
      }
      generateNewBall();
    }
  }
  else if (GAME_STATE == "FINISHED") {
    // Update the best score value
    if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("bestScore", bestScore);
    document.getElementById("bestScore").innerHTML = bestScore;
  }
    if (event.offsetX > canvas.width/2-120 && event.offsetX < canvas.width/2+120 &&
        event.offsetY > canvas.height/2 + 60 && event.offsetY < canvas.height/2 + 120 )
    {
      initializeGame();
      drawCanvas();
    }
  }
}

function generateNewBall() {
  document.getElementById('score').innerHTML = score;
  box = null;
  if (Math.random() > 0.33) {
    box = new Box();
    box.generateRandomPosition();
  } else {
    if (Math.random() > 0.75) {
      box = new BadBox();
      box.generateRandomPosition();
    } else {
      box = new FastBox();
      box.generateRandomPosition();
    }
  }
  drawCanvas();
}

function initializeGame() {
  box = new Box();
  timer = 10;
  score = 0;

  timerIntervalId = setInterval(function() {
    timer --;
    box.lifetime --;
    if (box.lifetime == 0) {
      generateNewBall();
    }
    document.getElementById('timer').innerHTML = timer;

    if (timer == 0) {
      GAME_STATE = "FINISHED";
      clearInterval(timerIntervalId);
      drawCanvas();
    }

  }, 1000)

  GAME_STATE = "PLAYING";
}

function drawCanvas() {
  if (GAME_STATE == "WAITING") {
    // Game rules
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("You have 10 seconds", canvas.width/2, canvas.height/2 - 70);
    context.fillText("Your goal is to hit as many boxes as you can", canvas.width/2, canvas.height/2 - 35);
    context.fillText("Green boxes give you 1 point", canvas.width/2, canvas.height/2);
    context.fillText("Blue boxes give you 2 points", canvas.width/2, canvas.height/2 + 35);
    context.fillText("Red boxes reduce your score", canvas.width/2, canvas.height/2 + 70);

    // Click to start
    context.fillText("Click to Start", canvas.width/2, canvas.height/2 + 140);
  }
  else if (GAME_STATE == "PLAYING") {
    context.fillStyle = "Beige" ;
    context.fillRect( 0, 0, canvas.width, canvas.height ) ;
    box.displayBox();
  }
  else if (GAME_STATE == "FINISHED") {
    context.fillStyle = "Beige" ;
    context.fillRect( 0, 0, canvas.width, canvas.height ) ;

    //Game Over
    context.fillStyle = "black";
    context.font = "30px Arial";
    context.textAlign = "center";
    context.fillText("Your score is " + score, canvas.width/2, canvas.height/2 - 70);
    context.fillText("Game Over", canvas.width/2, canvas.height/2);

    // Click to start again
    context.fillStyle = "Red" ;
    context.fillRect( canvas.width/2-120, canvas.height/2 + 60, 240, 60 ) ;

    context.fillStyle = "White";
    context.font = "24px Arial";
    context.textAlign = "center";
    context.fillText("Start again", canvas.width/2, canvas.height/2 + 96);
  }
}
