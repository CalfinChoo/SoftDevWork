var button = document.getElementById("b");
button.addEventListener('click', function(e){addItem(e)});

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  list.appendChild(item);
};
var changeHeading = function(e) {
  var h = document.getElementById("h");
  h.innerHTML = e.target.innerText;
}
var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function(e){console.log(e.target.innerText)});
}
// button.addEventListener('click', function(e) {console.log(e);});
