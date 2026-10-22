const array = ['2nd Value', '3rd Value', '4th Value'];
array.unshift('1st Value'); // Add at the start
array.push('5th Value'); // Add at the end

const initialWidth = array.toString().length;
console.log(`\n=========================================================================================================
    \nFull array: ${array}`);

const sliced = array.slice(1, -2);
console.log(`\n========================== Slice - From the second index, removed the last two ==========================
    \nSliced: ${sliced}`);

var copyForPop = [...array];
var copyForShift = [...array];
var copyForDelete = [...array];
var copyForSplice = [...array];
var copyForConcat = [...array];

const spliced = copyForSplice.splice(-4, 2); // If the start param value is positive, the deleteCount will act from "left to right". If it's negative, the opposite occurs
console.log(`\n========================== Splice - Removes elements and can also replace them ==========================
    \n${('Removed by splice:').padEnd(29)}`, spliced);
console.log((`Array after splice:`).padEnd(29), copyForSplice);
const replaced = copyForSplice.splice(-2, 0, 'Replacement', 'Entries'); // I want to add the replacement at the same spot I removed before.
//                                                                         The last time splice was called it removed 2 entries starting at -4, so now it should be -2
console.log((`Array after splice + replace:`).padEnd(29), copyForSplice);

const arrayPart2 = ['6th Value', '7th Value', '8th Value'];
copyForConcat = copyForConcat.concat(arrayPart2);
console.log(`\n========================================= Concat - merge arrays =========================================
    \n${('Array 1:').padEnd(15)}`, array, `\n${('Array 2:').padEnd(15)}`, arrayPart2, `\n${('After concat:').padEnd(15)}`, copyForConcat);

console.log(`\n=========================================== Pop - delete last ===========================================
    \nBefore pop: ${copyForPop}`);
while (copyForPop.length > 0) {
    let popped = copyForPop.pop();

    console.log(`After pop: ${copyForPop.toString().padEnd(initialWidth)} | Popped: ${popped} \t| Indexes: ${copyForPop.length}`);
}

console.log(`\n========================================= Shift - delete first =========================================
    \nBefore shift: ${copyForShift}`);
while (copyForShift.length > 0) {
    let shifted = copyForShift.shift();

    console.log(`After shift: ${copyForShift.toString().padEnd(initialWidth)} | Shifted: ${shifted} \t| Indexes: ${copyForShift.length}`);
}

console.log(`\n========================== Delete - wipes values but keep the index untouched ==========================
    \nBefore deletion: ${copyForDelete}`);
for (i in copyForDelete) {
    delete copyForDelete[i];
    console.log(`After deletion at index ${i}: ${copyForDelete.toString().padEnd(initialWidth)} | Indexes: ${copyForDelete.length}`);
}

const fullString = 'Incomplete math operation: 2+3*';

console.log(`\n==================================== At - returns elements by index ====================================\n`);
for (i in array) console.log(`[${i}]: ${array.at(i)}`);

console.log(`\n===================== Split - separates a string into an array based of characters =====================
    \n${('Before split:').padEnd(25)}`, `"${fullString}"`);
const splitted = fullString.split(' ');
const flatMapped = splitted.flatMap(token => token.split(/([+\-*/])/));
//                          └ For each index, run a callback that applies a new split based of the delimiters +, -, * and / with "map()", while flattening sub-arrays with "flat()" (since each token turns a new array per word)
const filtered = flatMapped.filter(t => t !== '');
//                          └ Filters to wipe out any empty value created at the end by the flatmap's split when the string ends with a delimiter
console.log((`After split:`).padEnd(25), splitted);
console.log((`Split + flatMap:`).padEnd(25), flatMapped);
console.log((`Split + flatMap + filter:`).padEnd(25), filtered);

console.log(`\n======================== Join - merges the last example back into a full string ========================\n`);
const merged = filtered.join(' ');
console.log(`After join: "${merged}"`);