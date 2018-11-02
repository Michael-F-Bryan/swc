use swc_common::Fold;
use super::{Registrar, PluginError};
use libloading::{Library, Symbol};
use std::ffi::OsStr;

/// A plugin loader.
/// 
/// # Safety
/// 
/// Any dynamic libraries which are loaded will be kept in memory for as long as
/// the `Loader` is alive. Using a plugin after the `Loader` has been destroyed
/// (only possible with `unsafe` code) will almost certainly result in a crash
/// because you are trying to call code that's been unloaded from memory.
#[derive(Debug, Default)]
pub struct Loader {
    libraries: Vec<Library>,
    registrar: Registrar,
}

impl Loader {
    pub fn new() -> Loader {
        Loader::default()
    }

    /// Load a dynamic library as a plugin.
    /// 
    /// # A Note on Compatibility
    /// 
    /// Different versions of `rustc` aren't guaranteed to lay out 
    /// non-`#[repr(C)]` types the same way. This means a plugin can only be 
    /// loaded by `swc` if both the plugin and `swc` were compiled with the same
    /// compiler version.
    /// 
    /// The plugin also needs to be compiled against the same version of 
    /// `swc_plugin`.
    /// 
    /// Plugin loading will fail if there is a mismatch with either the `rustc`
    /// or `swc_plugin` versions.
    pub fn load_plugin<P: AsRef<OsStr>>(&mut self, path: P) -> Result<(), PluginError> {
        let path = path.as_ref();
        let lib = Library::new(path)?;

        {
            let compiled_version = unsafe { 
                get_symbol(&lib, "swg_plugin_library_version\0")?
            };
            validate_library_version(*compiled_version)?;

            // TODO: Verify rustc version

            let register: Symbol<extern "C" fn(&mut Registrar)> = unsafe {
                get_symbol(&lib, "swc_register_plugin\0")?
            };

            register(&mut self.registrar);
        }

        self.libraries.push(lib);
        Ok(())
    }

    pub fn registrar(&mut self) -> &mut Registrar {
        &mut self.registrar
    }

    /// A convenience function for retrieving all registered implementations of 
    /// `Fold<A>`.
    pub fn get_mut<A: 'static>(&mut self) -> &mut [Box<dyn Fold<A>>] {
        self.registrar.get_mut()
    }
}

fn validate_library_version(func: extern "C" fn() -> &'static str) -> Result<(), PluginError> {
    if func() == super::SWC_PLUGIN_VERSION {
        Ok(())
    } else {
        Err(PluginError::MismatchedLibraryVersion)
    }
}

unsafe fn get_symbol<'lib, F>(lib: &'lib Library, name: &'static str) -> Result<Symbol<'lib, F>, PluginError> {
    debug_assert!(name.ends_with("\0"), "The symbol name should be null terminated");

    match lib.get::<F>(name.as_bytes()) {
        Ok(symbol) => Ok(symbol),
        Err(_) => Err(PluginError::MissingSymbol(&name[..name.len()-2])),
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    // pretend this crate is a plugin for testing purposes. This gives us 
    // access to the generated code so we can manually verify the happy path.
    register_plugin!(|_| {});

    #[test]
    fn generated_version_is_always_compatible() {
        let generated = __swc_plugins::swg_plugin_library_version;

        // the generated function should always return the correct library 
        // version because we *are* the swc_plugins crate
        assert!(validate_library_version(generated).is_ok());
    }
}