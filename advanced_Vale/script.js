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
// models
var motorModel = document.getElementById("motorModel");
var truckModel = document.getElementById("truckModel");
//buttons 
var motorBtn = document.getElementById("motorButton");
var truckBtn = document.getElementById("truckButton");
//prices placeholders
var motorPrice = document.getElementById("motorPrice");
var truckPrice = document.getElementById("truckPrice");
var Vehicle = /** @class */ (function () {
    function Vehicle(model, numOfSeats, fuelType, productionYear) {
        this.model = "";
        this.numOfSeats = 0;
        this.fuelType = "";
        this.productionYear = 0;
        this.model = model;
        this.numOfSeats = numOfSeats;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
    }
    Vehicle.prototype.render = function () {
        return "<h5  class=\"card-title\">" + this.model + "</h5>\n                        <p class=\"card-text\">Number of Seats: " + this.numOfSeats + "</p>\n                        <p class=\"card-text\">Fuel Type: " + this.fuelType + "</p>\n                        <p class=\"card-text\">Production Year: " + this.productionYear + "</p>";
    };
    Vehicle.prototype.calculatePrice = function () {
        var price = 0;
        if (this.fuelType == "Super" && this.numOfSeats > 2) {
            price = 1000 + this.productionYear;
        }
        else if (this.fuelType == "Diesel" && this.numOfSeats >= 1) {
            price = 600 + this.productionYear;
        }
        return price;
    };
    return Vehicle;
}());
// let test = new Vehicle("one", 3, "Super", 2000);
// console.log(test.calculatePrice());
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(model, numOfSeats, fuelType, productionYear, engineCapacity) {
        var _this = _super.call(this, model, numOfSeats, fuelType, productionYear) || this;
        _this.engineCapacity = engineCapacity;
        return _this;
    }
    Motor.prototype.render = function () {
        return _super.prototype.render.call(this) + "\n\t\t<p class=\"card-text\">Engine Capacity: " + this.engineCapacity + "cc</p>\n\t\t<a id=\"motorButton\" class=\"btn btn-primary\" onclick=\"$('#motorPrice').toggle()\">Calculate Price</a>\n\t\t";
    };
    Motor.prototype.calculatePrice = function () {
        return _super.prototype.calculatePrice.call(this) + this.engineCapacity;
    };
    return Motor;
}(Vehicle));
// let test2 = new Motor("two", 3, "Super", 3000, 20);
// console.log(test2.printPrice());
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(model, numOfSeats, fuelType, productionYear, cargo) {
        var _this = _super.call(this, model, numOfSeats, fuelType, productionYear) || this;
        _this.cargo = cargo;
        return _this;
    }
    Truck.prototype.render = function () {
        return _super.prototype.render.call(this) + "\n\t\t<p class=\"card-text\">Cargo: " + this.cargo + " kg</p>\n\t\t<a id=\"truckButton\" class=\"btn btn-primary\">Calculate Price</a>\n\t\t";
    };
    Truck.prototype.calculatePrice = function () {
        return _super.prototype.calculatePrice.call(this) + this.cargo;
    };
    return Truck;
}(Vehicle));
// let test3 = new Truck("three", 3, "Super", 4000, 20);
// console.log(test3.calculatePrice());
var vespa = new Motor("Vespa Uno", 1, "Diesel", 2019, 50);
motorModel.innerHTML = vespa.render();
var vespa2 = new Motor("Vespa Uno", 1, "Diesel", 2019, 50);
motorPrice.innerHTML = vespa2.calculatePrice();
var iveco = new Truck("Iveco 5", 2, "Super", 2016, 10000);
truckModel.innerHTML = iveco.render();
