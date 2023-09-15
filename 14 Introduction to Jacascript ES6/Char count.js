const prompt = require("prompt-sync")();

var text = prompt("Enter your text: ");



console.log("You have written " + text.length + " characters, you have " + (140 - text.length) + " characters left.");