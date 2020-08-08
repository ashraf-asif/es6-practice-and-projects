//* boolean value will be false, if it's:
// false
// 0
// ""
// undefined
// null
// NaN

//* boolean value will be true, if it's:
// true
// "0"
// " "
// []
// {}

//* result will be undefined, if:
// defined value is undefined
// variable has no value
// function doesn't return anything
// no passed value for a parameter in function
// used property isn't declared in object
//* result will be null, if:
// defined value is null

const numbers = [2, 5, 7, 3, 5, 4, 9];

//* map
// complicated way
const allNumbers = numbers.map(function (element, index, array) {
	console.log(element, index, array); // index returns the value no. and array returns the whole array
	return element; // returns all the values individually
});
console.log("complicated way: " + allNumbers);
//easiest way
const allNumbers2 = numbers.map((x) => x);
console.log("easiest way: " + allNumbers2);

//* filter
const allNumbers3 = numbers.filter((x) => x < 5); // returns all matching elements of matching condition
console.log(allNumbers3);

//* find
const allNumbers4 = numbers.find((x) => x < 5);
console.log(allNumbers4); // returns the first element of matching condition


//* map in object
const students = [
	{ id: 1, name: "John", age: 16 },
	{ id: 2, name: "Jane", age: 14 },
	{ id: 3, name: "Tom", age: 17 },
	{ id: 4, name: "Justin", age: 15 },
];
// complicated way
const names = [];
for (let i = 0; i < students.length; i++) {
  const studentName = students[i].name;
  names.push(studentName);
}
console.log(names);
// easiest way
const studentName = students.map((student) => student.name);
console.log(studentName);

//* filter in object
const studentId = students.filter((student) => student.id < 3);
console.log(studentId);

//* find in object
const studentAge = students.find((student) => student.age < 15);
console.log(studentAge);