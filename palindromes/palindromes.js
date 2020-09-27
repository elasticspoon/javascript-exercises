const palindromes = function(givenString) {
    let lettersOnlyArray = givenString.match(/(\w+)+/g).join("").split("");
    let stringForwards = lettersOnlyArray.join("").toLowerCase();
    lettersOnlyArray.reverse();
    let stringReverse = lettersOnlyArray.join("").toLowerCase();
    return stringForwards == stringReverse;
}

module.exports = palindromes
