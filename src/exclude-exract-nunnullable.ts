export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

type FunctionType = Exclude<SomeTypes, string | number>;
type NumFunctionType = Exclude<SomeTypes, DebugType>;

// `SameTypes`から`Function`型を除外した新しい型を定義します。
// しかし、このコードはエラーになります。なぜなら、`Function`はこのコードの中で定義されていないからです。
// 正しくは`DebugType`を除外することで、`string | number`型を得ることができます。
type TypeExcludingFunction = Exclude<SomeTypes, Function>;

type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type NonFunctionTypeExtractingByExtract = Extract<SomeTypes, Function>;

type NullableTypes = string | number | null | undefined;
// type NonNullableTypes = string | number
type NonNullableTypes = NonNullable<NullableTypes>;
