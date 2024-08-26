let bill = 275;

let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

let total = bill + tip;

console.log(`the bill was ${bill}, the tip was ${tip} , total is ${total}`)