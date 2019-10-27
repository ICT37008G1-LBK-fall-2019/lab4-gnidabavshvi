let students = [
    {
        id: 1,
        name: 'beqa'
    },
    {
        id: 2,
        name: 'jano'
    },
    {
        id: 3,
        name: 'jano'
    },
    {
        id: 4,
        name: 'beqa'
    },
    {
        id: 5,
        name: 'gansxvavebuli saxelebis sia'
    }
];

function myList(variable) {
    let myArray = [];
    for (let x of variable) {
        if (myArray.indexOf(x.name) == -1) {
            myArray.push(x.name);
        }
    }
    return myArray;
}

console.log(myList(students));
