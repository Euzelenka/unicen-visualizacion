let self;
class Game {

  constructor(p) {
    this.lives = 5;
    this.points = 0;
    this.player = p;
    this.enemies = [];
    this.cantApple = 5;
    self = this;
  }

  jugar() {

    self.update();
  }

  moveBackground() {
    document.getElementById('mountain').style.animationPlayState = 'running';
    document.getElementById('trees').style.animationPlayState = 'running';
    document.getElementById('floor').style.animationPlayState = 'running';
  }

  stopBackground() {
    document.getElementById('mountain').style.animationPlayState = 'paused';
    document.getElementById('trees').style.animationPlayState = 'paused';
    document.getElementById('floor').style.animationPlayState = 'paused';
  }

  appleUpdate(px) {
    for (var i = 1; i <= this.cantApple; i++) {
           let apple =  $("#apple"+i);
           if(parseInt(apple.offset().left)>-100){
               apple.offset({left: parseInt(apple.offset().left)-px});
           }else{
               let distanceX = Math.floor((Math.random() * 2000) + innerWidth);
               let distanceY = Math.floor((Math.random() * 490) + 250);
               this.updateDistance("apple"+i,distanceX,distanceY);
           }
       }
  }

  enemyUpdate(px) {
    let enemy =  $("#enemy");
       if(parseInt(enemy.offset().left)>-100){
           enemy.offset({left: parseInt(enemy.offset().left)-px});
       }else{
           let distanceX = Math.floor((Math.random() * 2000) + innerWidth);
           this.updateDistance("enemy",distanceX);
       }
  }

  updateDistance(object,distanceX,distanceY){
      let div = document.getElementById(object);
      if(object == 'enemy'){
          div.style.left = parseInt(div.style.left,10) + distanceX+'px';
      }else{
          div.style.left = parseInt(div.style.left,10) + distanceX+'px';
          div.style.top = parseInt(div.style.top,10) + distanceY+'px';
      }
  }

  update() {
    if(this.walk == true) {
      this.player.walk();
      this.appleUpdate(2);
      this.moveBackground();
      this.enemyUpdate();
    }
  }
}
