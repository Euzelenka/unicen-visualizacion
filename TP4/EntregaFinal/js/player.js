
update() {
}

foreach(enemy) {
  enemy.update();
  if(player.collide(enemies)) {
    DIE!
  }
  contar puntos;
}

function keyDown(e) {
  if(e.up) {
    player.setJumping();
  }
}

function stJumping() {
  player.isJumping = true;
  anim = document.getElementById('anim');
  player.div.animation = anim;
  anim.addEventListener('animationEnd', function() {
                        player.anim = 'run';
                        player.isJumping = false;
  })
}
