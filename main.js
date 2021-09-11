var myRectangle = {
  x: 630,
  y: 70,
  width: 50,
  height: 50,
  color: "green"
};



var lastTime = 0;

function calculateFps() {
  var now = new Date,
  fps = 1000 / (now - lastTime);
  lastTime = now;
  return fps;
}

function drawFPS(ms){
  var now = new Date;
  var fps = calculateFps();
  if (now - fpsUpdate > ms) {
    fpsUpdate = now;
    fpsValue = fps;
  }
  context.fillStyle = 'pink';
  context.font = '20px monospace';
  context.fillText(fpsValue.toFixed() + ' fps', 10, 20);
}

function drawBackground(){
  context.drawImage(sky,0,0, canvas.width, canvas.height);
}


function update(){
  var newX = 0;

    if (reverse){
      newX = myRectangle.y-10;
      if(newX > 0+65) {
        myRectangle.y = newX;
        
      } else {
         reverse = false;
      }
    } 
    else {
      newX = myRectangle.x+10;
      if(newX < canvas.width - myRectangle.width-120) {
        myRectangle.x = newX;
      } else {
        reverse = true;
        myRectangle.x= 130;
        myRectangle.y= 420;
      }
      }
}



function draw(){
  context.beginPath();
  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  if(myRectangle.x<550){
  context.fillStyle = 'blue';
  }else{
    context.fillStyle = 'purple';
  }
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'black';
  context.stroke();
}

function animate(time) {
  context.clearRect(0,0,canvas.width,canvas.height);
  drawBackground();
  update();
  draw();
  drawFPS(1000);
  window.requestNextAnimationFrame(animate);
}

var canvas = document.getElementById("animation-screen");
canvas.width = window.innerWidth-25;
canvas.height = window.innerHeight-25;
var context = canvas.getContext("2d");
var reverse = false;
var inverter = true;
var fpsUpdate = 0;
var fpsValue = 0;
var sky = new Image();
    sky.src = "fundo 1.jpg";


window.requestNextAnimationFrame =  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame;

animate(new Date());
