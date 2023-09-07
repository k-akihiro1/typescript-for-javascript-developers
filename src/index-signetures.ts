export {};

interface Profile {
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile: Profile = { name: "Ham", underTwenty: false };

// How to write index signatures
// { [ index: typeForIndex ]: typeForIndex }

profile.name = "Ham";
profile.age = 43;
profile.nationlity = "Japan";
