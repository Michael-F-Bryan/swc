#![feature(specialization, proc_macro)]

extern crate swc_common;
extern crate swc_macros;
use swc_common::{Fold, FoldWith};

pub trait AssertFolder<T>: Fold<T> {}

// check for trait bound

pub struct LitFolder;
impl Fold<Lit> for LitFolder {
    fn fold(&mut self, _: Lit) -> Lit {
        Lit::A
    }
}
impl AssertFolder<Expr> for LitFolder {}
impl AssertFolder<ExprKind> for LitFolder {}

#[derive(Debug, Fold, PartialEq, Eq)]
pub struct Expr {
    pub node: ExprKind,
    /// This field should be skipped.
    pub bool_field: bool,
    /// Ensure that #[fold(ignore)] works.
    #[fold(ignore)]
    pub ignored: PanicOnFold,
    /* /// Ensure that #[cfg] works.
     * #[cfg(feature = "__never_exists")]
     * pub never_exists: Lit, */
}

#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub struct PanicOnFold;

impl<F> FoldWith<F> for PanicOnFold {
    fn fold_children(self, _: &mut F) -> Self {
        unreachable!("this should not be called")
    }
}

#[derive(Debug, Fold, PartialEq, Eq)]
pub enum ExprKind {
    RecursiveBoud(Box<Expr>),
    Rec2(Vec<Option<Box<Expr>>>),

    Lit(Lit),
}

#[derive(Debug, Fold, PartialEq, Eq)]
pub enum Lit {
    A,
    B,
}
