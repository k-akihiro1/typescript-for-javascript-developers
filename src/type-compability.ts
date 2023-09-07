export {};

let fooCompatible: any;
let barCompatible: string = "TS";
console.log(typeof fooCompatible);
fooCompatible = barCompatible;
console.log(typeof fooCompatible);

let fooIncompatible: string;
let barIncompatible: number = 1;
// fooInCompatible = barCompatible;
let fooString: string;
let barString: string = "string";

fooString = barString;
let fooStirngLiteral: "fooStringLiteral" = "fooStringLiteral";
fooString = fooStirngLiteral;

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(43, "Hamさん");
