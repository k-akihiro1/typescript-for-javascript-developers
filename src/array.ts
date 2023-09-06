export {};
let numbers: number[] = [1, 2, 3];

let string: string[] = ["Osaka", "Tokyo", "Kyoto"];
let nijigenhairetsu: number[][] = [
  [50, 100],
  [150, 300],
];

// union types
let hairetsu: (string | number | boolean)[] = [1, false, "Japan"];

// 非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ["Osaka", "Tokyo", "Kyoto"];
