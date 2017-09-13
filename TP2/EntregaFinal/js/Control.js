let ctx = document.getElementById('canvas').getContext('2d');

// let hanoi = new Hanoi(2);
// hanoi.iniciar(ctx);

let torreNueva = null;
let torreAnterior = null;
let disco = null;
let hanoi = null;

function jugar(cantDiscos) {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  hanoi = new Hanoi(cantDiscos);
  hanoi.iniciar(ctx);
  document.getElementById('movimientos').innerHTML = 0;
}

canvas.onmousedown = function(event) {
  torreAnterior = hanoi.seleccionado(event.layerX);
  if(torreAnterior.cantidadDiscos() > 0) {
    disco = torreAnterior.sacarDisco();
    
  }
  else torreAnterior = null;
}

canvas.onmousemove = function(event) {
  if((disco != null) && (torreAnterior != null)) {
    hanoi.iniciar(ctx);
    disco.draw(ctx, event.layerX, event.layerY);
  }
}

canvas.onmouseup = function(event) {
  torreNueva = hanoi.seleccionado(event.layerX);
  if(torreNueva != null) {
    if(torreNueva.aceptaDisco(disco)) {      //pregunto si puedo poner el disco en la torre nueva
      torreNueva.ponerDisco(disco);
	  hanoi.actualizaMovimientos();
      torreNueva = null;
      torreAnterior = null;
      disco = null;

      if(hanoi.ganoElJuego()) {
        let mov = hanoi.getMovimientos();
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        //setTimeout(ctx.clearRect(0, 0, canvas.width, canvas.height),100);
        document.getElementById("mov").innerHTML = mov;
        document.getElementById("alerta").style.display = 'block';
      }
    }
    else {
      torreAnterior.ponerDisco(disco);
      torreNueva = null;
      torreAnterior = null;
      disco = null;
      document.getElementById("alerta2").style.display = 'block';
      //alert("El movimiento NO esta permitido!");
    }
  }
  hanoi.iniciar(ctx);
}
