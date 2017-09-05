class Triangulo {
  constructor() {

  }

draw() {
  ctx.beginPath();      //es para indicar que vamos a comenzar una figura nueva.
  ctx.strokeStyle="red";     //indica el color que queremos, por defecto es negro.
  ctx.fillStyle="green";
  ctx.moveTo(100,100);      //nos lleva al punto inicial de la figura.
  ctx.lineTo(150,150);      //dibuja una línea recta desde el punto anterior hasta el punto indicado.
  ctx.lineTo(100,150);
  ctx.stroke();             //hace que la figura se dibuje, con el color de strokeStyle y grosor 1 por defecto.
  ctx.fill();
  }
}
