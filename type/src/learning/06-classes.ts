export class Person {
    public readonly name: string;
    // └ 'public' is optional
    protected readonly document: string;

    constructor(name: string, document: string) {
        this.name = name;
        this.document = document;
    }
}

export class Property {
    // Can also be initialized like this
    constructor(
        readonly address: string,
        private readonly value: number,
    ) {}

    getValue(): number {
        return this.value;
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
        this.properties.forEach((property) => {
            console.log(property.address, property.getValue());
        });
    }
}
