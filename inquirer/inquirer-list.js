#! /usr/bin/env node
/**
 * inquirer-list.js
 */

var inquirer = require('inquirer');

var preguntas = [
  {
    type: "list",
    name: "size",
    message: "What size do you need",
    choices: ["Jombo", "Large", "Standard", "Medium", "Small", "Micro"]
  }
];
inquirer.prompt( preguntas, function(respuestas) {
  console.log(respuestas);
});
