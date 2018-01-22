initSidebarItems({"constant":[["STATE_DEAD","A dead state means that the state has been computed and it is known that once it is entered, no future match can ever occur."],["STATE_MATCH","A match state means that the regex has successfully matched."],["STATE_MAX","The maximum state pointer. This is useful to mask out the \"valid\" state pointer from a state with the \"start\" or \"match\" bits set."],["STATE_QUIT","A quit state means that the DFA came across some input that it doesn't know how to process correctly. The DFA should quit and another matching engine should be run in its place."],["STATE_START","A start state is a state that the DFA can start in."],["STATE_UNKNOWN","An unknown state means that the state has not been computed yet, and that the only way to progress is to compute it."]],"enum":[["Result","The result of running the DFA."]],"fn":[["can_exec","Return true if and only if the given program can be executed by a DFA."],["push_inst_ptr","Adds ip to data using delta encoding with respect to prev."],["read_vari32","https://developers.google.com/protocol-buffers/docs/encoding#varints"],["read_varu32","https://developers.google.com/protocol-buffers/docs/encoding#varints"],["show_state_ptr",""],["usize_to_u32",""],["vb","Helper function for formatting a byte as a nice-to-read escaped string."],["write_vari32","https://developers.google.com/protocol-buffers/docs/encoding#varints"],["write_varu32","https://developers.google.com/protocol-buffers/docs/encoding#varints"]],"struct":[["Byte","Byte is a u8 in spirit, but a u16 in practice so that we can represent the special EOF sentinel value."],["Cache","A reusable cache of DFA states."],["CacheInner","CacheInner is logically just a part of Cache, but groups together fields that aren't passed as function parameters throughout search. (This split is mostly an artifact of the borrow checker. It is happily paid.)"],["EmptyFlags","A set of flags for zero-width assertions."],["Fsm","Fsm encapsulates the actual execution of the DFA."],["InstPtrs",""],["State","State is a DFA state. It contains an ordered set of NFA states (not necessarily complete) and a smattering of flags."],["StateFlags","A set of flags describing various configurations of a DFA state. This is represented by a `u8` so that it is compact."],["Transitions","The transition table."],["TransitionsRow",""]],"type":[["InstPtr","InstPtr is a 32 bit pointer into a sequence of opcodes (i.e., it indexes an NFA state)."],["StatePtr","StatePtr is a 32 bit pointer to the start of a row in the transition table."]]});