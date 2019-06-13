var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = document.getElementById("person");
var y = document.getElementById("salary");
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, job) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.job = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.job = job;
    }
    Person.prototype.name = function () {
        return "Hello there, My name is  " + this.firstName + " " + this.lastName + "  and I am  " + this.age + " years old, and I am a " + this.job;
    };
    return Person;
}());
var test = new Person("Matthias", "Bruckbeck", "24", "Web Developer");
x.innerHTML = test.name();
var Properties = /** @class */ (function (_super) {
    __extends(Properties, _super);
    function Properties(firstName, lastName, age, job, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, job) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    Properties.prototype.name = function () {
        return _super.prototype.name.call(this) + " and I get " + this.salary + " every month, and I work in " + this.jobLocation + ".";
    };
    return Properties;
}(Person));
var test1 = new Properties("Matthias", "Bruckbeck", "24", "Web Developer", "2500€", "Vienna");
y.innerHTML = test1.name();
