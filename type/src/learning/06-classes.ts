export class Person {
    public readonly name: string;
    // └ 'public' is optional
    protected readonly document: string; // "protected" grants child classes access to this prop

    constructor(name: string, document: string) {
        this.name = name;
        this.document = document;
    }
}

export class Property {
    // Can also be initialized like this
    constructor(
        readonly address: string,
        private _value: number, // private props can only be read within the class
    ) {}

    set value(newValue: number) {
        this._value = newValue;
    }

    get value(): number {
        return this._value;
    }
}

export class Owner extends Person {
    constructor(
        private readonly properties: Property[],
        name: string,
        document: string,
    ) {
        super(name, document);
    }

    addProperty(newProperty: Property): void {
        this.properties.push(newProperty);
    }

    listProperties(): void {
        console.log(this.document); // "document" can be accessed since it was defined as protected instead of private
        this.properties.forEach((property) => {
            console.log(property.address, property.value);
        });
    }
}

// Abstract - classes that have the need to "re-specify" some abstract props and functions when creating child classes. Useful for cases like creating classes for an RPG game
