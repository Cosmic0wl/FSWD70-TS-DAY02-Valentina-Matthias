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
var p = document.getElementById("myline");
var secondp = document.getElementById("myline2");
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, jobTitle) {
        this.firstName = "";
        this.lastName = "";
        this.age = "";
        this.jobTitle = "";
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.nameLine = function () {
        return "My name is " + this.firstName + " " + this.lastName + " I am " + this.age + " years old and I am a " + this.jobTitle;
    };
    return Person;
}());
var valentina = new Person("Valentina", "Panetta", "27", "Web Developer");
p.innerHTML = valentina.nameLine();
var WebDeveloper = /** @class */ (function (_super) {
    __extends(WebDeveloper, _super);
    function WebDeveloper(firstName, lastName, age, jobTitle, salary, jobLocation) {
        var _this = _super.call(this, firstName, lastName, age, jobTitle) || this;
        _this.salary = salary;
        _this.jobLocation = jobLocation;
        return _this;
    }
    WebDeveloper.prototype.nameLine = function () {
        return _super.prototype.nameLine.call(this) + " and I get " + this.salary + " every month working in " + this.jobLocation;
    };
    return WebDeveloper;
}(Person));
var valentinaPlus = new WebDeveloper("Valentina", "Panetta", "27", "Web Developer", "4000$", "Vienna");
secondp.innerHTML = valentinaPlus.nameLine();
// p.innerHTML = valentinaPlus.nameLine();
