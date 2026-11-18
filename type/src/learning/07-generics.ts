/*eslint-disable*/

// Type predicate - 'value is number' replaces 'boolean' so the type can be correctly infered
// In this scenario for isNumber, we rather use unknown over generics since the type really doesn't matter
export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
}

// Generic - 'T' is a type placeholder, resolved from the arguments at call time (here, any type is accepted)
// Here, the essential would just to use number[] but I used T just for testing
export function sum<T>(...args: T[]): number {
    const result = args.reduce((sum, value) => {
        if (isNumber(sum) && isNumber(value)) return sum + value;
        return sum;
    }, 0);

    return result;
}

console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(...[1, 2, 3, 4, 5, 'a', 'b', 6])); ----------- This would work, but skipping all arrays since we're assuring numbers only
console.log(sum('a', 'b'));

// More examples for using generics ===================================================================================

// 1. Type flows from input to output ====================================================

function last<T>(arg: T[]): T {
    return arg[arg.length-1];
}

const a = last([1, 2, 3]);      // type: number
const b = last(['a', 'b']);     // type: string
const c = last([]);             // type: never
console.log('Example 1 result:', a, b, c);

// 2. Linking two params =================================================================

type User = {
    name: string,
    age: number,
    active: boolean
}

const user = { name: 'John', age: 30, active: true };

function pluck<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const n = pluck(user, 'name');      // string
const age = pluck(user, 'age');     // number
//pluck(user, 'email');             // should be a compile error

// 3. Constraint =========================================================================

function longest<T extends { length: number }>(val1: T, val2: T): T {
    return val1.length > val2.length ?
        val1 :
        val2;
}

longest('abc', 'de');               // string
longest([1, 2, 3], [1]);            // number[]
//longest(10, 20);                  // should be a compile error
//longest('abc', [1, 2]);           // should be a compile error (different types)