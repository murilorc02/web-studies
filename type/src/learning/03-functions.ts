/*eslint-disable*/

//                                     ┬> Optional in this scenario since TS auto detects the return as a number, but should use when the type is not inferred
function sum(x: number, y: number): number { 
    return x + y;
}

function hello(): void { // A void type function means the function doesn't return any value. I declared the type for practice but is not really needed since it's already inferred
    console.log('Hi!');
}

const sum2: (x: number, y: number) => number = (x, y) => x + y;

export function sumMultiple(...args: number[]): number { 
    return args.reduce((prev, next) => prev + next);
}

// Functions as type
type toUpperFunction = (item: string) => string;
//                                          └ return type

function formatStrings(array: string[], callback: toUpperFunction): string[] { 
    const newArray: string[] = [];

    for (const s of array) {
        newArray.push(callback(s));
    }

    return newArray;
}

const sample = ['one, two, three, four'];
console.log(('Original array:').padEnd(17), sample);
console.log(('Output:').padEnd(17),
    formatStrings(sample, (s) => s.toUpperCase())
);