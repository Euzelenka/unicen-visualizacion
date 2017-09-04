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
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    //ctx.strokeStyle = 'black';
    ctx.stroke();
    ctx.closePath();
  }

  detectarPunto(clientX, clientY) {
    var a = Math.pow((clientX - this.posX), 2);
    var b = Math.pow((clientY - this.posY), 2);
    var c = a + b;
    var result = Math.sqrt(c);

    if(result > this.radio)
      alert('Está afuera');
    else alert('Está adentro');
  }
}
