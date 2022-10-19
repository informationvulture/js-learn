// This is an array
const arr1 = [1, 2, 3, 4, 5];
document.getElementById("list").innerHTML = arr1;

/**
 * @description This function adds an element to the end of an array.
 */
function doPush() {
  // Push adds an element to the end of an array.

  const value = arr1[arr1.length-1] + 1;
  arr1.push(value);
  document.getElementById("list").innerHTML = arr1;
  document.getElementById("status").innerHTML = `Done push: ${value}`;
}

/**
 * @Description This function adds an element to the beginning of an array.
 */
function doUnshift() {
  // Unshift adds an element to the start of an array.

  const value = arr1[0] - 1;
  arr1.unshift(value);
  document.getElementById("list").innerHTML = arr1;
  document.getElementById("status").innerHTML = `Done unshift: ${value}`;
}

/**
 * @description This function removes the last element of an array
 */
function doPop() {
  // Pop removes the last element of an array
  // and returns it.

  val = arr1.pop();
  document.getElementById("list").innerHTML = arr1;
  document.getElementById("status").innerHTML = `Done pop: ${val}`;
}

/**
 * @description This function removes the first element of an array
 */
function doShift() {
  // Shift removes the first element of an array
  // and returns it.

  const val = arr1.shift();
  document.getElementById("list").innerHTML = arr1;
  document.getElementById("status").innerHTML = `Done shift: ${val}`;
}

const el = document.getElementById("pop");
el.addEventListener("click", doPop, false);

const el2 = document.getElementById("shift");
el2.addEventListener("click", doShift, false);

const el3 = document.getElementById("push");
el3.addEventListener("click", doPush, false);

const el4 = document.getElementById("unshift");
el4.addEventListener("click", doUnshift, false);
