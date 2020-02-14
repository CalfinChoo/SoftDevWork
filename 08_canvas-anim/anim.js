// Calvin Chu, Benjamin Avrahami
// SoftDev1 pd9
// K08: What is it saving the screen from?
// 2020-02-13


var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var r = 0; //keeps trqack of radius
var grow = true; //decides to shrink or grow circle
var id; //stores id from requestAnimationFrame
var isDrawing = false, isMoving = false; //tells if circle is / is not currently being drawn

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

var x, y, direction, velocity = 1, width = 171, height = 87;
var img = new Image();
img.src = 'logo.png';

var move = function() {
  ctx.clearRect(0,0,c.height,c.width);
  ctx.drawImage(img, x - width/2, y - height/2, width, height);
  if (x - width/2 + Math.cos(direction) * velocity < 0 || x + width/2 + Math.cos(direction) * velocity > c.width) {
    direction = Math.PI - direction;
  }
  else {
    x += Math.cos(direction) * velocity;
  }
  if (y - height/2 + Math.sin(direction) * velocity < 0 || y + height/2 + Math.sin(direction) * velocity > c.height) {
    direction = 2*Math.PI - direction;
  }
  else {
    y += Math.sin(direction) * velocity;
  }
  id = window.requestAnimationFrame(move);
}

var anim = document.getElementById("anim");
var stop = document.getElementById("stop");
var movie = document.getElementById("movie");
anim.addEventListener("click", function(){if (!isDrawing) {window.cancelAnimationFrame(id); draw(); isDrawing = true; isMoving = false}}); // calls draw if not already drawing
movie.addEventListener("click", function(){if (!isMoving) {window.cancelAnimationFrame(id); x = Math.floor(Math.random() * (c.width - 2*width + 1) + width); y = Math.floor(Math.random() * (c.height - 2*height + 1) + height); direction = Math.random() * 2 * Math.PI; move(); isDrawing = false; isMoving = true;}});
stop.addEventListener("click", function(){window.cancelAnimationFrame(id); isDrawing = false; isMoving = false;}); // cancels animation and turns drawing off
