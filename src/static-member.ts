export {};

class Me {
  static isProgramer: boolean = true;
  static firstName: string = "kitao";
  static lastName: string = "akihiro";

  static work() {
    // return `Hey,gays!THis is ${Me.firstName}`;
    return `Hey,gays!THis is ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgramer);
console.log(Me.isProgramer);
console.log(Me.work());
