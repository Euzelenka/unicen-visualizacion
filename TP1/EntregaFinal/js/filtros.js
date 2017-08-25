
var ctx = document.getElementById("canvas").getContext("2d");

var image = new Image();

function myDrawImageMethod(image) {
  ctx.drawImage(image, 0, 0);
}

$(function() {
    $('#selectedFile').change(function(e) {
        var file = e.target.files[0],
            imageType = /image.*/;

        if (!file.type.match(imageType))
            return;

        var reader = new FileReader();
        reader.onload = fileOnload;
        reader.readAsDataURL(file);

    });

    function fileOnload(e) {
        var img = new Image();
        img.src =  e.target.result;
        var canvas = $('#canvas')[0];
        var context = canvas.getContext('2d');

        img.load(function() {
            ctx.drawImage(this, 0, 0);
        });
    }
});


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
  var ctx = document.getElementById("canvas").getContext("2d");
  myDrawImageMethod(this);
  imageData = ctx.getImageData(0, 0, this.width, this.height);
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
  imageData = ctx.getImageData(0, 0, this.width, this.height);
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
  imageData = ctx.getImageData(0, 0, this.width, this.height);
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
  imageData = ctx.getImageData(0, 0, this.width, this.height);
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
