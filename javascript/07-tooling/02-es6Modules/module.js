export const exampleVar1 = 'Example 1';
export const exampleVar2 = 'Example 2';
export const exampleVar3 = 'Example 3';

export function hello() {
    console.log('Hello there!');
}

export class ExampleClass {
    constructor(value1, value2) {
        this.value1 = value1;
        this.value2 = value2;
    }

    sum() {
        console.log(`${this.value1} + ${this.value2} =`, this.value1 + this.value2);
    }
}

export default new ExampleClass(2, 2);