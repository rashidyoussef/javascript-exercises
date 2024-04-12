const findTheOldest = function(people) {
const ordenado = people.sort(function(a, b){
const lastguy = (a.yearOfDeath - a.yearOfBirth)
const nextguy = (b.yearOfDeath - b.yearOfBirth)
return lastguy > nextguy ? 1 : -1
})
return oldest
};

// Do not edit below this line
module.exports = findTheOldest;


/*describe('findTheOldest', () => {
  test('finds the person with the greatest age!', () => {
    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]
    expect(findTheOldest(people).name).toBe('Ray');
*/