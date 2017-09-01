class Emoticon {
  constructor() {
  }

  draw() {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI*2, true); // Círculo externo
    ctx.moveTo(110, 75);                     //Mueve la pluma a las coordenadas específicadas por x e y
    ctx.arc(75, 75, 35, 0, Math.PI, false);   // Boca (contra reloj)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI*2, true);  // Ojo izquierdo
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI*2, true);  // Ojo derecho
    ctx.stroke();
  }
}
