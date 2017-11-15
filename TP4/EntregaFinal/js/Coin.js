class Coin {

  constructor() {
      this.posX = 900;
      this.posY = 100;
      this.div = document.getElementById('coin');
      this.left = this.posX;
      this.top = this.posY;
      this.right = this.posX + this.div.offsetWidth;
      this.bottom = this.posY + this.div.offsetHeight;

  }

  

  draw() {
    this.div.style.left = this.posX.toString() + 'px';
    this.div.style.top = this.posY.toString() + 'px';
    this.div.className = this.state;
  }

  update() {
    this.posX -= 3;
    this.left = this.posX;
    this.top = this.posY;
    this.right = this.posX + this.div.offsetWidth;
    this.bottom = this.posY + this.div.offsetHeight;
    if(this.posX < -200) {
      this.posX = 1200;
      this.posY = Math.floor((Math.random() * 100) + 190);
    }
  }

}
