const prompt = require("prompt-sync")();

var name = prompt("Enter your name: ");

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.slice(0,1).toUpperCase() + name.slice(1,name.length).toLocaleLowerCase());