class Hanoi {
  constructor(cantDiscos) {
    this.torreIzq = new Torre(150);             //creo las torres en las diferentes posiciones
    this.torreMed = new Torre(400);
    this.torreDer = new Torre(650);
    this.cantDiscos = cantDiscos;
    this.movimiento = 0;

    for (let i = 0; i < this.cantDiscos; i++) {
      let disco = new Disco(this.cantDiscos - i);
      this.torreIzq.ponerDisco(disco);
    }
  }

  iniciar(ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.torreIzq.draw(ctx);
    this.torreMed.draw(ctx);
    this.torreDer.draw(ctx);

  }

  getMovimientos() {
    return this.movimiento;
  }

  actualizaMovimientos() {
    this.movimiento ++;
    document.getElementById("movimientos").innerHTML = this.movimiento;
  }

  ganoElJuego() {
    if(this.cantDiscos == this.torreDer.cantidadDiscos())
      return true;
    else return false;
  }

  seleccionado(x) {
    if(this.torreIzq.estaClickeado(x))
      return this.torreIzq;
    else if(this.torreMed.estaClickeado(x))
            return this.torreMed;
    else if(this.torreDer.estaClickeado(x))
            return this.torreDer;
    else {//alert("es null");
      return null;}
  }


}
