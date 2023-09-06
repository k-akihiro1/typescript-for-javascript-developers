export {};
// シグネチャー
function doouble(value: number): number;
function doouble(value: string): string;

function doouble(value: any): any {
  console.log(typeof value);
  if (typeof value === "number") {
    return value * 2;
  } else if (typeof value === "string") {
    return value + value;
  }
  // シグネチャーで分岐されている
  // else {
  //   throw "numberでもstringでもありません";
  // }
}
console.log(doouble(100));
console.log(doouble("Go"));

//元々の関数
// function doouble(value: any): any {
//   return value * 2;
// }

// function doouble(value: string): string {
//   return value + value;
// }
