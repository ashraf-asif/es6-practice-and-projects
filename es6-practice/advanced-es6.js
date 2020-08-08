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

console.log("\n");

//* filter
const allNumbers3 = numbers.filter((x) => x < 5); // returns all matching elements of matching condition
console.log(allNumbers3);

console.log("\n");

//* find
const allNumbers4 = numbers.find((x) => x < 5);
console.log(allNumbers4); // returns the first element of matching condition

console.log("\n");


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

console.log("\n");

//* filter in object
const studentId = students.filter((student) => student.id < 3);
console.log(studentId);

console.log("\n");

//* find in object
const studentAge = students.find((student) => student.age < 15);
console.log(studentAge);

console.log("\n");

//* slice method
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const slice = numbers2.slice(4, 8);
/* the first number given in slice starts cutting from the number's index
and the last number given in slice stops cutting right before the number's index */
// slice doesn't changes the main array
console.log(slice);

console.log("\n");

//* splice method
const splice = numbers2.splice(2, 5, 10);
/* the first number given in splice starts cutting from the number's index,
the second number given in splice sets how many numbers to cut
and all the numbers after second adds in the main array */
// splice removes the spliced numbers from main array
console.log(splice);
console.log(numbers2);

console.log("\n");

//* join method
const join = numbers2.join(" ");
// join method joins all the values of an array
// by default it separates by comma
console.log(join);

console.log("\n");

//* break and continue
const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers3.length; i++) {
	const element = numbers3[i];
	if (element > 5) {
		break; // breaks the array from the given index
	}
	console.log(element);
}

console.log("\n");

for (let i = 0; i < numbers3.length; i++) {
	const element = numbers3[i];
	if (element < 5) {
		continue; // continues the array from the given index
	}
	console.log(element);
}