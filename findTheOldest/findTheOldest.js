let findTheOldest = function(arrayOfPeople) {
    function findAge(person) {
        return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth
                : 2020 - person.yearOfBirth;
    }
    return arrayOfPeople.sort((a, b) => findAge(a) < findAge(b))[0]
}

module.exports = findTheOldest
