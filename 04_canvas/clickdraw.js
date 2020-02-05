var c = document.getElementById("slate");
var ctx = c.getContext('2d');
var option = 0; // 0 (default = dot)
// 1 (rect)

var swap = function(){
    if (option == 0){
      option = 1;
    }
    else{
      option = 0;
    }
};

var draw = function(){
  if (option == 0) ctx.fillRect(window.event.clientX, window.event.clientY, 1, 1);
  // if (option == 1) drawRect(window.event.clientX, window.event.clientY);
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
c.addEventListener("mousedown", draw());
c.addEventListener("mouseup", draw());
