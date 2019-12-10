var fact = function(args) {
  if (args == 1) return 1;
  else return args * fact(args - 1);
}
var fib = function(args) {
  if (args <= 0) return 0;
  else if (args == 1) return 1;
  else return fib(args - 1) + fib(args - 2);
};
var gcd = function(a, b) {
  if (a == b) return a;
  if (a < b) {
    if (b % a == 0) return a;
    else return gcd(a-1, b);
  }
  else if (a % b == 0) return b;
  else return gcd(a, b-1);
};
