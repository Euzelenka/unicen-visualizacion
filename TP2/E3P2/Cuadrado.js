class Cuadrado {
  constructor(paramPosX, paramPosY, paramWidth, paramColor) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.long = paramWidth;
    this.color = paramColor;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.long, this.long);
  }
}
