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
var car = document.getElementById("car");
var truck = document.getElementById("truck");
var priceMotor = document.getElementById("priceMotor");
var priceTruck = document.getElementById("priceTruck");
var Vehicle = /** @class */ (function () {
    function Vehicle(brand, seats, productionYear, fuel) {
        this.brand = "";
        this.seats = 0;
        this.productionYear = 0;
        this.fuel = "";
        this.brand = brand;
        this.seats = seats;
        this.productionYear = productionYear;
        this.fuel = fuel;
    }
    Vehicle.prototype.textVehicle = function () {
        return "<h4> Brand: " + this.brand + "</h4>\n\t\t<p> Seats: " + this.seats + "</p>\n\t\t<p> Production Year: " + this.productionYear + "</p>\n\t\t<p> Fuel: " + this.fuel + "</p>";
    };
    return Vehicle;
}());
var car1 = new Vehicle("Audi", 4, 2009, "Petrol");
car.innerHTML = car1.textVehicle();
var Motor = /** @class */ (function (_super) {
    __extends(Motor, _super);
    function Motor(brand, seats, productionYear, fuel, capacity) {
        var _this = _super.call(this, brand, seats, productionYear, fuel) || this;
        _this.capacity = capacity;
        return _this;
    }
    Motor.prototype.textMotor = function () {
        return _super.prototype.textVehicle.call(this) + "\n\t\t<p> Capacity: " + this.capacity + "</p>\n\t\t<p class = \"btn btn-warning\" onclick=\"$('#priceMotor').toggle()\";>Price</p>";
    };
    Motor.prototype.priceCar = function () {
        var result = 0;
        if (this.seats < 3) {
            result = 100 + this.productionYear + this.capacity * this.seats;
        }
        else if (this.seats = 4) {
            result = 200 + this.productionYear + this.capacity * this.seats;
        }
        else if (this.seats > 4) {
            result = 300 + this.productionYear + this.capacity * this.seats;
        }
        return result;
    };
    return Motor;
}(Vehicle));
var price1 = new Motor("Audi", 4, 2009, "Petrol", 30);
priceMotor.innerHTML = price1.priceCar();
var car2 = new Motor("Audi", 4, 2009, "Petrol", 30);
car.innerHTML = car2.textMotor();
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, seats, productionYear, fuel, cargo) {
        var _this = _super.call(this, brand, seats, productionYear, fuel) || this;
        _this.cargo = cargo;
        return _this;
    }
    Truck.prototype.textTruck = function () {
        return _super.prototype.textVehicle.call(this) + "\n\t\t<p>Cargo: " + this.cargo + "</p>\n\t\t<p class = \"btn btn-warning\"onclick=\"$('#priceTruck').toggle()\">Price</p>";
    };
    Truck.prototype.priceCar = function () {
        var result = 0;
        if (this.seats < 3) {
            result = 100 + this.productionYear + this.cargo * this.seats;
        }
        else if (this.seats = 4) {
            result = 200 + this.productionYear + this.cargo * this.seats;
        }
        else if (this.seats > 4) {
            result = 300 + this.productionYear + this.cargo * this.seats;
        }
        return result;
    };
    return Truck;
}(Vehicle));
var price2 = new Truck("Ford", 4, 2005, "Petrol", 500);
priceTruck.innerHTML = price2.priceCar();
var car3 = new Truck("Ford", 4, 2005, "Diesel", 500);
truck.innerHTML = car3.textTruck();
