export {};

type Profile = {
  name: string;
  age?: number; // optional を必須にしたい
  zipCode: number;
};

type PirtialType = Partial<Profile>;
type RequiredType = Required<Profile>;
