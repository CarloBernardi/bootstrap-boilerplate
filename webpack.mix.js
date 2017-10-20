let mix = require('laravel-mix');

/*
 * -----------------------------------
 * Bootstrap Boilerplate Configuration
 * -----------------------------------
 */

// Path to dist folder
const DIST = 'dist';

// Proxy an existing virtual host (eg: 'boilerplate.dev', 'localhost/bootstrap-boilerplate').
// If null, use the built-in static server.
const PROXY = null;


/*
 * --------------------
 * Mix Asset Management
 * --------------------
 */

mix
    .setResourceRoot('../')

    .setPublicPath(DIST)

    .autoload({
        'jquery': [
            '$', 'window.$', 'jQuery', 'window.jQuery'
        ],
        'popper.js/dist/umd/popper.js': [
            'Popper', 'window.Popper'
        ]
    })

    .copyDirectory('src/assets/img', DIST + '/img')

    .sass('src/assets/scss/app.scss', 'css/app.css')
    // .sass('src/assets/scss/another.scss', 'css/another.css')
    // .sass('src/assets/scss/**/*', 'css/all.css')

    .js('src/assets/js/app.js', 'js/app.js')
    // .js('src/assets/js/another.js', 'js/another.js')
    // .js('src/assets/js/**/*', 'js/all.js')

    .extract(['jquery', 'popper.js/dist/umd/popper.js'])

    .sourceMaps()

    .browserSync({
        server: PROXY === null,
        proxy: PROXY,
        files: [
            '*.{php|html}',
            DIST + '/**/*'
        ]
    });


/*
 * --------------------
 * Full Laravel Mix API
 * --------------------
 */

// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.ts(src, output); <-- Requires tsconfig.json to exist in the same folder as webpack.mix.js
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.postCss(src, output, [require('postcss-some-plugin')()]);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });
