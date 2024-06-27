function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = null;
}


Car.prototype.assignOwner = function(person) {
    this.owner = person;
}

export { Car };