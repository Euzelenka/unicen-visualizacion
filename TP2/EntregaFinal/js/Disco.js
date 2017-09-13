class Disco {
  constructor(l) {
    this.color = this.getRandomColor();
    this.largo = l;
    this.altura = 30;
    this.posX = l * 200;
  }

  draw(ctx, x, y) {
    ctx.beginPath();     //es para indicar que vamos a comenzar una figura nueva.
    ctx.fillStyle = this.color;
    ctx.fillRect(x, y, (this.largo * 20) + 20, this.altura);  //posX,posY,ancho,alto
    ctx.closePath();
  }

  getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }

 getLargo() {
   return this.largo;
 }

}
