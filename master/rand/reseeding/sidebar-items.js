initSidebarItems({"constant":[["DEFAULT_GENERATION_THRESHOLD","How many bytes of entropy the underling RNG is allowed to generate before it is reseeded"]],"struct":[["ReseedWithDefault","Reseed an RNG using a `Default` instance. This reseeds by replacing the RNG with the result of a `Default::default` call."],["ReseedingRng","A wrapper around any RNG which reseeds the underlying RNG after it has generated a certain number of random bytes."]],"trait":[["Reseeder","Something that can be used to reseed an RNG via `ReseedingRng`."]]});