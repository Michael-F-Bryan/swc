initSidebarItems({"enum":[["GenericParam","A generic type parameter, lifetime, or const generic: `T: Into<String>`, `'a: 'b`, `const LEN: usize`."],["TraitBoundModifier","A modifier on a trait bound, currently only used for the `?` in `?Sized`."],["TypeParamBound","A trait or lifetime used as a bound on a type parameter."],["WherePredicate","A single predicate in a `where` clause: `T: Deserialize<'de>`."]],"mod":[["parsing",""],["printing",""]],"struct":[["BoundLifetimes","A set of bound lifetimes: `for<'a, 'b, 'c>`."],["ConstParam","A const generic parameter: `const LENGTH: usize`."],["ConstParams",""],["ConstParamsMut",""],["Generics","Lifetimes and type parameters attached to a declaration of a function, enum, trait, etc."],["ImplGenerics","Returned by `Generics::split_for_impl`."],["LifetimeDef","A lifetime definition: `'a: 'b + 'c + 'd`."],["Lifetimes",""],["LifetimesMut",""],["PredicateEq","An equality predicate in a `where` clause (unsupported)."],["PredicateLifetime","A lifetime predicate in a `where` clause: `'a: 'b + 'c`."],["PredicateType","A type predicate in a `where` clause: `for<'c> Foo<'c>: Trait<'c>`."],["TraitBound","A trait used as a bound on a type parameter."],["Turbofish","Returned by `TypeGenerics::as_turbofish`."],["TypeGenerics","Returned by `Generics::split_for_impl`."],["TypeParam","A generic type parameter: `T: Into<String>`."],["TypeParams",""],["TypeParamsMut",""],["WhereClause","A `where` clause in a definition: `where T: Deserialize<'de>, D: 'static`."]]});