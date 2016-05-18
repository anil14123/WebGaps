({
wrapShim: true,
 baseUrl: "../../shiv/TypeScript",
  
optimize: "uglify",
uglify2: {
        //Example of a specialized config. If you are fine
        //with the default options, no need to specify
        //any of these properties.
        output: {
            beautify: true
        },
        compress: {
            sequences: false,
            global_defs: {
                DEBUG: false
            }
        },
        warnings: true,
        mangle: false
    },

 uglify: {
        toplevel: true,
        ascii_only: true,
        beautify: true,
        max_line_length: 1000,

        //How to pass uglifyjs defined symbols for AST symbol replacement,
        //see "defines" options for ast_mangle in the uglifys docs.
        defines: {
            DEBUG: ['name', 'true']
        },

        //Custom value supported by r.js but done differently
        //in uglifyjs directly:
        //Skip the processor.ast_mangle() part of the uglify call (r.js 2.0.5+)
        no_mangle: true
    },
  name: "app",
    insertRequire: ['app'],
    out: "./app2.js",

    //An alternative to "include". Normally only used in a requirejs.config()
    //call for a module used for mainConfigFile, since requirejs will read
    //"deps" during runtime to do the equivalent of require(deps) to kick
    //off some module loading.
    deps: ["../../Library/globalJSCommon.js"],
})