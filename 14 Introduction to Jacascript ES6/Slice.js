const prompt = require("prompt-sync")();

var name = prompt("Enter your name: ");

console.log(name.slice(0,-2));