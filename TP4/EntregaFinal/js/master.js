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
    if(player.colisionCoin(coin)) {
      player.coins = player.coins + 10;
      document.getElementById('score-num').innerHTML = player.coins;
      coin.div.style.opacity = 0;
    }
    if(player.colisionEnemy(enemy) && enemy.choco == 0) {
        player.vidas = player.vidas-1;
        document.getElementById('vida'+player.vidas).src="images/noheart.png";
        enemy.choco = 1;
        if(player.vidas == 0){
      player.state = 'dead';
      document.getElementById('mensaje').style.display="block";
      document.getElementById('score-mensaje').innerHTML = player.coins;
     }
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

document.getElementById("btn-menu").onclick=function(){
  document.getElementById('mensaje').style.display="none";

  window.location.href="index.html";


}

document.getElementById("btn-reiniciar").onclick=function(){
  document.getElementById('mensaje').style.display="none";
  window.location.href="game.html";
}

document.onkeydown = function(e) {

  switch(event.keyCode) {
    case 65:
        if(player.estaEnElPiso && player.state!='dead') {
            player.moveBackground();
            player.estaEnElPiso = false;
            player.aplicarFuerza(-12);
            player.state = 'jump';
        }
        break;
    case 83:
      if(player.estaEnElPiso && player.state!='dead') {
        player.state = 'walk';
        player.moveBackground();
      }
  }
}

document.onkeyup = function(e) {

    switch(event.keyCode) {
      case 83:
        if( player.state != 'dead') {
          player.state = 'idle';
          player.stopBackground();
        }
          break;
      case 65:
          if(player.estaEnElPiso && player.state!='dead') {
            player.state = 'idle';
            player.stopBackground();
          }
          break;
  }
}

requestAnimationFrame(mainLoop);
