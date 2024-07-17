import inquirer from "inquirer";
let myBalanace = 5000;
let myPin = 1234;
console.log("Welcome to code with Muzamil -- ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct");
    // console.log(`Current Balance in Account is ${myBalanace}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Select an Option",
            choices: ["Withdraw Ammount", "Check Balance", "Save Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Ammount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Amount to Withdraw: "
            }
        ]);
        if (amountAns.amount > myBalanace) {
            console.log("Insufficient Balanace");
        }
        else {
            myBalanace -= amountAns.amount;
            console.log(`${amountAns.amount} withdraw Succesfully `);
            console.log(`Your remaining amount balanace is: ${myBalanace}`);
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(`Your current blanace is : ${myBalanace}`);
    }
    else if (operationAns.operation === "Save Balance") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter Amount to Deposit: "
            }
        ]);
        myBalanace += amountAns.amount;
        console.log(`${amountAns.amount} Saved Successfully`);
        console.log(`Your balance is ${myBalanace}`);
    }
}
else {
    console.log("Pin is Incorrect ");
}
