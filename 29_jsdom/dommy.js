// Calvin Chu
// SoftDev1 pd9
// K29 -- Sequential Progression III: Season of the Witch
// 2019-12-12

var button = document.getElementById("b");
button.addEventListener('click', function(e){addItem(e)});

var addItem = function(e) {
  var list = document.getElementById("thelist");
  var item = document.createElement("li");
  item.innerHTML = "WORD";
  list.appendChild(item);
  item.addEventListener('mouseover', function(e){changeHeading(e.target.innerText)});
  item.addEventListener('mouseout', function(e){changeHeading("Hello World!")});
  item.addEventListener('click', function(e){removeItem(e.target); changeHeading("Hello World!");});
};
var changeHeading = function(e) {
  var h = document.getElementById("h");
  h.innerHTML = e;
};
var removeItem = function(e) {
  var list = document.getElementById("thelist");
  var items = document.getElementsByTagName("li");
  var rem;
  for (var i = 0; i < items.length; i++) {
    if (items[i] == e) rem = items[i];
  }
  list.removeChild(rem);
};

var lis = document.getElementsByTagName("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener('mouseover', function(e){changeHeading(e.target.innerText)});
  lis[i].addEventListener('mouseout', function(e){changeHeading("Hello World!")});
  lis[i].addEventListener('click', function(e){removeItem(e.target); changeHeading("Hello World!");});
}

var count = 0;
var fib = function(n) {
  if (n == 0) return 0;
  else if (n < 2) return 1;
  else return fib(n-1) + fib(n-2);
};
var addFib = function(e) {
  console.log(e);
  console.log(fib(count));
  var list = document.getElementById("fiblist");
  var item = document.createElement("li");
  item.innerHTML = fib(count);
  list.appendChild(item);
  count++;
};
var addFib2 = function(e) {
  if (count < 3) return addFib(e);
  var list = document.getElementById("fiblist");
  var nums = document.getElementById("fiblist").childNodes;
  var item = document.createElement("li");
  var sum = parseInt(nums[nums.length - 1].textContent) + parseInt(nums[nums.length - 2].textContent);
  console.log(e);
  console.log(sum);
  item.innerHTML = sum;
  list.appendChild(item);
  count++;
};
var fb = document.getElementById("fb");
//fb.addEventListener('click', function(e){addFib(e)});
fb.addEventListener('click', function(e){addFib2(e)});
// button.addEventListener('click', function(e) {console.log(e);});
