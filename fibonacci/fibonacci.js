const fibonacci = function(fibNumber) {
    if (fibNumber < 0) {return "OOPS";}
    else if (fibNumber == 1 || fibNumber == 2) { return 1;}
    else {
        return fibonacci(fibNumber - 1) + fibonacci(fibNumber - 2);
    }
}

module.exports = fibonacci
