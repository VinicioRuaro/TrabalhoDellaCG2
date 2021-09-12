var myRectangle = {
  x: 440,
  y: 315,
  width: 130,
  height: 100,
};


var myRectangle2 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle3 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
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
  context.fillStyle = 'red';
  context.font = '20px monospace';
  context.fillText(fpsValue.toFixed() + ' fps', 10, 20);
}

function drawBackground(){
  context.drawImage(sky,0,0, canvas.width, canvas.height);
}


function update(){
  myRectangle.x= x[Math.floor(Math.random() * 10)]
  myRectangle.y=y[Math.floor(Math.random() * 6)]
  myRectangle2.x= x[Math.floor(Math.random() * 10)]
  myRectangle2.y=y[Math.floor(Math.random() * 6)]
  myRectangle3.x= x[Math.floor(Math.random() * 10)]
  myRectangle3.y=y[Math.floor(Math.random() * 6)]
}



function draw(){
  context.beginPath();

  context.rect(myRectangle.x, myRectangle.y, myRectangle.width, myRectangle.height);
  context.rect(myRectangle3.x, myRectangle3.y, myRectangle3.width, myRectangle3.height);
  context.rect(myRectangle2.x, myRectangle2.y, myRectangle2.width, myRectangle2.height);
  context.fillStyle = 'broonw';
  context.fill();
  context.lineWidth = 1;
  context.strokeStyle = 'blue';
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
    sky.src = "Ilisão.jpg";

var andar= new Image();
    andar.scr= "wandar.jpg";

var x =[-59,107,274,440,607,773,940,1110,1276];
var y =[-65,61,186,315,440,567];


window.requestNextAnimationFrame =  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame;

animate(new Date());
