// Calvin Chu, Benjamin Avrahami
// SoftDev1 pd9
// K07: They lock us in the tower whenever we get caught
// 2020-02-12


var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = 0;
var grow = true;
var id;
var isDrawing = false;

var draw = function(e) {
  //console.log(c);
  ctx.clearRect(0,0,c.height,c.width);
  ctx.beginPath();
  ctx.fillStyle = "#007BA7";
  ctx.arc(c.height/2, c.width/2, r, 0, 2 * Math.PI, true);
  ctx.fill();
  if (grow) {
    r += 1;
    if (r == c.height/2) {
      grow = false;
    }
  }
  else {
    r -= 1;
    if (r == 0) {
      grow = true;
    }
  }
  id = window.requestAnimationFrame(draw);
}

var anim = document.getElementById("anim");
var stop = document.getElementById("stop");
anim.addEventListener("click", function(){if (!isDrawing) {id = window.requestAnimationFrame(draw); isDrawing = true;}});
stop.addEventListener("click", function(){window.cancelAnimationFrame(id); isDrawing = false;});
