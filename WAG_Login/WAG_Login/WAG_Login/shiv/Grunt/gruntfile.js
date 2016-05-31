/*
This file in the main entry point for defining grunt tasks and using grunt plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409
*/
module.exports = function (grunt) {
    grunt.initConfig({
        requirejs_obfuscate: {
            options: {
                dir: 'www/js',
                salt: 'salt',
                root: 'com',
                length: 6,
                quotes: 'double',
                exclude: [
                    'lib/require.js',
                    'lib/jquery-2.0.3.js'
                ],
                output: false
            }
        },
    });
};