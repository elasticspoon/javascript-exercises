const caesar = function(inputString, shiftFactor) {
    function shiftCharacter (inputChar, shiftFactor) {
        let charUtfVal = inputChar.charCodeAt();
        if (charUtfVal < 65 || charUtfVal > 122 || 
            (charUtfVal > 90 && charUtfVal < 97)) { return inputChar;}
        let startVal = charUtfVal < 97 ? 65 : 97;
        let absShiftFactor = shiftFactor % 26 > 0 ? shiftFactor % 26 : shiftFactor % 26 + 26;
        let shiftedUtfVal = (charUtfVal - startVal + absShiftFactor) % 26 + startVal;

        return String.fromCharCode(shiftedUtfVal);
    }

    let unshiftedArray = inputString.split("");
    for (let i = 0; i < unshiftedArray.length; i++)
    {
        unshiftedArray[i] = shiftCharacter(unshiftedArray[i], shiftFactor);
    }
    return unshiftedArray.join("");


}

module.exports = caesar
