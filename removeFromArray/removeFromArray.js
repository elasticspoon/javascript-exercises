const removeFromArray = function(targetArray, ...removalTargets) {
    let arraySansTargets = targetArray;
    for (let i = 0; i < removalTargets.length; i++) {
        const equalArrayElement = element => element === removalTargets[i];
        let indexOfRemovalTarget = arraySansTargets.findIndex(equalArrayElement);
        if (indexOfRemovalTarget != -1) {
            arraySansTargets.splice(indexOfRemovalTarget, 1);
        }
    }
    return arraySansTargets;
}

module.exports = removeFromArray
