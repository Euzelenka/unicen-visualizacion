var ctx = document.getElementById("canvas").getContext("2d");

var circulo1 = new Circulo(300, 200, 100, '#FF0000');
circulo1.draw();

//funcion que detecta el mousedown y llama ala funcion detectarPunto del obj circle
canvas.onmousedown = function(event) {
  console.log(event);
  circulo1.detectarPunto(event.clientX,event.clientY)
 };
