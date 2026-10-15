function waitSimulator() {
    return Math.floor(Math.random() * 2000 + 1000);
}

// IIFE (Immediately Invoked Function Expression) + Callback example ================================
(function (param1, param2, param3) {
    function f1() {
        setTimeout(() => {
            console.log(param1);
            f1Callback();
        }, waitSimulator());
    }
    function f2() {
        setTimeout(() => {
            console.log(param2);
            f2Callback();
        }, waitSimulator())
    }
    function f3() {
        setTimeout(() => {
            console.log(param3);
            f3Callback();
        }, waitSimulator())
    }

    function f1Callback() {
        f2();
    }
    function f2Callback() {
        f3();
    }
    function f3Callback() {
        console.log(':)');
    }

    f1();
})('Playing', 'Around', 'a Little');

// Factory function =================================================================================
//      Simpler alternative to Constructor Functions/Classes;
//      benefits from encapsulation via closures, flexibility (async, varied return types)   
// ==================================================================================================
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

const person1 = createPerson('Jonathan', '', 46, 1.68);
console.log(`BMI: ${person1.bmi}`); // using a getter
person1.fullName = ('Johnny Test'); // using a setter