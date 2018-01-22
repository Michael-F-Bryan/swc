initSidebarItems({"constant":[["BS",""],["CT",""],["O",""],["QU",""]],"enum":[["Reference",""]],"fn":[["as_str",""],["decode_hex_escape",""],["error",""],["ignore_escape","Parses a JSON escape sequence and discards the value. Assumes the previous byte read was a backslash."],["next_or_eof",""],["parse_escape","Parses a JSON escape sequence and appends it into the scratch space. Assumes the previous byte read was a backslash."]],"mod":[["private",""]],"static":[["ESCAPE",""]],"struct":[["IoRead","JSON input source that reads from a std::io input stream."],["Position",""],["SliceRead","JSON input source that reads from a slice of bytes."],["StrRead","JSON input source that reads from a UTF-8 string."]],"trait":[["Read","Trait used by the deserializer for iterating over input. This is manually \"specialized\" for iterating over &[u8]. Once feature(specialization) is stable we can use actual specialization."]]});