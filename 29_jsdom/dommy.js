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
  h.innerHTML = e;
};
var removeItem = function(e) {
  var i = document.getElement(e);
  i.remove();
};

var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function(e){changeHeading(e.target.innerText)});
  lis[i].addEventListener('mouseout', function(e){changeHeading("Hello World!")});
  lis[i].addEventListener('click', function(e){console.log(e.target)});
}

var count = 0;
var fib = function(n) {
  if (n < 2) {
    return 1;
  }
  else return fib(n-1) + fib(n-2);
};
var addFib = function(e) {
  console.log(e);
  count++;
  console.log(fib(count));
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  item.innerHTML = fib(count);
  list.appendChild(item);
};
var addFib2 = function(e) {
  console.log(e);

};
var fb = document.getElementById("fb");
fb.addEventListener('click', function(e){addFib(e)});
// button.addEventListener('click', function(e) {console.log(e);});
