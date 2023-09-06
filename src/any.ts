import axios from "axios";
export {};

let url: string =
  "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function (response) {
  // interfaceで独自の型を作ることができる（Goの構造体:type struct）
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[];
  data = response.data;
  // 型チェック用
  // data = [
  //   {
  //     id: 1,
  //     title: "title",
  //     description: "description",
  //   },
  // ];
  console.log(data);
});
