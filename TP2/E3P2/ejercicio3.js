var ctx = document.getElementById("canvas").getContext("2d");
var img = document.getElementById("img");
var image = ctx.createPattern(img, "repeat");
var cuadrado1 = new Cuadrado(400, 150, 300, image);
cuadrado1.draw();
