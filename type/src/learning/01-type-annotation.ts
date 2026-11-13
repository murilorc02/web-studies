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
let readonlyArray: readonly string[] = ['hey', 'hello'];
let readonlyArray2: ReadonlyArray<string> = ['hey', 'hello'];

// Tuple
const tupleSample: [number, string, ...string[]] = [1, 'One', 'Three', 'Four'];
tupleSample[1] = 'Two';
console.log('Tuple sample output:', tupleSample);

// Never
function returnError(): never { 
    throw new Error('ERROR');
}

// Union - Variable can be set as more than one type
let union: string | number;

// Literals
let n = 12 | 20 | 30 as const;
    // OR let n: 12 | 20 | 30 = 12;
// n = 13; This will result in an error since 13 is not on the accepted types for n
function literalsSample(param: 'Value 1' | 'Value 2' | 'Value 3') { 
    return param;
}

// Enum
enum Genre { 
    ACTION, // 0
    HORROR, // 1
    ROMANCE, // 2
    ANIMATION = 10, // Custom index
    SUSPENSE, // 11, following the last index
    LIVEACTION = 'live', // Custom index
    SCIFI = 20 // Defining the index is mandatory if the last was a string
};
console.log('\nMovie genres enum:', Genre);
console.log('Value of ANIMATION:', Genre.ANIMATION);
console.log('Value of 10:', Genre[10]);

// Objects
const gameConsole: {
    // type
    year: number, brand: string, name: string, storage: string, isUsed: boolean, yearsOfUse?: number, [key: string]: unknown
} = {
    // value
    year: 2019,
    brand: 'SouljaGame',
    name: 'Retro SouljaBoy Mini',
    storage: '8GB',
    isUsed: true,
    yearsOfUse: 6
};

gameConsole.year = 2018;
gameConsole.modded = false; // → Creating a prop like this won't work like in JS UNLESS we create a key to allow it (as in the case of the last prop, that is an array that store multiple string keys)
