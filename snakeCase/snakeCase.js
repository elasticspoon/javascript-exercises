const snakeCase = function(inputString) {
    if (inputString.search(/\W/) != -1) {
        return inputString.match(/(\w+)/g).join("_").toLowerCase();
    }
    else {
        let firstWord = inputString.match(/[a-z]+/).join("");
        let restOfWord = inputString.match(/[A-Z][a-z]*/g) ? 
        inputString.match(/[A-Z][a-z]*/g).join("_").toLowerCase() : "";
        return restOfWord == "" ? firstWord : firstWord + "_" + restOfWord;
    }
    
}

module.exports = snakeCase
