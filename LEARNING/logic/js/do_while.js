let letter = "a";
let side = "left"
const left = [];
const right = [];
let num = 5;

do {
    switch (side) {
        case left:
            left.push("*");
            break;
        case right:
            right.push("*");
            break;
    }
    num--;
} while (num > 0);

console.log(left, right);