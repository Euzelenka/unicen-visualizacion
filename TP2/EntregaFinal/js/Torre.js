class Torre {
  constructor(x) {
    this.torre = [];
    this.posXVertical = x;
    this.posYVertical = 100;
    this.widthVertical = 20;
    this.heightVertical = 230;

    this.widthHorizontal = 200;
    this.heightHorizontal = 20;
    this.posXHorizontal = (x + 10) - (this.widthHorizontal/2);
    this.posYHorizontal = this.posYVertical + this.heightVertical;
  }

  aceptaDisco(disco) {
    if(this.torre.length > 0) {      //pregunto si hay discos en la torre
      if(this.torre[(this.torre.length - 1)].getLargo() > disco.getLargo())     //pregunto si el disco de la torre es mayor que el nuevo
        return true;
      else return false;
    }
    else return true;
  }

  cantidadDiscos() {     //retorna la cantidad de discos q hay en la torre
    return this.torre.length;
  }

  ponerDisco(disco) {           //agrego un disco
    return this.torre.push(disco);
  }

  draw(ctx) {
    ctx.beginPath();     //es para indicar que vamos a comenzar una figura nueva.
    ctx.strokeStyle = "white";
    ctx.lineWidth   = 1;
    ctx.strokeRect(this.posXVertical, this.posYVertical, this.widthVertical, this.heightVertical);  //posX,posY,ancho,alto
    ctx.closePath();

    ctx.beginPath();
    ctx.lineWidth   = 1;
    ctx.strokeRect(this.posXHorizontal, this.posYHorizontal, this.widthHorizontal, this.heightHorizontal);  //posX,posY,ancho,alto
    ctx.closePath();

    let y = 300;                  //la cordenada en 'y' donde se debe empezar a dibujar los discos.
    let x;

    for (let i = 0; i < this.torre.length; i++) {
		x = this.posXVertical;	
		if(this.torre[i].largo == 5)                        //no encontre otra manera de alinear los discos a las torres
			x = x - 50;
		else if(this.torre[i].largo == 4)
				x = x - 40;
			else if(this.torre[i].largo == 3)
					x = x - 30;
				else if(this.torre[i].largo == 2)
						x = x - 20;
					else if(this.torre[i].largo == 1)
							x = x - 10;
		this.torre[i].draw(ctx, x, y);
		y = y - 30;                  // le resto el alto del disco anterior.
    }
 }

 estaClickeado(x) {          //retorna si fue clickeado
  //if((x > ((150 + 10) - (((this.torre.length * 20) + 20) / 2)) - (this.widthHorizontal/2)) && (x < ((150 + 10) - (((this.torre.length * 20) + 20) / 2))+(this.widthHorizontal/2)))
  if ((x > (this.posXHorizontal - 10)) && (x < (this.posXHorizontal + this.widthHorizontal)))
      return true;
  else return false;
 }

  sacarDisco() {                  //saco el disco de la torre
     return this.torre.pop();
  }


}
