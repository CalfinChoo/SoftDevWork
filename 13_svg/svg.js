// Calvin Chu
// SoftDev1 pd9
// K13 -- Ask Circles [Change || Die]
// 2020-03-30

var c = document.getElementById("canvas");
var clear = document.getElementById("clear");

var radius = 25;
var primaryColor = "blue";
var secondaryColor = "cyan";
var updateDraw = true;
var draw = function() {
  if (updateDraw) {
    for (var i = 0; i < c.childElementCount; i++) {
      if (Math.sqrt(Math.pow(c.children[i].cx.baseVal.value - event.offsetX, 2) +  Math.pow(c.children[i].cy.baseVal.value - event.offsetY, 2)) <= radius) return;
    }
    var circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    circle.setAttributeNS(null, 'cx', event.offsetX);
    circle.setAttributeNS(null, 'cy', event.offsetY);
    circle.setAttributeNS(null, 'r', radius);
    circle.setAttributeNS(null, 'style', 'fill: ' + primaryColor + ';' + ' stroke: black;' );
    circle.addEventListener("click", function(){behave(this)});
    c.appendChild(circle);
  }
  updateDraw = true;
};
var behave = function(e) {
  if (e.style.fill === primaryColor) {
    e.setAttributeNS(null, 'style', 'fill: ' + secondaryColor + ';' + ' stroke: black;' );
  } else if (e.style.fill === secondaryColor) {
    e.setAttributeNS(null, 'style', 'fill: ' + primaryColor + ';' + ' stroke: black;' );
    e.setAttributeNS(null, 'cx', getRandomInt(c.width.baseVal.value));
    e.setAttributeNS(null, 'cy', getRandomInt(c.height.baseVal.value));
    updateDraw = false;
  }
};
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var clean = function() {
  while (c.childElementCount > 0) {
    c.removeChild(c.children[0]);
  }
};

clear.addEventListener("click", function(){clean()});
c.addEventListener("click", function(){draw()});
