//* declaring variables
const variableName = "value"; // permanent variable
let variableName2 = "value"; // changeable variable

//* declaring function
const functionName = (parameters) => parameters; // for doing a single task
const functionName2 = (parameters) => {
	parameters;
	parameters;
	return result;
}; // for doing multiple tasks

//* spreading and adding multiple arrays
const arr1 = ["value1", "value2", "value3"];
const arr2 = ["value1", "value2", "value3"];

const combinedArray = [...arr1, ...arr2];

//* ES6 class
class ClassName {
	// class name should be capitalized
	constructor(currentClassId, currentClassName) {
		this.id = currentClassId;
		this.name = currentClassName;
	}
}
const className1 = new ClassName(1234, "firstClass");
const className2 = new ClassName(2468, "secondClass");

console.log(className1, className2); // calling the classes
console.log(className1.id); // calling data from class

//* inheritance
class Parent {
	constructor(fathersName) {
		this.fathersName = "Will Smith";
	}
}

class Child extends Parent {
	// inheriting data from another class
	constructor(name) {
		super();
		this.name = name;
	}
	getBothName() {
		// possible to access data from another class
		return `${this.name} ${this.fathersName}`;
	}
}

const firstChild = new Child("Jaden Smith");
console.log(firstChild);
console.log(firstChild.getBothName());
