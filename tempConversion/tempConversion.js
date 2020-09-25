const ftoc = function(tempInC) {
  let rawCValue = (tempInC - 32) * 5 / 9;
  let roundedCValue = Math.ceil(rawCValue * 10) / 10;
  return roundedCValue;
}

const ctof = function(tempInC) {
  let rawFValue = tempInC * 9 / 5 + 32;
  let roundedFValue = Math.ceil(rawFValue * 10) / 10;
  return roundedFValue;
}

module.exports = {
  ftoc,
  ctof
}
