const input = prompt("Input integer number");
const num = parseInt(input);

let output;

if (num === 0) {
    output = "zero integer number";
} else if (num % 2 === 0) {
    output = "even integer number";
} else {
    output = "odd integer number";
}

alert(output);