function pintarConImagen(direccion) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var img = document.getElementById("img");
  var image = ctx.createPattern(img, direccion);
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = image;
  ctx.fill();
}
