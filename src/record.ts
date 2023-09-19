export {};

// Record<K, T>
// K にはunion型を指定する
// そのK に対して再起的に肩を持たせたいときにしようする
type Prefectures = "Tokyo" | "Chiba" | "Tottori" | "Shiga";
type Covid9InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

const covid9Japan: Record<Prefectures, Covid9InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 1960 },
  Chiba: { kanji_name: "東京", confirmed_cases: 263 },
  Tottori: { kanji_name: "東京", confirmed_cases: 34 },
  Shiga: { kanji_name: "滋賀", confirmed_cases: 100 }, // confirmed_casesをnumber型に変更
};
