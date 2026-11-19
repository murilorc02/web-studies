/*eslint-disable*/

// RECORD =========================================================================
//                key type     value type
//               |---┬---| |-------┬-------|
const obj1: Record<string, string | number> = {
    name: '',
    lastName: '',
    age: 30,
};
console.log(obj1);

// REQUIRED AND PARTIAL ===========================================================
type PersonProtocol = {
    name?: string;
    lastName?: string;
    age?: number;
};

type PersonRequired = Required<PersonProtocol>; // Required - turns every optional prop into required
type PersonPartial = Partial<PersonRequired>; // Partial - turns every required prop into optional
type PersonReadonly = Readonly<PersonPartial>; // Readonly - turns every prop into readonly
type PersonPick = Pick<PersonReadonly, 'name' | 'lastName'>; // Pick - creates an object with selected keys only

// EXCLUDE AND EXTRACT ============================================================

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type ExcludeType = Exclude<ABC, CDE>; // Computes everything that's in ABC and not in CDE
type ExtractType = Extract<ABC, CDE>; // Computes everything that's in both types

// Exclude and extract examples

type AccountFromDb = {
    _id: string;
    username: string;
    password: string;
};

//                  ┬> Copies every key except '_id'                         ┬> Used interception to include the key 'id' with no underscore
type AccountToApi = Pick<AccountFromDb, Exclude<keyof AccountFromDb, '_id'>> & { id: string };
// This makes the 'AccountToApi' type dynamic for every change made at AccountFromDb

const fromDb: AccountFromDb = {
    _id: '21343',
    username: 'user',
    password: 'pswd',
};

function mapAccount(fromDb: AccountFromDb): AccountToApi {
    const { _id, ...data } = fromDb;
    return { ...data, id: _id };
}

console.log(mapAccount(fromDb));