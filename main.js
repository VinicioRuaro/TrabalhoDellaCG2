var myRectangle1 = {
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

var myRectangle4 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle5 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle6 = {
  x: 440,
  y: 315,
  width: 130,
  height: 100,
};


var myRectangle7 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle8 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle9 = {
  x: 610,
  y: 63,
  width: 130,
  height: 100,
};

var myRectangle10 = {
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
  context.fillText(fpsValue.toFixed() + ' fps \n' + qtq , 10, 20);
}

function drawBackground(){
  context.drawImage(sky,0,0, canvas.width, canvas.height);
}


function update(){
  myRectangle1.x= x[Math.floor(Math.random() * 10)]
  myRectangle1.y=y[Math.floor(Math.random() * 6)]
  myRectangle2.x= x[Math.floor(Math.random() * 10)]
  myRectangle2.y=y[Math.floor(Math.random() * 6)]
  myRectangle3.x= x[Math.floor(Math.random() * 10)]
  myRectangle3.y=y[Math.floor(Math.random() * 6)]
  myRectangle4.x= x[Math.floor(Math.random() * 10)]
  myRectangle4.y=y[Math.floor(Math.random() * 6)]
  myRectangle5.x= x[Math.floor(Math.random() * 10)]
  myRectangle5.y=y[Math.floor(Math.random() * 6)]
  myRectangle6.x= x[Math.floor(Math.random() * 10)]
  myRectangle6.y=y[Math.floor(Math.random() * 6)]
  myRectangle7.x= x[Math.floor(Math.random() * 10)]
  myRectangle7.y=y[Math.floor(Math.random() * 6)]
  myRectangle8.x= x[Math.floor(Math.random() * 10)]
  myRectangle8.y=y[Math.floor(Math.random() * 6)]
  myRectangle9.x= x[Math.floor(Math.random() * 10)]
  myRectangle9.y=y[Math.floor(Math.random() * 6)]
  myRectangle10.x= x[Math.floor(Math.random() * 10)]
  myRectangle10.y=y[Math.floor(Math.random() * 6)]
}

function clique(){
  cor =Math.floor(Math.random() * 6)
}

function aumentar(){
  if(qtq<10){
  qtq++
  }
}

function dimuir(){
  if(qtq>0){
  qtq--
  }
}

function draw(){
  context.beginPath();
  if(qtq>0){
    context.rect(myRectangle1.x, myRectangle1.y, myRectangle1.width, myRectangle1.height);
    if(qtq>1){
      context.rect(myRectangle2.x, myRectangle2.y, myRectangle2.width, myRectangle2.height);
      if(qtq>2){
        context.rect(myRectangle3.x, myRectangle3.y, myRectangle3.width, myRectangle3.height);
        if(qtq>3){
          context.rect(myRectangle4.x, myRectangle4.y, myRectangle4.width, myRectangle4.height);
          if(qtq>4){
            context.rect(myRectangle5.x, myRectangle5.y, myRectangle5.width, myRectangle5.height);
            if(qtq>5){
              context.rect(myRectangle6.x, myRectangle6.y, myRectangle6.width, myRectangle6.height);
              if(qtq>6){
                context.rect(myRectangle7.x, myRectangle7.y, myRectangle7.width, myRectangle7.height);
                if(qtq>7){
                  context.rect(myRectangle8.x, myRectangle8.y, myRectangle8.width, myRectangle8.height);
                  if(qtq>8){
                    context.rect(myRectangle9.x, myRectangle9.y, myRectangle9.width, myRectangle9.height);
                    if(qtq>9){
                      context.rect(myRectangle10.x, myRectangle10.y, myRectangle10.width, myRectangle10.height);
                      
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  
  
  
  if(cor==0){
    context.fillStyle = 'red';
  }else if(cor==1){
    context.fillStyle = 'blue';
  }else if(cor==2){
    context.fillStyle = 'pink';
  }else if(cor==3){
 
    context.fillStyle= 'yellow';
  }else if(cor==4){
    context.fillStyle= 'green';
  }else if(cor==5){
    context.fillStyle = 'black';
  }else if(cor==6){
    context.fillStyle = 'white';
  }
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
var qtq =3;
var sky = new Image();
    sky.src = "Ilisão.jpg";

var andar= new Image();
    andar.scr= "wandar.jpg";

var cor=0;

var x =[-59,107,274,440,607,773,940,1110,1276];
var y =[-65,61,186,315,440,567];


window.requestNextAnimationFrame =  window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame;

animate(new Date());

document.getElementById('btnGray').addEventListener('click', clique);
document.getElementById('btnGrayb').addEventListener('click', aumentar);
document.getElementById('btnGraya').addEventListener('click', dimuir);
