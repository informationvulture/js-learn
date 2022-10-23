
const choice = prompt("Enter a language:");

switch (choice) {
  case "Python":
  case "python":
    console.log("Python is a great language!");
    document.getElementById("result").innerHTML = "Python is a great language!";
    break;
  case "JavaScript":
  case "javascript":
    console.log("JavaScript is a great language!");
    document.getElementById("result").innerHTML = "JavaScript!";
    break;
  default:
    console.log("I don't know that language!");
    document.getElementById("result").innerHTML = "I don't know that language!";
    break;
}
