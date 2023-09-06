export {};
// オブジェクト
type ObjectType = {
  name: string;
  age: number;
};
//　インターフェイス
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: "Ham",
  age: 43,
};
