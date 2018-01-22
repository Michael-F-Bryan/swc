initSidebarItems({"enum":[["MatchLiteralType",""],["MatchNfaType",""],["MatchType",""]],"struct":[["Exec","Exec manages the execution of a regular expression."],["ExecBuilder","Facilitates the construction of an executor by exposing various knobs to control how a regex is executed and what kinds of resources it's permitted to use."],["ExecNoSync","ExecNoSync is like Exec, except it embeds a reference to a cache. This means it is no longer Sync, but we can now avoid the overhead of synchronization to fetch the cache."],["ExecNoSyncStr","ExecNoSyncStr is like ExecNoSync, but matches on &str instead of &[u8]."],["ExecReadOnly","ExecReadOnly comprises all read only state for a regex. Namely, all such state is determined at compile time and never changes during search."],["Parsed","Parsed represents a set of parsed regular expressions and their detected literals."],["ProgramCacheInner",""]],"type":[["ProgramCache","ProgramCache maintains reusable allocations for each matching engine available to a particular program."]]});