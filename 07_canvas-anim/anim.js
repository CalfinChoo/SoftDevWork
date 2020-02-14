// Calvin Chu, Benjamin Avrahami
// SoftDev1 pd9
// K07: They lock us in the tower whenever we get caught
// 2020-02-12

//var logo = new Image();
//logo.src = "logo_dvd.jpg";
//ctx.drawImage(?);

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = 0; //keeps trqack of radius
var grow = true; //decides to shrink or grow circle
var id; //stores id from requestAnimationFrame
var isDrawing = false; //tells if circle is / is not currently being drawn

var draw = function() {
  ctx.clearRect(0,0,c.height,c.width); // clears canvas
  ctx.beginPath();
  ctx.fillStyle = "#007BA7";
  ctx.arc(c.height/2, c.width/2, r, 0, 2 * Math.PI, true); //draws circle of radius r in the center
  ctx.fill();
  if (grow) { // increases circle radius with each call to draw
    r += 1;
    if (r == c.height/2) { // circle hits border -> grow boolean flips
      grow = false;
    }
  }
  else { // decreases  circle radius with each call to draw
    r -= 1;
    if (r == 0) { // circle shrinks to nothing -> grow boolean flips
      grow = true;
    }
  }
  id = window.requestAnimationFrame(draw);
}

var anim = document.getElementById("anim");
var stop = document.getElementById("stop");
anim.addEventListener("click", function(){if (!isDrawing) {draw(); isDrawing = true;}}); // calls draw if not already drawing
stop.addEventListener("click", function(){window.cancelAnimationFrame(id); isDrawing = false;}); // cancels animation and turns drawing off
