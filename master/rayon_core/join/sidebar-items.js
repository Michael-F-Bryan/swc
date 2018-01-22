initSidebarItems({"fn":[["join","The `join` function takes two closures and potentially runs them in parallel. It returns a pair of the results from those closures."],["join_context","The `join_context` function is identical to `join`, except the closures have a parameter that provides context for the way the closure has been called, especially indicating whether they're executing on a different thread than where `join_context` was called.  This will occur if the second job is stolen by a different thread, or if `join_context` was called from outside the thread pool to begin with."],["join_recover_from_panic","If job A panics, we still cannot return until we are sure that job B is complete. This is because it may contain references into the enclosing stack frame(s)."]]});