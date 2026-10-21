// IIFE (Immediately Invoked Function Expression) ================================================================
(function main(param1, param2, param3) {

    console.log('IIFE STARTED');

    const steps = [f1, f2, f3, f4, f5, f6, f7];

    // Recursive function + Callback example =========================================================================
    function callbackRunner(f = 0) {
        if (f >= steps.length) return;

        console.log(`\nRecursive function round ${f + 1}`)
        let awaitSimulator = Math.floor(Math.random() * 2000 + 1000);

        setTimeout(() => {
            steps[f]();
            callbackRunner(f + 1);
        }, awaitSimulator);
    }
    callbackRunner();

    const nameList = [
        ['Jason', 'Momoa'],
        ['Anya', 'Taylor-Joy'],
        ['Michael', 'Jackson'],
        ['Dwight', 'Schrute']
    ];

    function f1() {
        console.log(param1);
    }

    function f2() {
        console.log(param2);
    }

    function f3() {
        console.log(param3, ':)');
    }

    function f4() {
        console.log('Factory Function Tests ----------------------------');

        const person1 = createPerson('Jonathan', '', 46, 1.68);
        console.log(`BMI: ${person1.bmi}`); // getter
        console.log(`Before change: ${person1.fullName}`); // getter
        person1.fullName = ('Johnny Test'); // setter
        console.log(`After change: ${person1.fullName}`); // getter
    }

    function f5() {
        console.log('Constructor Function (legacy) Tests ----------------------------')
        nameList.forEach((row) => {
            const person = new PersonLegacy(row[0], row[1]);
            person.getData();
        })
    }

    function f6() {
        console.log('Constructor Function (modern) Tests ----------------------------')
        nameList.forEach((row) => {
            const person = new PersonModern(row[0], row[1]);
            person.getData();
        })
    }

    function f7() {
        console.log('Generator Function Test ----------------------------');
        for (let i = 0; i < 10; i++) {
            let current = gen.next();
            console.log(current, '\t|', current.value);
        }
    }
})('Playing', 'Around', 'a Little');

// Constructor function (legacy) =================================================================================
//          This format will probably only be used for old projects                                             ==
// ===============================================================================================================
function PersonLegacy(firstName, lastName) {
    // Private
    const generateIdentifier = function () {
        return Math.round(Math.random() * 9999);
    };
    const Identifier = generateIdentifier();

    // Public
    this.FirstName = firstName;
    this.LastName = lastName;

    this.getData = function () {
        console.log('Identifier:', Identifier, '\t| FirstName:', this.FirstName, '\t| LastName:', this.LastName);
    };
}

// Constructor function (modern) =================================================================================
class PersonModern {
    // Private
    #identifier;

    constructor(firstName, lastName) {
        this.FirstName = firstName;
        this.LastName = lastName;
        this.#identifier = Math.round(Math.random() * 9999);
    }

    // Public
    getData() {
        console.log('Identifier:', this.#identifier, '\t| FirstName:', this.FirstName, '\t| LastName:', this.LastName);
    };
}

// Factory function ==============================================================================================
//      Simpler alternative to Constructor Functions/Classes;                                                   ==
//      benefits from encapsulation via closures, flexibility (async, varied return types)                      ==
// ===============================================================================================================
function createPerson(firstName, lastName, weight, height) {
    return {
        FirstName: firstName,
        LastName: lastName,
        Weight: weight, // (kg)
        Height: height, // (m)

        get fullName() {
            return `${this.FirstName} ${this.LastName}`;
        },

        get bmi() {
            return parseFloat((this.Weight / (this.Height ** 2)).toFixed(2));
        },

        set fullName(value) {
            let nameParts = value.split(' ');
            this.FirstName = nameParts.shift();
            this.LastName = nameParts.length > 0 ? nameParts.pop() : this.LastName;
            // NOTE: if firstName is used rather than "this.FirstName", the setter will only
            //       change the closure values instead of the actual object props.
        }
    }
}

// Generator function ============================================================================================
function* idMaker() {
    let index = 0;
    while (true) {
        yield index++;
    }
}

const gen = idMaker();