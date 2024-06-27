document.getElementById('inputForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const personName = document.getElementById('personName').value;
    const personAge = parseInt(document.getElementById('personAge').value);
    const carBrand = document.getElementById('carBrand').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    if (personAge < 18) {
        alert("Возраст должен быть не менее 18 лет");
        return;
    }
    const person = new Person(personName, personAge);
    const car = new Car(carBrand, carModel, carYear);

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    const personData = document.createElement('div');
    personData.classList.add('card', 'card-body');
    outputDiv.appendChild(personData);

    const personDataTitle = document.createElement('h5');
    personDataTitle.classList.add('card-title');
    personDataTitle.textContent = 'Данные о человеке:';
    personData.appendChild(personDataTitle);

    const personDetails = document.createElement('p');
    personDetails.classList.add('card-text');
    personDetails.textContent = `Имя: ${person.name}, Возраст: ${person.age}`;
    personData.appendChild(personDetails);

    const carData = document.createElement('div');
    carData.classList.add('card', 'card-body', 'mt-3');
    outputDiv.appendChild(carData);

    const carDataTitle = document.createElement('h5');
    carDataTitle.classList.add('card-title');
    carDataTitle.textContent = 'Данные об автомобиле:';
    carData.appendChild(carDataTitle);

    const carDetails = document.createElement('p');
    carDetails.classList.add('card-text');
    carDetails.textContent = `Марка: ${car.make}, Модель: ${car.model}, Год выпуска: ${car.year}`;
    carData.appendChild(carDetails);

    car.assignOwner(person);

    const ownerInfo = document.createElement('p');
    ownerInfo.classList.add('card-text');
    if (car.owner) {
        ownerInfo.textContent = `Владелец: ${car.owner.name}`;
    } else {
        ownerInfo.textContent = "У автомобиля пока нет владельца";
    }
    carData.appendChild(ownerInfo);
    document.getElementById('inputForm').style.display = 'none';
    const returnButton = document.createElement('button');
    returnButton.classList.add('btn', 'btn-primary', 'mt-3');
    returnButton.textContent = 'Вернуться к форме';
    returnButton.onclick = function() {
        outputDiv.innerHTML = '';
        document.getElementById('inputForm').reset();
        document.getElementById('inputForm').style.display = 'block';
    };
    outputDiv.appendChild(returnButton);
});


function Person(name, age) {
    this.name = name;
    this.age = age;
}


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = null;
}


Car.prototype.assignOwner = function(person) {
    this.owner = person;
}