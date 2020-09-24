const repeatString = function(stringToRepeat, numberRepeats) {
    let resultingString = '';
    if (numberRepeats < 0) return 'ERROR';
    for (let i = 0; i < numberRepeats; i++)
    {
        resultingString += stringToRepeat;
    }
    return resultingString;
}

module.exports = repeatString
