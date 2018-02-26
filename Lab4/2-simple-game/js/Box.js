class Box
{
  constructor() {
    this.generateRandomPosition();
    this.height = 48;
    this.width = 48;
    this.color = 'Green';
    this.lifetime = 2;
  }

  displayBox() {
    context.save();

    context.fillStyle = this.color;

    context.beginPath();
    context.rect( this.x, this.y, this.height, this.width)

    context.closePath();
    context.fill();

    context.restore();
  }

  collides(event) {
    if (event.offsetX > this.x && event.offsetX < this.x + this.width
     && event.offsetY > this.y && event.offsetY < this.y + this.height )
    {
      return true;
    }
  }

  generateRandomPosition() {
    this.x = Math.floor((Math.random() * ((canvas.width - 48) - 48)));
    this.y = Math.floor((Math.random() * ((canvas.height - 48) - 48)));
  }
}

class BadBox extends Box
{
  constructor() {
    super();
    this.color = 'Red';
  }
}

class FastBox extends Box
{
  constructor() {
    super();
    this.color = 'Blue';
    this.lifetime = 1;
  }
}
