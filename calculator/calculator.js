function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (inputArray) {
	let cumulativeSum = 0;
	for (let i = 0; i < inputArray.length; i++)
	{
		cumulativeSum += inputArray[i];
	}
	return cumulativeSum;
}

function multiply (inputArray) {
	let cumulativeMultiple = 1;
	for (let i = 0; i < inputArray.length; i++)
	{
		cumulativeMultiple *= inputArray[i];
	}
	return cumulativeMultiple;
}

function power(a, b) {
	return Math.pow(a, b);
}

function factorial(input) {
	if (input < 1) { return 1;}
	else {
		return input * factorial(input - 1);
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}