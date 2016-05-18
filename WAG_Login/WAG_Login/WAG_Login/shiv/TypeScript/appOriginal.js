// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: "../../shiv/TypeScript",
    urlArgs: "bust=" + (new Date()).getTime(),
    wrapShim: true,
    paths: {
        'jquery': '../../Library/jquery-1.11.2.min',
        'jqueryUi': '../../Library/jquery-ui',
        'colPicker': '../../Scripts/evoluteur.colorpicker/colorpicker-master/js/evol.colorpicker',
        'mainJQ': './MainJQ'
    },
    shim: {
        jqueryUi: {
            deps: [
                 'jquery'
            ],
            exports: 'jQuery'
        },
        colPicker: {
            deps: [
                'jquery', 'jqueryUi'
            ],
            exports: 'jQuery'
        },
        mainJQ: {
            deps: [
               'jquery', 'jqueryUi', 'colPicker'
            ],
            exports: 'MainJQ'
        }
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['mainJQ']);


