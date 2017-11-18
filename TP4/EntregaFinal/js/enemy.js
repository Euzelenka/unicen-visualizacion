class Enemy {

  constructor() {
      this.posX = 1200;
      this.posY = 110;
      this.div = document.getElementById('enemy');
      this.left = this.posX;
      this.top = this.posY;
      this.state = 'enemy-walk';
      this.right = this.posX + this.div.offsetWidth;
      this.bottom = this.posY + this.div.offsetHeight;
      this.choco=0;

  }

  draw() {
    this.div.style.left = this.posX.toString() + 'px';
    this.div.style.top = this.posY.toString() + 'px';
    this.div.className = this.state;
  }

  update() {
    this.posX -= 5;
    this.left = this.posX;
    this.top = this.posY;
    this.right = this.posX + this.div.offsetWidth;
    this.bottom = this.posY + this.div.offsetHeight;
    if(this.posX < -1000) {
      this.choco=0;
      this.posX = 1200;
    }
  }

}
