// Two of the project standards (Factory Function and Constructor Function) were already explored at 'javascript/03-functions/examples.js'

// Creating and instantiating a class =============================================================================

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    odometer = 0;
    year;

    // Methods created inside the class body will automatically be stored at the prototype when creating an object by "new Car()"
    //      Unlike the factory function and the legacy constructor function, classes do not need to use things as- 
    //      "Car.prototype.getDescription = function () {}" to not store it at each new instance
    getDescription() {
        return `${this.make} ${this.model}`;
    }
}

const car = new Car('Toyota', 'Etios');

// To define/modify a property ===================================================================================

Object.defineProperty(car, 'edition', {
    enumerable: true,
    value: 'Platinum', // Can also be a function
    writable: false,
    configurable: true
});

// To define/modify multiple properties at once ==================================================================

Object.defineProperties(car, {
    previousOwner: {
        enumerable: true,
        configurable: false,
        get: function () {
            return previousOwner;
        },
        set: function (value) {
            previousOwner = value;
        }
    },
    currentOwner: {
        enumerable: true,
        configurable: true,
        get: function () {
            return currentOwner;
        },
        set: function (value) {
            currentOwner = value;
        }
    }
});

console.log('\nUsing getters and setters ======================================================================================\n');

car.edition = 'Platinum 1.5'; // Only updates if 'writable' is true
car.previousOwner = 'John Toyota';
car.currentOwner = 'Son Toyota';
car.year = 2015;
console.log('Car 1:', { ...car });

console.log('\nFor assigning an object to another ============================================================================\n');

// Method 1
const car2 = {
    ...car,
    previousOwner: 'John Secondcar',
    currentOwner: 'Son Secondcar',
    fabricatedAt: 'Somewhere'
}
console.log('Car 2:', { ...car2 });

// Method 2
const car3 = Object.assign({}, car, {
    previousOwner: 'John Futurecar',
    currentOwner: 'Son Futurecar',
    year: 4026,
    fabricatedAt: 'Somewhere in the future',
    itFlies: true
});
console.log('Car 3:', { ...car3 });

console.log('\n================================================================================================================\n');

Object.freeze(car); // Makes the object unable to be modified
delete car.edition; // Only deletes if 'configurable' is true and the object is not frozen
delete car.year;
console.log('Car 1 after prop deletion:', { ...car });

console.log('\nSome other useful methods =====================================================================================\n');
console.log('Keys:', Object.keys(car), '\n');
console.log('Values:', Object.values(car), '\n');
console.log('Keys + Values:', Object.entries(car), '\n'); // This can make the object entries iterable
console.log('currentOwner props:', Object.getOwnPropertyDescriptor(car, 'currentOwner'), '\n');
console.log('All car1 props:', Object.getOwnPropertyDescriptors(car));