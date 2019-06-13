var car = document.getElementById("car");
var truck = document.getElementById("truck");

var priceMotor = document.getElementById("priceMotor");
var priceTruck = document.getElementById("priceTruck");

class Vehicle {
	brand = "";
	seats = 0;
	productionYear = 0;
	fuel = "";

	constructor(brand, seats, productionYear, fuel){
		this.brand = brand;
		this.seats = seats;
		this.productionYear = productionYear;
		this.fuel = fuel;

	}
	textVehicle () {
		return `<h4> Brand: ${this.brand}</h4>
		<p> Seats: ${this.seats}</p>
		<p> Production Year: ${this.productionYear}</p>
		<p> Fuel: ${this.fuel}</p>`;
	}

}

	let car1 = new Vehicle("Audi", 4, 2009, "Petrol");
	car.innerHTML = car1.textVehicle();

class Motor extends Vehicle {
	capacity;

	constructor(brand, seats, productionYear, fuel, capacity){
		super(brand, seats, productionYear, fuel)
		this.capacity = capacity;
		
	}
	textMotor (){
		return `${super.textVehicle()}
		<p> Capacity: ${this.capacity}</p>
		<p class = "btn btn-warning" onclick="$('#priceMotor').toggle()";>Price</p>`
	}
	priceCar(){
	let result = 0;
	
	if (this.seats < 3) {
		result = 100 + this.productionYear + this.capacity * this.seats;

	}else if (this.seats = 4) {
		result = 200 + this.productionYear + this.capacity * this.seats;

	}else if (this.seats > 4) {
		result = 300 + this.productionYear + this.capacity * this.seats;
	}

		return result;
	}

}

	let price1 = new Motor("Audi", 4, 2009, "Petrol", 30);
	priceMotor.innerHTML = price1.priceCar();

	let car2 = new Motor("Audi", 4, 2009, "Petrol", 30);
	car.innerHTML = car2.textMotor();	



class Truck extends Vehicle {
	cargo;

	constructor(brand, seats, productionYear, fuel, cargo) {
		super(brand, seats, productionYear, fuel)
		this.cargo = cargo;
	}
	textTruck(){
		return `${super.textVehicle()}
		<p>Cargo: ${this.cargo}</p>
		<p class = "btn btn-warning"onclick="$('#priceTruck').toggle()">Price</p>`
	}
	priceCar(){
	let result = 0;
	
	if (this.seats < 3) {
		result = 100 + this.productionYear + this.cargo * this.seats;

	}else if (this.seats = 4) {
		result = 200 + this.productionYear + this.cargo * this.seats;

	}else if (this.seats > 4) {
		result = 300 + this.productionYear + this.cargo * this.seats;
	}

		return result;
	}

}

	

let price2 = new Truck("Ford", 4, 2005, "Petrol", 500);
	priceTruck.innerHTML = price2.priceCar();

let car3 = new Truck("Ford", 4, 2005, "Diesel", 500)
truck.innerHTML = car3.textTruck();

	

   
