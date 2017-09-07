
var ctx = document.getElementById("canvas").getContext("2d");
var canvas = document.getElementById("canvas");
var ctx2 = document.getElementById("canvas2").getContext("2d");
var img = new Image();
var imgRestablecer = new Image();


function myDrawImageMethod(image) {
  ctx.drawImage(image, 0, 0);
  ctx2.drawImage(image, 0, 0);
}

function restablecer() {
  myDrawImageMethod(imgRestablecer);
}

function inicializar() {
  var inputFile = document.getElementById('selectedFile');
  inputFile.addEventListener('change', cargarImagen, false);
}

function cargarImagen(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function(event) {
    img = document.getElementById('imgCanvas');
    img.src = event.target.result;
    imgRestablecer.src = img.src;
    img.onload = function(){
      canvas.width = img.width;
      canvas.height = img.height;
      myDrawImageMethod(img);
    }
  }
  reader.readAsDataURL(file);
}

function getRed(imageData, x, y) {
  index = (x + y * imageData.width) *4;
  return imageData.data[index + 0];
}

function getGreen(imageData, x, y) {
  index = (x + y * imageData.width) *4;
  return imageData.data[index + 1];
}

function getBlue(imageData, x, y) {
  index = (x + y * imageData.width) *4;
  return imageData.data[index + 2];
}

function setPixel(imageData, x, y, r, g, b) {
  index = (x + y * imageData.width) *4;
  imageData.data[index + 0] = r;
  imageData.data[index + 1] = g;
  imageData.data[index + 2] = b;
}

function filtroBrillo() {
  imageData = ctx.getImageData(0, 0, img.width, img.height);
  var r,g,b;
  for (var i = 0; i < imageData.width; i++) {
    for (var j = 0; j < imageData.height; j++) {
        r = getRed(imageData, i, j);
        g = getGreen(imageData, i, j);
        b = getBlue(imageData, i, j);
        setPixel(imageData, i, j, r+90, g+90, b+90);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function filtroSepia() {
  imageData = ctx.getImageData(0, 0, img.width, img.height);
  var r,g,b;
  for (var i = 0; i < imageData.width; i++) {
    for (var j = 0; j < imageData.height; j++) {
        r = getRed(imageData, i, j);
        g = getGreen(imageData, i, j);
        b = getBlue(imageData, i, j);
        setPixel(imageData, i, j, (r* .393 + g* .769 + b* .189), (r * .349) + (g * .686) + (b * .168), (r * .272) + (g * .534) + (b * .131));
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function filtroNegativo() {
  imageData = ctx.getImageData(0, 0, img.width, img.height);
  var r,g,b;
  for (var i = 0; i < imageData.width; i++) {
    for (var j = 0; j < imageData.height; j++) {
        r = getRed(imageData, i, j);
        g = getGreen(imageData, i, j);
        b = getBlue(imageData, i, j);
        setPixel(imageData, i, j, 255-r, 255-g, 255-b);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function filtroBinarizacion() {
  imageData = ctx.getImageData(0, 0, img.width, img.height);
  var r,g,b;
  for (var i = 0; i < imageData.width; i++) {
    for (var j = 0; j < imageData.height; j++) {
        r = getRed(imageData, i, j);
        g = getGreen(imageData, i, j);
        b = getBlue(imageData, i, j);
        var rgb = (r + g + b)/3;
        if(rgb <= 127) {
          setPixel(imageData, i, j, 0, 0, 0);
        }
        else setPixel(imageData, i, j, 255, 255, 255);
    }
  }
  ctx.putImageData(imageData, 0, 0);
}

function convolver(mat, offset) {
    var m = [].concat(mat[0], mat[1], mat[2]); // flatten
		divisor = m.reduce(function(a, b) {return a + b;}) || 1; // sum
    var olddata = ctx.getImageData(0, 0, img.width, img.height);
    var oldpx = olddata.data;
		var newdata = ctx2.createImageData(olddata);
		var newpx = newdata.data
		var len = newpx.length;
		var res = 0;
		var w = 800;

		for (var i = 0; i < len; i++) {
    if ((i + 1) % 4 === 0) {
      newpx[i] = oldpx[i];

    }
		res = 0;
	     var these = [
	       oldpx[i - w * 4 - 4] || oldpx[i],
	       oldpx[i - w * 4]     || oldpx[i],
	       oldpx[i - w * 4 + 4] || oldpx[i],
	       oldpx[i - 4]         || oldpx[i],
	       oldpx[i],
	       oldpx[i + 4]         || oldpx[i],
	       oldpx[i + w * 4 - 4] || oldpx[i],
	       oldpx[i + w * 4]     || oldpx[i],
	       oldpx[i + w * 4 + 4] || oldpx[i]
	     ];
	     for (var j = 0; j < 9; j++) {
	       res += these[j] * m[j];
	     }
	     res /= divisor;
	     if (offset) {
	       res += offset;
	     }
	     newpx[i] = res;

  }
  ctx.putImageData(newdata,0,0);
	}

function filtroBlur() {
  var mat = [[1, 2, 1],
             [2, 4, 2],
             [1, 2, 1]];
  convolver(mat);
}

function filtroDeteccionBordes() {
  var mat = [[1, 1, 1],
             [1, -7, 1],
             [1, 1, 1]];
  convolver(mat);
}

var button = document.getElementById('guardar');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
