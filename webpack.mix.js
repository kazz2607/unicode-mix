const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
mix.less('resources/less/style.less', 'public/css')
.less('resources/less/admin.less', 'public/css')
.sass('resources/scss/app.scss', 'public/css/style.css')
.stylus('resources/stylus/app.styl', 'public/css');
// .styles('resources/css/style.css', 'public/css');


