console.log("Hello World")

const sum = (a, b) => {
    return a + b;
}

console.log(sum(7, 3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = (amountInDollars) => {
    return  (oneEuroIs["JPY"] * amountInDollars) / oneEuroIs["USD"]
}
const fromEuroToDollar = (amountInEuros) => {
    return amountInEuros * oneEuroIs["USD"];

}
const fromYenToPound = (amountInYens) => {
    return  (oneEuroIs["GBP"] * amountInYens) / oneEuroIs["JPY"]

}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
