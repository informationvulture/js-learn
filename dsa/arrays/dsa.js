// This is an array
let arr1 = [1,2,3,4,5];
document.getElementById("list").innerHTML = arr1;

function do_push() {
    // Push adds an element to the end of an array.

    let value = arr1[arr1.length-1] + 1;
    arr1.push(value);
    document.getElementById("list").innerHTML = arr1;
    document.getElementById("status").innerHTML = `Done push: ${value}`;
}

function do_unshift() {
    // Unshift adds an element to the start of an array.

    let value = arr1[0] - 1;
    arr1.unshift(value);
    document.getElementById("list").innerHTML = arr1;
    document.getElementById("status").innerHTML = `Done unshift: ${value}`;
}

function do_pop() {
    // Pop removes the last element of an array
    // and returns it.

    val = arr1.pop();
    document.getElementById("list").innerHTML = arr1;
    document.getElementById("status").innerHTML = `Done pop: ${val}`;
}

function do_shift() {
    // Shift removes the first element of an array
    // and returns it.

    let val = arr1.shift();
    document.getElementById("list").innerHTML = arr1;
    document.getElementById("status").innerHTML = `Done shift: ${val}`;
}

const el = document.getElementById("pop");
el.addEventListener("click", do_pop, false);

const el2 = document.getElementById("shift");
el2.addEventListener("click", do_shift, false);

const el3 = document.getElementById("push");
el3.addEventListener("click", do_push, false);

const el4 = document.getElementById("unshift");
el4.addEventListener("click", do_unshift, false);
