initSidebarItems({"fn":[["parse_error","An error with a default error message."]],"macro":[["Token",""],["alt","Run a series of parsers, returning the result of the first one which succeeds."],["braces","Same as the `parens` macro, but for braces."],["brackets","Same as the `parens` macro, but for brackets."],["call","Invoke the given parser function with the passed in arguments."],["cond","Conditionally execute the given parser."],["cond_reduce","Fail to parse if condition is false, otherwise parse the given parser."],["do_parse","Run a series of parsers, one after another, optionally assigning the results a name. Fail if any of the parsers fails."],["epsilon","Parses nothing and always succeeds."],["grouped","Same as the `parens` macro, but for none-delimited sequences (groups)."],["input_end",""],["keyword",""],["many0","Parse zero or more values using the given parser."],["map","Transform the result of a parser by applying a function or closure."],["named","Define a function from a parser combination."],["not","Parses successfully if the given parser fails to parse. Does not consume any of the input."],["opt_vec","Turn a failed parse into an empty vector. The argument parser must itself return a vector."],["option","Turn a failed parse into `None` and a successful parse into `Some`."],["parens","Parse a parenthesized-surrounded subtree."],["peek","Parse a value without consuming it from the input data."],["punct",""],["reject","Unconditionally fail to parse anything. This may be useful in ignoring some arms of a `switch!` parser."],["switch","Pattern-match the result of a parser to select which other parser to run."],["syn","Parse a type through the `Synom` trait."],["terminated","Parse two things, returning the value of the first."],["tuple","Run a series of parsers and produce all of the results in a tuple."],["value","Produce the given value without parsing anything. Useful as an argument to `switch!`."]],"mod":[["cursor","This module defines a cheaply-copyable cursor into a TokenStream's data."],["delimited",""],["span",""],["tokens","Discrete tokens that can be parsed out by synom."]],"struct":[["ParseError",""]],"trait":[["Synom",""]],"type":[["PResult","The result of a parser"]]});