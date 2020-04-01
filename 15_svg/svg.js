// Calvin Chu
// SoftDev1 pd9
// K14: Ask Circles [Change || Die] While Moving, etc.
// 2020-03-31

var c = document.getElementById("canvas");
var clear = document.getElementById("clear");
var m = document.getElementById("move");
var xtra = document.getElementById("xtra");

var radius = 25;
var primaryColor = "blue";
var secondaryColor = "cyan";
var updateDraw = true;
var circleList = [];
var isMoving = false;
var isXtra = false;
var id;

function Circle(ident, x, y, direction, velocity) {
  this.ident = ident;
  this.x = x;
  this.y = y;
  this.direction = direction;
  this.velocity = velocity;
  this.move = function() {
    this.ident.setAttributeNS(null, 'cx', this.x);
    this.ident.setAttributeNS(null, 'cy', this.y);
    if (this.x - radius + Math.cos(this.direction) * this.velocity < 0 || this.x + radius + Math.cos(this.direction) * this.velocity > c.width.baseVal.value) {
      this.direction = Math.PI - this.direction;
    } else {
      this.x += Math.cos(this.direction) * this.velocity;
    }
    if (this.y - radius + Math.sin(this.direction) * this.velocity < 0 || this.y + radius + Math.sin(this.direction) * this.velocity > c.height.baseVal.value) {
      this.direction = 2*Math.PI - this.direction;
    } else {
      this.y += Math.sin(this.direction) * this.velocity;
    }
  }
};

var draw = function(e) {
  if (updateDraw) {
    // for (var i = 0; i < c.childElementCount; i++) {
    //   if (Math.sqrt(Math.pow(c.children[i].cx.baseVal.value - event.offsetX, 2) +  Math.pow(c.children[i].cy.baseVal.value - event.offsetY, 2)) <= radius) return;
    // }
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    var initX = event.offsetX;
    var initY = event.offsetY;
    if (initX - radius <= 0) {initX = radius;}
    else if (initX + radius >= c.width.baseVal.value) {initX = c.width.baseVal.value - radius;}
    if (initY - radius <= 0) {initY = radius;}
    else if (initY + radius >= c.height.baseVal.value) {initY = c.height.baseVal.value - radius;}
    circle.setAttributeNS(null, 'cx', initX);
    circle.setAttributeNS(null, 'cy', initY);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'style', 'fill: ' + primaryColor + ';' + ' stroke: black;' );
    circle.addEventListener("click", function(e){behave(e, this)});
    c.appendChild(circle);
    circleList.push(new Circle(circle, initX, initY, Math.random() * 2 * Math.PI, 1));
  }
  updateDraw = true;
};

var move = function() {
  for (var i = 0; i < circleList.length; i++) {
    circleList[i].move();
  }
  isMoving = true;
  id = window.requestAnimationFrame(move);
};

var doXtra = function() {
  if (!isXtra) {
    for (var i = 0; i < circleList.length; i++) {
      circleList[i].ident.setAttributeNS(null, 'style', 'fill: rgb(' + getRandomInt(255) + "," + getRandomInt(255) + "," + getRandomInt(255) + ');' + ' stroke: black;' );
    }
    isXtra = true;
  } else {
    for (var i = 0; i < circleList.length; i++) {
      circleList[i].ident.setAttributeNS(null, 'style', 'fill: ' + primaryColor + ';' + ' stroke: black;' );
    }
    isXtra = false;
  }
}

var behave = function(ev, e) {
  if (e.style.fill === primaryColor) {
    e.setAttributeNS(null, 'style', 'fill: ' + secondaryColor + ';' + ' stroke: black;' );
  } else if (e.style.fill === secondaryColor) {
    e.setAttributeNS(null, 'style', 'fill: ' + primaryColor + ';' + ' stroke: black;' );
    for (var i = 0; i < circleList.length; i++) {
      if (e === circleList[i].ident) {
        circleList[i].x = getRandomIntervalInt(radius, c.width.baseVal.value - radius);
        circleList[i].y = getRandomIntervalInt(radius, c.height.baseVal.value - radius);
      }
    }
    updateDraw = false;
  }
  ev.stopPropagation();
};


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getRandomIntervalInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var clean = function() {
  while (c.childElementCount > 0) {
    c.removeChild(c.children[0]);
  }
};

clear.addEventListener("click", function(e){clean(); window.cancelAnimationFrame(id); isMoving = false; isXtra = false;});
c.addEventListener("click", function(e){draw(e)});
m.addEventListener("click", function(e){if (isMoving) {window.cancelAnimationFrame(id); isMoving = false;} else {move();}});
xtra.addEventListener("click", function(e){doXtra(isXtra)});
