let students = [
    {
        id: 1,
        name: 'lasha'
    },
    {
        id: 2,
        name: 'nino'
    },
    {
        id: 3,
        name: 'nika'
    },
    {
        id: 4,
        name: 'gio'
    },
    {
        id: 5,
        name: 'vazha'
    }
];

function myList(array) {
    let myArray = [];
    let map = {};
    let num = 0;
    for (let x of array) {


        if (map[x.name] == null) {
            map[x.name] = 0;

        }
        map[x.name] += 1;
    }


    return map;
}

console.log(myList(students));
