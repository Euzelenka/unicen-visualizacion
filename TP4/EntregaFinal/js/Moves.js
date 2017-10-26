document.onkeydown = function(e) {

  switch(event.keyCode) {
    case 83:
        player.walk();
        game.moveBackground();
        break;
    case 65:
        player.jump();
        game.moveBackground();
        break;
    default:
        player.stop();
  }
}

document.onkeyup = function(e) {

    switch(event.keyCode) {
      case 83:
          player.stop();
          game.stopBackground();
          break;
      case 65:
          player.stop();
          game.stopBackground();
          break;
     default:
          player.stop();
  }
}
