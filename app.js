const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

module.exports = { sum };





const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

module.exports = { sum, fromEuroToDollar }

const fromDollarToYen = function(valueInDollar){
    // convertimos el valor a dolares
    let valueInYen = valueInDollar  * 153.48;
    // retornamos el valor
    return valueInYen;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen }


const fromYenToPound = function(valueInYen){
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 122.784;
    // retornamos el valor
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen , fromYenToPound }