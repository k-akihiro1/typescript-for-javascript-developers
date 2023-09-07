export {};
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person("キタさん");
console.log(me.name);
const meOsaka = new Japanese.Osaka.Person("キタやん");
console.log(meOsaka);
const micheal = new English.Person("Micheal", "Joseph", "jackson");
console.log(micheal);
