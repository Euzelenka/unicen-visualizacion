class Circulo {
  this.posX = 4;
  this.posY = 4;
  this.radio = 10;
  this.color = '#141444';

  constructor(paramPosX, paramPosY, paramRadio, paramColor) {
    this.posX = paramPosX;
    this.posY = paramPosY;
    this.radio = paramRadio;
    this.color = paramColor;
  }

  Circulo.prototype.message = function() {
    alert("Soy un puto circulo con radio: " + this.radio);
  }
}
