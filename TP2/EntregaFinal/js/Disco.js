class Disco {
  constructor(l) {
    this.color = getRandomColor();
    this.largo = l;
    this.altura = 50;
  }

  draw(ctx, x, y) {
    ctx.beginPath();     //es para indicar que vamos a comenzar una figura nueva.
    ctx.fillStyle = this.color;
    ctx.fillRect(x-(this.largo/2),y,this.largo,this.altura);
    ctx.stroke-linecap = "round";
    ctx.closePath();
  }



  getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
 }

}
