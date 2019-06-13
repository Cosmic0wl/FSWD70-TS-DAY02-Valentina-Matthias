var p = document.getElementById("myline");
var secondp = document.getElementById("myline2");

class Person {
	firstName = "";
	lastName = "";
	age = "";
	jobTitle = "";
	

	constructor(firstName, lastName, age, jobTitle) {
		this.firstName = firstName;
       	this.lastName = lastName;
       	this.age = age;
       	this.jobTitle = jobTitle;
	}

	nameLine() {
		return `My name is ${this.firstName} ${this.lastName} I am ${this.age} years old and I am a ${this.jobTitle}`;
	}
}

let valentina = new Person("Valentina", "Panetta", "27", "Web Developer");

p.innerHTML = valentina.nameLine();

class WebDeveloper extends Person {
	salary;
	jobLocation;

	constructor(firstName, lastName, age, jobTitle, salary, jobLocation) {
		super(firstName, lastName, age, jobTitle);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}

	nameLine() {
		return `${super.nameLine()} and I get ${this.salary} every month working in ${this.jobLocation}`;
	}
}

let valentinaPlus = new WebDeveloper("Valentina", "Panetta", "27", "Web Developer", "4000$", "Vienna");
secondp.innerHTML = valentinaPlus.nameLine();
// p.innerHTML = valentinaPlus.nameLine();
