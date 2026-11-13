/*eslint-disable*/

type Age = number;
type Gender = 'M' | 'F' | 'Other';

type HasName = { name: string };
type HasAge = { age: Age };
type HasGender = { gender: Gender };

type Person = {
    name: string;
    age: Age;
    gender: Gender;
}; // OR
type Person1 = HasName & HasAge & HasGender; // Intersection types

const person: Person = {
    name: 'Marty',
    age: 34,
    gender: 'M',
};

const person1: Person1 = {
    name: 'Lucia',
    age: 28,
    gender: 'F',
};
