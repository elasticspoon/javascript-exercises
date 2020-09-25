const sumAll = function(integerA, integerB) {
    if (integerA < 0 || integerB < 0) return "ERROR";
    if (typeof integerA != "number" || typeof integerB != "number") return "ERROR";
    const lowerInt = integerA < integerB ? integerA : integerB;
    const higherInt = integerA > integerB ? integerA : integerB;
    
    let cumulativeSum = 0;

    for (let i = lowerInt; i <= higherInt; i++) {
        cumulativeSum += i;
    }
    return cumulativeSum;
}

module.exports = sumAll
