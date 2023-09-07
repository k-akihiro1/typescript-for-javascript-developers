export {};

// 継承
class Mahoutukai {}
class Souryo {}
class Taro extends Mahoutukai {}

// インターフェイス・リターンズ
interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }

  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
