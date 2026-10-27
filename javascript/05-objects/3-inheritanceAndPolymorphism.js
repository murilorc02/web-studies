class Item {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    use() {
        console.log('Using a generic item');
    }

    get description() {
        return `This item is a $${this.value} ${this.name.toLowerCase()}`;
    }
}

class Mug extends Item { // Inheritance - Mug is inheriting all of the props and methods from Item + creating unique attributes
    constructor(material, color, capacity, value) {
        super('Mug', value);
        this.material = material;
        this.color = color;
        this.capacity = capacity;
    }

    use(content) { // Polymorphism - This version of use() will override the original function whenever we choose to create a Mug instead of an Item
        console.log(`Filled a ${this.color.toLowerCase()} ${this.capacity} ${this.material.toLowerCase()} mug with ${content.toLowerCase()}`);
    }
}

const mug = new Mug('Porcelain', 'Brown', '300ml', 4.00);
console.log(mug.description);
mug.use('iced tea'); // Mug.use() !== Item.use() - Calling with no param would result in a crash since we're not handling errors