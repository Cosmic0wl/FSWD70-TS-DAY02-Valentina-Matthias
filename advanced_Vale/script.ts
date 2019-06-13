// models
var motorModel = document.getElementById("motorModel");
var truckModel = document.getElementById("truckModel");

//buttons 
var motorBtn = document.getElementById("motorButton");
var truckBtn = document.getElementById("truckButton");

//prices placeholders

var motorPrice = document.getElementById("motorPrice");
var truckPrice = document.getElementById("truckPrice");

class Vehicle {
	model = "";
	numOfSeats = 0;
	fuelType = "";
	productionYear = 0;


	constructor(model, numOfSeats, fuelType, productionYear) {
		this.model = model;
		this.numOfSeats = numOfSeats;
		this.fuelType = fuelType;		
		this.productionYear = productionYear;
	}

	render() {
		return `<h5  class="card-title">${this.model}</h5>
                        <p class="card-text">Number of Seats: ${this.numOfSeats}</p>
                        <p class="card-text">Fuel Type: ${this.fuelType}</p>
                        <p class="card-text">Production Year: ${this.productionYear}</p>`;
	}

	calculatePrice() {
		let price = 0;
		if (this.fuelType == "Super" && this.numOfSeats > 2) {
			price = 1000 + this.productionYear;
		} else if (this.fuelType == "Diesel" && this.numOfSeats >= 1) {
			price = 600 + this.productionYear;
		}
		return price;
	}

}

// let test = new Vehicle("one", 3, "Super", 2000);
// console.log(test.calculatePrice());

class Motor extends Vehicle {
	engineCapacity;

	constructor(model, numOfSeats, fuelType, productionYear, engineCapacity) {
		super(model, numOfSeats, fuelType, productionYear);
		this.engineCapacity = engineCapacity;		
	}
		

	render() {
		return `${super.render()}
		<p class="card-text">Engine Capacity: ${this.engineCapacity}cc</p>
		<a id="motorButton" class="btn btn-primary" onclick="$('#motorPrice').toggle()">Calculate Price</a>
		`;
	}

	calculatePrice() {
		return super.calculatePrice() + this.engineCapacity;
	}



}

// let test2 = new Motor("two", 3, "Super", 3000, 20);
// console.log(test2.printPrice());

class Truck extends Vehicle {
	cargo;
	constructor(model, numOfSeats, fuelType, productionYear, cargo) {
		super(model, numOfSeats, fuelType, productionYear);
		this.cargo = cargo;

	}

	render() {
		return `${super.render()}
		<p class="card-text">Cargo: ${this.cargo} kg</p>
		<a id="truckButton" class="btn btn-primary">Calculate Price</a>
		`;
	}

	calculatePrice() {
		return super.calculatePrice() + this.cargo;
	}

	

}

// let test3 = new Truck("three", 3, "Super", 4000, 20);
// console.log(test3.calculatePrice());


let vespa = new Motor("Vespa Uno", 1, "Diesel", 2019, 50);
motorModel.innerHTML = vespa.render();
let vespa2 = new Motor("Vespa Uno", 1, "Diesel", 2019, 50);
motorPrice.innerHTML = vespa2.calculatePrice();
let iveco = new Truck("Iveco 5", 2, "Super", 2016, 10000);
truckModel.innerHTML = iveco.render();


