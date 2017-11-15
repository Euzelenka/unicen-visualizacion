enemy = new Enemy();
player = new Player();
coin = new Coin();
let gravity = 0.2;

function update() {
  if(player.state != 'dead') {
    player.aplicarFuerza(gravity);
    player.piso();
    player.update();
    coin.update()
    enemy.update();
    if(player.colision(coin)) {
      player.
    }
    if(player.colision(enemy)) {
      player.state = 'dead';
    }
  }
  else enemy.state = 'enemy-idle';
}

function draw() {
  player.draw();
  coin.draw();
  enemy.draw();
}

function mainLoop() {
    update();
    draw();
    requestAnimationFrame(mainLoop);
}

document.onkeydown = function(e) {

  switch(event.keyCode) {
    case 65:
        if(player.estaEnElPiso) {
            player.moveBackground();
            player.estaEnElPiso = false;
            player.aplicarFuerza(-14);
            player.state = 'jump';
        }
        break;
    case 83:
        player.state = 'walk';
        player.moveBackground();
  }
}

document.onkeyup = function(e) {

    switch(event.keyCode) {
      case 83:
          player.state = 'idle';
          player.stopBackground();
          break;
      case 65:
          if(player.estaEnElPiso) {
            player.state = 'idle';
            player.stopBackground();
          }
          break;
  }
}

requestAnimationFrame(mainLoop);
