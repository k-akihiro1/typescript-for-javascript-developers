export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;

// type MyExclude<T, U> = T extends U ? never : T;
type MyExclude<> =
  | (string extends string | number ? never : string) // never が評価される
  | (number extends string | number ? never : number) // never が評価される
  | (DebugType extends string | number ? never : DebugType); // DebugType が評価される

type MyFunctionType = MyExclude;

type FunctionTypeExtractingByExtract = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
