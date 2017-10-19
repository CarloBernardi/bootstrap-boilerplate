let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for application. By default will execute these tasks:
 |   - Sass compilation with URL rewriting and Autoprefixer PostCSS plugin
 |   - JavaScript bundling with ES5 code compilation
 |   - Vendor libraries extraction, for improved long-term caching
 |   - In-file source maps generation
 |   - Browser synchronization on changes
 |   - Minification on production
 */

mix
    .setPublicPath('dist')
    .setResourceRoot('../')
    .autoload({
        'jquery': [
            '$', 'window.$', 'jQuery', 'window.jQuery'
        ],
        'popper.js/dist/umd/popper.js': [
            'Popper', 'window.Popper'
        ]
    })
    .sass('src/assets/scss/app.scss', 'dist/css/')
    .js('src/assets/js/app.js', 'dist/js/app.js')
    .extract(['jquery', 'popper.js/dist/umd/popper.js'])
    .sourceMaps()
    .copyDirectory('src/assets/img', 'dist/img')
    .browserSync({
        proxy: 'localhost/webpack',
        files: [
            '*.{php|html}',
            'dist/**/*'
        ]
    });


// Full API
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
