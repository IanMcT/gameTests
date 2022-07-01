class Background{
  c;
  x;
  constructor(c){
    this.x = 0;
    this.c = c;
    var canvas = document.getElementById(this.c);
var ctx = canvas.getContext("2d");

    console.log("Background constructor, c: " + c);
  }
  update(){
    var canvas = document.getElementById(this.c);
var ctx = canvas.getContext("2d");
    ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.fillStyle = "#9999ff";
ctx.fillRect(0, 0, 640, 480/4*1);
    ctx.fillStyle = "#99ff99";
    ctx.fillRect(0,480/4*1,640,480/4*3);
    ctx.fillStyle = "#ffffff";
ctx.fillRect(this.x, 25, 100, 50);
    this.x += 1;
    if(this.x > 640){
      //offscreen, reset
      this.x = -100;
    }
    console.log("in Background update, c: "+this.c);
  }
}

class Game{
  c;
  x;
  timer;
  background;
  constructor(c){
    this.x=0;
    this.c = c;
    console.log("Game constructor, c: " + this.c);
    this.background = new Background(this.c);

  }

  update(){
    console.log("in game update, x: " + this.x);
    this.background.update();
    console.log("line 28");
    this.x++;
    if(this.x > 3000){
      clearInterval(timer);
      console.log("timer stopped");
    }
  }
}

const g = new Game("myCanvas");
//bind is required otherwise it looks for a window object.
    let timer = setInterval(g.update.bind(g), 1000/30);
    console.log("Timer: " +timer);