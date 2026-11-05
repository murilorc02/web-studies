// Using the same examples created at javascript/07-tooling/02-es6modules/modules.js but using Node instead

// import Hey, { ExampleClass as Operation, hello, exampleVar1, exampleVar2, exampleVar3 as exVar3 } from './module.js';
//     └ Anything out of the {} chars is considered the default. In this case, it will always be 'new ExampleClass(2, 2)'


const path = require('path'); // Usual Node modules do not require a relative path, the name will do
const mod1 = require('./module1.js'); // This replaces the long import we would usually do

console.log('\nTest 1 ==================================================================\n');
mod1.hello();
console.log('Example vars: ', mod1.exampleVar1, mod1.exampleVar2, mod1.exampleVar3);

const newSum = new mod1.exampleClass(5, 5);
newSum.sum();

const testClass = new mod1.testClass();
console.log('Value fetched:', testClass.getValue());

console.log('\nTest 2 ==================================================================\n');
const helloFunction = require('./module1.js').hello;
helloFunction();

console.log('\nTest 3 ==================================================================\n');
const { exampleVar1, exampleVar2, exampleVar3, hello, exampleClass } = require('./module1.js');
console.log('Example vars: ', exampleVar1, exampleVar2, exampleVar3);
hello();
const test3 = new exampleClass(10, 20);
test3.sum();