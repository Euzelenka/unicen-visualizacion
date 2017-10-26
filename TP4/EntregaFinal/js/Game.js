let self;
class Game {

  constructor(p) {
    this.lives = 5;
    this.points = 0;
    this.player = p;
    this.enemies = [];
    this.apple = [];
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

  appleUpdate() {
    
  }

  update() {
    if(this.walk == true) {
      this.player.walk();
      this.moveBackground();
    }
  }
}
