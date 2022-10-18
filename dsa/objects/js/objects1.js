// This is a new object
const degrees = {};

degrees['BSc'] = 'Bachelor of Science';
degrees['BA'] = 'Bachelor of Arts';
degrees['MSc'] = 'Master of Science';
degrees['MA'] = 'Master of Arts';
degrees['PhD'] = 'Doctor of Philosophy';
degrees['PhP'] = null;

console.log(degrees['PhP']);

degrees['PhP'] = 'Doctor of PhP';

console.log(degrees['PhP']);


// You can do fibonacci using an object
/**
 *
 * @param {Number} n - The number of fibonacci numbers to return
 * @param {Object} computed - An object containing the computed fibonacci
 * numbers
 * @return {Number} The nth fibonacci number
 */
function fib(n, computed = {0: 0, 1: 1}) {
  if (!(n in computed)) {
    computed[n] = fib(n-1, computed) + fib(n-2, computed);
  }
  return computed[n];
}

function display() {
  document.querySelector("p").innerText = fib(document.querySelector("input").value);
}