import Hey, { ExampleClass as Operation, hello, exampleVar1, exampleVar2, exampleVar3 as exVar3 } from './module.js';
//     └ Anything out of the {} chars is considered the default. In this case, it will always be 'new ExampleClass(2, 2)'

hello();
console.log('Example vars: ', exampleVar1, exampleVar2, exVar3);
Hey.sum();

const newSum = new Operation(5, 5);
newSum.sum();