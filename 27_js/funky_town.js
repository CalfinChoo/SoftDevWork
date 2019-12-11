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
