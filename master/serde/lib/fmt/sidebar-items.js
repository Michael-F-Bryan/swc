initSidebarItems({"fn":[["format","The `format` function takes an [`Arguments`] struct and returns the resulting formatted string."],["write","The `write` function takes an output stream, and an `Arguments` struct that can be precompiled with the `format_args!` macro."]],"mod":[["rt",""]],"struct":[["ArgumentV1","This struct represents the generic \"argument\" which is taken by the Xprintf family of functions. It contains a function to format the given value. At compile time it is ensured that the function and the value have the correct types, and then this struct is used to canonicalize arguments to one type."],["Arguments","This structure represents a safely precompiled version of a format string and its arguments. This cannot be generated at runtime because it cannot safely be done, so no constructors are given and the fields are private to prevent modification."],["DebugList","A struct to help with `fmt::Debug` implementations."],["DebugMap","A struct to help with `fmt::Debug` implementations."],["DebugSet","A struct to help with `fmt::Debug` implementations."],["DebugStruct","A struct to help with `fmt::Debug` implementations."],["DebugTuple","A struct to help with `fmt::Debug` implementations."],["Error","The error type which is returned from formatting a message into a stream."],["Formatter","A struct to represent both where to emit formatting strings to and how they should be formatted. A mutable version of this is passed to all formatting traits."]],"trait":[["Binary","`b` formatting."],["Debug","`?` formatting."],["Display","Format trait for an empty format, `{}`."],["LowerExp","`e` formatting."],["LowerHex","`x` formatting."],["Octal","`o` formatting."],["Pointer","`p` formatting."],["UpperExp","`E` formatting."],["UpperHex","`X` formatting."],["Write","A collection of methods that are required to format a message into a stream."]],"type":[["Result","The type returned by formatter methods."]]});