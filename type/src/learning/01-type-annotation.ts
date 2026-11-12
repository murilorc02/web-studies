/*eslint-disable*/

// Basic types
let title: string = 'Type Annotations';
let year: number = 2026;
let isPublic: boolean = true;
let testSymbol: symbol = Symbol('test');
//let big: bigint = 10n; -> Available post ES2020

// Arrays
let numberArray: Array<number> = [0, 1];
let numberArray2: number[] = [0, 1];
let stringArray: Array<string> = ['hey', 'hello'];
let stringArray2: string[] = ['hey', 'hello'];

// Objects
let gameConsole: { year: number, brand: string, name: string, storage: string, isUsed: boolean, yearsOfUse?: number } = {
    year: 2018,
    brand: 'SouljaGame',
    name: 'Retro SouljaBoy Mini',
    storage: '8GB',
    isUsed: true,
    yearsOfUse: 6
};

// Functions                        ┬> Optional in this scenario since TS auto detects the return as a number, but should use when the type is not inferred
function sum(x: number, y: number): number { 
    return x + y;
}

function hello(): void { // A void type function means the function doesn't return any value. I declared the type for practice but is not really needed since it's already inferred
    console.log('Hi!');
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;
