let findTheOldest = function(arrayOfPeople) {
    const calculateAgeOfPerson = function (person) {
        if (person.yearOfDeath) { person.age = person.yearOfDeath - person.yearOfBirth;}
        else { person.age = 2020 - person.yearOfBirth; }
    }
    arrayOfPeople.forEach(calculateAgeOfPerson);
    return arrayOfPeople.sort((a, b) => a.age < b.age)[0]
}

module.exports = findTheOldest
