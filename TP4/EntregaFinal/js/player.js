  const pisoY = 120;

class Player {

  constructor() {
    this.posX = 300;
    this.posY = pisoY;
    this.aceleracionY = 0;
    this.velocidadY = 0;
    this.div = document.getElementById('player');
    this.state = 'idle';
    this.estaEnElPiso = true;
    this.coins = 0;
    this.left = this.posX;
    this.top = this.posY;
    this.right = this.posX + this.div.offsetWidth;
    this.bottom = this.posY + this.div.offsetHeight;
  }

  draw() {
    switch (this.state) {
      case 'walk':
        this.div.className = this.state;
        break;
      case 'idle':
        this.div.className = this.state;
        this.stopBackground();
        break;
      case 'dead':
        this.div.className = this.state;
        this.stopBackground();
        break;
      case 'jump':
        this.div.className = this.state;
        break;
    }

    this.div.style.left = this.posX.toString() + 'px';
    this.div.style.top = this.posY.toString() + 'px';
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

  update() {
    this.left = this.posX;
    this.top = this.posY;
    this.right = this.posX + this.div.offsetWidth;
    this.bottom = this.posY + this.div.offsetHeight;
    this.velocidadY += this.aceleracionY;
    this.posY += this.velocidadY;
    this.aceleracionY = 0;
    if(this.posY >= pisoY) {
      this.estaEnElPiso = true;
      if((this.state != 'walk') && (this.state != 'dead')) {
        this.state = 'idle';
      }
    }
  }



  colisionCoin(other) {
    if(other.div.style.opacity==1){
      let oLeft = other.left+80;
      let oRight = other.right;
      let oTop = other.top;
      let oBottom = other.bottom;
      return !(this.left > oRight || this.right < oLeft || this.top > oBottom || this.bottom < oTop);
    }else {
    return false;
  }
  }

  colisionEnemy(other) {
    let oLeft = other.left+30;
    let oRight = other.right-20;
    let oTop = other.top+50;
    let oBottom = other.bottom;
    return !(this.left > oRight || this.right < oLeft || this.top > oBottom || this.bottom < oTop);
  }

  aplicarFuerza(fuerza) {
    this.aceleracionY += fuerza;
  }

  piso() {
    if(this.posY >= pisoY) {
      this.velocidadY *= 0;
      this.posY = pisoY;
    }
  }

}
