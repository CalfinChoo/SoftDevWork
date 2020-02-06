var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var option = 0; // 0 (default = dot)
                // 1 (rect)
var isDrawing = false;

var swap = function(){
    if (option == 0){
      option = 1;
    }
    else{
      option = 0;
    }
};

var draw = function(d, mouse){
  isDrawing = d;
};

var move = function(){
  if (isDrawing) {
    if (option == 1) ctx.fillRect(mouse.clientX, mouse.clientY, 1, 1);
  }
};
// var drawRect = function(x, y) {
//   if (option == 1) {
//
//   }
// };


var clear = document.getElementById("clear");
clear.addEventListener("click", function(){ctx.clearRect(0, 0, c.width, c.height);});
var toggle = document.getElementById("toggle");
toggle.addEventListener("click", swap());
c.addEventListener("mousedown", function(){draw(true, this)});
window.addEventListener("mouseup", function(){draw(false, this)});
