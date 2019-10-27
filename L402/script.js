let students = [{
        id: 1,
        name: 'misho'
},

    {
        id: 2,
        name: 'goga'
    }]

function countName(s, n) {
    let nameCount = 0;
    for (let x of s) {
        if (x.name === n) {
            nameCount++;
        }
    }
    return nameCount;

}
let x = countName(students, 'misho');
console.log(x)
console.log(countName(students, 'goga'));
console.log(countName(students, 'tamazi'));
