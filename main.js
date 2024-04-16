#!/usr/bin/env node
import inquirer from "inquirer";
// declare a const "answers" and assign to the result of inquirer .prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word:"
    }
]);
const words = answers.sentence.trim().split(" ");
// print the array of words to the console
console.log(words);
// print the word count of the sentence to console
console.log(`Your sentence word count is ${words.length}`);
