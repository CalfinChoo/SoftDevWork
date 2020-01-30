// Calvin Chu
// SoftDev1 pd9
// K27 -- Sequential Progression II: Electric Boogaloo
// 2019-12-11
var fact = function(args) {
  if (args == 1) return 1;
  else return args * fact(args - 1);
}
var fib = function(args) {
  if (args <= 0) return 0;
  else if (args == 1) return 1;
  else return fib(args - 1) + fib(args - 2);
};
var gcdH = function(a, b, c) {
  if (a % c == 0 && b % c == 0) return c;
  else return gcdH(a, b, c-1);
};
var gcd = function(a, b) {
  if (a == b) return a;
  else if (a < b) return gcdH(a, b, a);
  else return gcdH(a, b, b);
};
students = ['Henry', 'Sydney', 'Calvin']
var randomStudent = function(){
  var index = Math.floor(Math.random() * students.length);
  return students[index];
};

var f1 = document.getElementById("one");
var f2 = document.getElementById("two");
var g = document.getElementById("tre");
var r = document.getElementById("for");

f1.addEventListener("click", factEx);
f2.addEventListener("click", fibEx);
g.addEventListener("click", gcdEx);
r.addEventListener("click", randEx);

function factEx(){
  var a = fact(10);
  console.log(a);
  document.getElementById("result").innerHTML = "Result: " + a;
}
function fibEx(){
  var a = fib(10);
  console.log(a);
  document.getElementById("result").innerHTML = "Result: " + a;
}
function gcdEx(){
  var a = gcd(10, 52);
  console.log(a);
  document.getElementById("result").innerHTML = "Result: " + a;
}
function randEx(){
  var a = randomStudent();
  console.log(a);
  document.getElementById("result").innerHTML = "Result: " + a;
}
