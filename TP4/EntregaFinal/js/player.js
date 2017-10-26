class Player {

  constructor() {
    this.player = document.getElementById('player');
    this.state = 'stop';
    this.coins = 0;
  }

  stop() {
    this.player.className = "idle";
    this.state = 'stop';
  }

  walk() {
    this.player.className = "walk";
    this.state = 'walk';
  }

  dead() {
    this.player.className = "dead";
    this.state = 'dead';
  }

  jump() {
    this.player.className = "jump";
    if(this.state == "walk") {
      player.walk();
    }
    else stop();
  }
}
// update() {
//
// }
//
// foreach(enemy) {
//   enemy.update();
//   if(player.collide(enemies)) {
//     DIE!
//   }
//   contar puntos;
// }
//
// function keyDown(e) {
//   if(e.up) {
//     player.setJumping();
//   }
// }
//
// function stJumping() {
//   player.isJumping = true;
//   anim = document.getElementById('anim');
//   player.div.animation = anim;
//   anim.addEventListener('animationEnd', function() {
//                         player.anim = 'run';
//                         player.isJumping = false;
//   })
// }
