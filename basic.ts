var x = document.getElementById("person");
var y = document.getElementById("salary");

class Person { 
   firstName = ""; 
   lastName = ""; 
   age = ""; 
   job = "";  
constructor(firstName, lastName, age, job) { 
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
       this.job = job;
   }
   name() { 
       return `Hello there, My name is  ${this.firstName} ${this.lastName}  and I am  ${this.age} years old, and I am a ${this.job}`;
   }
   
}
	let test = new Person("Matthias", "Bruckbeck","24", "Web Developer");
   x.innerHTML = test.name();

class Properties extends Person {
	salary;
	jobLocation;

	constructor(firstName, lastName, age, job, salary, jobLocation){
		super(firstName, lastName, age, job);
		this.salary = salary;
		this.jobLocation = jobLocation;
	}
	name(){
		return `${super.name()} and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
	}

}
let test1 = new Properties("Matthias", "Bruckbeck","24", "Web Developer", "2500€", "Vienna");
y.innerHTML = test1.name();