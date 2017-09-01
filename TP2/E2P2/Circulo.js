class Circulo {

  constructor(paramPosX, paramPosY, paramRadio, paramColor) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radio, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

}
