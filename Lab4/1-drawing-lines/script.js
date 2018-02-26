var canvas, context;
var mouseIsDown;
var lines = [];
var x_1, y_1,
    x_2, y_2;

function docIsLoaded() {
  canvas = document.getElementById("mainCanvas");
  context = canvas.getContext("2d");

  canvas.style.backgroundColor = "Beige";
}

function startDrawLine(event) {
  mouseIsDown = true;

  x_1 = event.offsetX;
  y_1 = event.offsetY;

  drawLines();
}

function stillDrawingLine(event) {
  if (mouseIsDown) {
    if ( event.offsetX < 4 || event.offsetX > canvas.width - 4 ||
         event.offsetY < 4 || event.offsetY > canvas.height - 4 )
    {
      finishDrawLine(event);
    }
    drawLines();
  }
}

function releaseMouse(event) {
  finishDrawLine(event);
}

function finishDrawLine(event) {
  x_2 = event.offsetX;
  y_2 = event.offsetY;

  lines.push([x_1, y_1, x_2, y_2])
  mouseIsDown = false;

  drawLines();
}

function drawLines() {
  context.fillStyle = "Beige" ;
  context.fillRect( 0, 0, canvas.width, canvas.height ) ;

  context.lineWidth   = 2 ;
  context.strokeStyle = "DarkCyan" ;

  for ( var line_index  =  0 ;
            line_index  <  lines.length ;
            line_index  ++ )
  {
    context.beginPath() ;
    context.moveTo( lines[ line_index ] [0],
                    lines[ line_index ] [1] ) ;
    context.lineTo( lines[ line_index ] [2],
                    lines[ line_index ] [3] ) ;
    context.closePath() ;
    context.stroke() ;
  }

  context.strokeStyle = "red" ;

  if ( mouseIsDown )
  {
    context.beginPath();
    context.moveTo(x_1, y_1);
    context.lineTo(event.offsetX, event.offsetY);
    context.stroke();
    context.closePath();
  }
}
