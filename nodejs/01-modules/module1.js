// Using the same examples created at javascript/07-tooling/02-es6modules/modules.js but using Node instead

const exampleVar1 = 'Example 1';
const exampleVar2 = 'Example 2';
const exampleVar3 = 'Example 3';

function hello() {
    console.log('Hello there!');
}

class ExampleClass {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    sum() {
        console.log(`${this.value1} + ${this.value2} =`, this.value1 + this.value2);
    }
}

console.log('Testing inside the module =================================================\n');

// Export method 1 ==============================================
/*
module.exports.exampleVar1 = exampleVar1;
module.exports.exampleVar2 = exampleVar2;
module.exports.exampleVar3 = exampleVar3;
module.exports.hello = hello;
module.exports.exampleClass = ExampleClass;

const test = new module.exports.exampleClass(2, 3);
module.exports.hello();
test.sum();
*/

// Export method 2 ==============================================

exports.exampleVar1 = exampleVar1;
exports.exampleVar2 = exampleVar2;
exports.exampleVar3 = exampleVar3;
exports.hello = hello;
exports.exampleClass = ExampleClass;

exports.testClass = class Test {
    constructor() {
        this.value = 'value'
    }

    getValue() {
        return this.value;
    }
}

const test = new exports.exampleClass(2, 3);
exports.hello();
test.sum();

// Export method 3 ==============================================
// This method overwrites the module.exports, so every time something new is going to be added, it gotta be
/*
module.exports = {
    exampleVar1, exampleVar2, exampleVar3,
    hello, ExampleClass
};
 */

// Export method 4 ==============================================
/*
this.anyExport = 'Any value';
this.exampleVar1 = exampleVar1;
this.exampleVar2 = exampleVar2;
this.exampleVar3 = exampleVar3;
this.hey = hello;
this.testClass = ExampleClass;

const test = new this.testClass(5, 6);
this.hey();
test.sum();
*/