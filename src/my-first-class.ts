export {};

class person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile() {
    return `name: ${this.name}, age: ${this.age}`;
  }
}
let taro = new person("taro", 30);
console.log(taro.profile());
// let hanako = new person();
