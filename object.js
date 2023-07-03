var student = {
    id: 112,
    name: "maliha",
    class: 16,
    marks: 60,
    books: 56,
    shose: 3
}

var proparties = Object.keys(student);
// var propartiesValues = Object.values(student);

// console.log(proparties);
// console.log(propartiesValues);

// for loop

for (var i = 0; i < proparties.length; i++) {
    var propartiesName = proparties[i];

    var value = student[propartiesName];
    console.log(propartiesName, value);
}

// for in loop

for (var propartiesName in student) {
    const value = student[proparties];
    console.log(propartiesName.value)
}