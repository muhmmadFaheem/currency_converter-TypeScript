#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currency = {
    USD: 1,
    PKR: 280,
    KRW: 1350.23,
    QAR: 3.62,
    GBP: 1.26,
    EUR: 0.86
};
let answer = await inquirer.prompt([{
        name: "from",
        type: "list",
        message: "Enter From Currency",
        choices: ["USD", "PKR", "GBP", "EUR", "QAR", "KRW"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to Currency",
        choices: ["USD", "PKR", "GBP", "EUR", "QAR", "KRW"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter Amount For Convert",
    },
]);
let fromAmount = currency[answer.from];
let toAmount = currency[answer.to];
let amount = answer.amount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log("Converted Amount of Currency : " + chalk.redBright(convertedAmount));
