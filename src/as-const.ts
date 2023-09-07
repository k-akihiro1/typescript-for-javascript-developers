export {};

let name = "Astushi";

name = "Ham";

let nickname = "Ham" as const;
nickname = "Hamtaro";

let profile = {
  name: "Astushi",
  height: 178,
} as const;

profile.name = "Ham";
profile.height = 180;
