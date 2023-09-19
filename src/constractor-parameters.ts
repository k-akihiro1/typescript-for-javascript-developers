export {};

class Person {
  // `name`と`age`はPersonクラスのプロパティです。
  name: string;
  age: number;

  // コンストラクタは、Personクラスの新しいインスタンスを作成するために使用されます。
  // `name`と`age`パラメータは、新しいPersonオブジェクトのプロパティを設定します。
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
let taro = new Person("Taro", 43);
console.log(taro);

// `PersonType`は`Person`クラスの型を参照します。
type PersonType = typeof Person;
// `Profile`は`Person`クラスのコンストラクタのパラメータの型を参照します。
type Profile = ConstructorParameters<PersonType>;
// `Profile`は`Person`クラスのコンストラクタのパラメータの配列です。
const Profile: Profile = ["Ham", 33];
const ham = new Person(...Profile);
console.log(ham);
// => Person { name: 'Ham', age: 33 }

type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;
