initSidebarItems({"constant":[["WORKER_THREAD_STATE",""]],"fn":[["global_registry","Starts the worker threads (if that has not already happened). If initialization has not already occurred, use the default configuration."],["in_worker","If already in a worker-thread, just execute `op`.  Otherwise, execute `op` in the default thread-pool. Either way, block until `op` completes and return its return value. If `op` panics, that panic will be propagated as well.  The second argument indicates `true` if injection was performed, `false` if executed directly."],["init_global_registry","Starts the worker threads (if that has not already happened) with the given configuration."],["init_registry","Initializes the global registry with the given configuration. Meant to be called from within the `THE_REGISTRY_SET` once function. Declared `unsafe` because it writes to `THE_REGISTRY` in an unsynchronized fashion."],["main_loop","////////////////////////////////////////////////////////////////////////"]],"static":[["THE_REGISTRY","//////////////////////////////////////////////////////////////////////// Initialization"],["THE_REGISTRY_SET",""]],"struct":[["GlobalPoolAlreadyInitialized","Error if the gloal thread pool is initialized multiple times."],["Registry",""],["RegistryId",""],["RegistryState",""],["Terminator",""],["ThreadInfo",""],["WorkerThread","//////////////////////////////////////////////////////////////////////// WorkerThread identifiers"]]});