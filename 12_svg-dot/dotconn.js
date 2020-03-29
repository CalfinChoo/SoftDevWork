// Calvin Chu
// SoftDev1 pd9
// K12 -- Connect the Dots
// 2020-03-29

var c = document.getElementById("canvas");
var clear = document.getElementById("clear");

var lastPoint = []
var draw = function() {
  var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  circle.setAttributeNS(null, 'cx', event.offsetX);
  circle.setAttributeNS(null, 'cy', event.offsetY);
  circle.setAttributeNS(null, 'r', 5);
  circle.setAttributeNS(null, 'style', 'fill: black; stroke: black;' );

  if (lastPoint.length == 0) lastPoint = [event.offsetX, event.offsetY]
  else {
    var line = document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1', lastPoint[0]);
    line.setAttribute('y1', lastPoint[1]);
    line.setAttribute('x2', event.offsetX);
    line.setAttribute('y2', event.offsetY);
    line.setAttribute('stroke', "black");
    lastPoint = [event.offsetX, event.offsetY];
    c.appendChild(line);
  }
    c.appendChild(circle);
};
var clean = function() {
  while (c.childElementCount > 0) {
    c.removeChild(c.children[0]);
  }
  lastPoint = [];
};

clear.addEventListener("click", function(){clean()});
c.addEventListener("mousedown", function(){draw()});
