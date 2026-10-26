function SampleObject(name) {
    this.name = name;
}

const AditionalProp = {
    prop1: 'New prop'
}
const OneMoreProp = {
    prop2: () => 'Newer prop'
}

SampleObject.prototype.method = function () {
    return console.log(`
    \nProps:
    Name: ${this.name}
    prop1: ${this.prop1}
    prop2: ${this.prop2}
    `);
}

const sample = new SampleObject('Table');

Object.setPrototypeOf(AditionalProp, OneMoreProp); // The first object "inherits" the props and methods from the second
Object.setPrototypeOf(SampleObject.prototype, AditionalProp); // The first object "inherits" the props and methods from the second
Object.getPrototypeOf(SampleObject); // Gets every item from obj1's prototype
console.log(`SampleObject's prototype (fully visual at browsers, consoles mostly won't show it):`);
console.dir(SampleObject.prototype);

sample.method();