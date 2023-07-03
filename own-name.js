var student = {
        ID: 838,
        Name: 'Sohag hossain',
        Address: 'Mirzapur',
        Department: 'CSE',
        Bike: 3,
        Friends: ['Nayem', 'Sakur', 'Jahir', 'Asif', 'Shishir']

    }
    // for (var i = 0; i < student.Friends.length; i++) {
    //     var elements = student.Friends[i];
    //     console.log(elements);
    // }

var keys = Object.keys(student);
var values = Object.values(student);
// console.log(values);
// console.log(keys);

for (i = 0; i < keys.length; i++) {
    var keysName = keys[i];
    var values = student[keysName];
    console.log(keysName, values);
}