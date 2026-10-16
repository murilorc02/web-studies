function awaitSimulator() {
    return Math.floor(Math.random() * 2000 + 1000);
}

// IIFE (Immediately Invoked Function Expression) + Callback example ================================
(function (param1, param2, param3) {

    const nameList = [
        ['Jason', 'Momoa'],
        ['Anya', 'Taylor-Joy'],
        ['Michael', 'Jackson'],
        ['Dwight', 'Schrute']
    ];

    function f1() {
        setTimeout(() => {
            console.log(param1);
            f1Callback();
        }, awaitSimulator());
    }
    function f2() {
        setTimeout(() => {
            console.log(param2);
            f2Callback();
        }, awaitSimulator())
    }
    function f3() {
        setTimeout(() => {
            console.log(param3, ':)\n');
            f3Callback();
        }, awaitSimulator())
    }
    function f4() {
        setTimeout(() => {
            console.log('\nFactory Function Tests ----------------------------');

            const person1 = createPerson('Jonathan', '', 46, 1.68);
            console.log(`BMI: ${person1.bmi}`); // getter
            console.log(`Before change: ${person1.fullName}`); // getter
            person1.fullName = ('Johnny Test'); // setter
            console.log(`After change: ${person1.fullName}`); // getter
            f4Callback();
        }, awaitSimulator())
    }
    function f5() {
        setTimeout(() => {
            console.log('\nConstructor Function (legacy) Tests ----------------------------')
            nameList.forEach((row) => {
                const person = new PersonLegacy(row[0], row[1]);
                person.getData();
            })
            f5Callback();
        }, awaitSimulator())
    }
    function f6() {
        setTimeout(() => {
            console.log('\nConstructor Function (modern) Tests ----------------------------')
            nameList.forEach((row) => {
                const person = new PersonModern(row[0], row[1]);
                person.getData();
            })
        }, awaitSimulator())
    }

    function f1Callback() {
        f2();
    }
    function f2Callback() {
        f3();
    }
    function f3Callback() {
        f4();
    }
    function f4Callback() {
        f5();
    }
    function f5Callback() {
        f6();
    }

    f1();
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