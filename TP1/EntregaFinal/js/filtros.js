
var ctx = document.getElementById("canvas").getContext("2d");
var canvas = document.getElementById("canvas");
var img = new Image();
var imgRestablecer = new Image();


function myDrawImageMethod(image) {
  ctx.drawImage(image, 0, 0);
}

function restablecer() {
  myDrawImageMethod(imgRestablecer,ctx,document.getElementById("canvas").width,document.getElementById("canvas").height );
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
var button = document.getElementById('guardar');
button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});
