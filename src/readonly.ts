export {};

class VisaCard {
  // readonly owner: string;
  // * publicを省略できる/readonlyのみ
  // constructor(public readonly owner: string) {}
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("きたさん");
console.log(myVisaCard);
// myVisaCard.owner = "ベーコン";
