'use strict';
const fs = require('fs'),
    path = require('path'),
    packageRoot = process.cwd(),
    packageJsonFile = path.join(packageRoot, 'package.json'),
    jsBeautify = require('js-beautify'),
    cssBeautify = require('js-beautify').css,
    cssBeautifyOptions = {
        newline_between_rules: true,
        selector_separator_newline: true,
        preserve_newlines: true,
        max_preserve_newlines: 1
    },
    htmlBeautify = require('js-beautify').html,
    htmlBeautifyOptions = {
        allowed_file_extensions: ["htm", "html", "xhtml", "shtml", "xml", "svg"],
        brace_style: "collapse",
        end_with_newline: false,
        indent_char: " ",
        indent_handlebars: false,
        indent_inner_html: true,
        indent_size: 4,
        max_preserve_newlines: 0,
        preserve_newlines: false,
        inline: ["input", "path", "img", "br"],
        unformatted: ["code", "pre", "sub", "sup", "em", "strong", "b", "i", "u", "strike", "big", "small"],
        wrap_line_length: 0
    },
    stripIndent = require('strip-indent');

let packageJson,
    productName = 'please-set-a-product-name-in-package-json',
    sanitizedProductName = 'set-a-product-name-in-package-json';

function makeSafeForCss(name) {
    let safeName = name.replace(/[^a-z0-9]/g, '-');
    while (safeName.indexOf('-') === 0) {
        safeName = safeName.substring(1);
    }
    return safeName;
}

if (fs.existsSync(packageJsonFile)) {
    packageJson = require(packageJsonFile);
    productName = packageJson.name;
    sanitizedProductName = makeSafeForCss(packageJson.name);
}

module.exports = {
    productName: productName, // The "name" key from the Product's package.json file
    configMethod: 'extend', // Method of modifying default config. If 'extend', Product-specific config will merge with defaults, if 'override', Product-specific config will completely replace defaults
    codeNamespace: sanitizedProductName, // Used as the name for concatenated macro, icon, and script files as well as the JSON tokens namespace and SCSS token prefix. If the namespace was 'esds' this would result in: esds.njk, esds.svg, esds.js, {{ esds.token_name }}, and $esds-token-name
    rootPath: '', // The root path of the entire Product, defaults to the same directory as the Product's gulpfile.js
    packageRoot: packageRoot,
    concatenateComponentMacros: true, // Set to false when esds-build is used to build single-component packages and only one macro exists in the project
    componentsPath: 'components', // Name of the top-level components directory
    dataPath: 'data', // Name of the top-level data directory
    dependenciesPath: 'node_modules', // Name of the top-level dependencies directory
    distPath: 'dist', // Name of the top-level dist directory
    docsPath: 'docs', // Name of the top-level docs directory
    iconsPath: 'icons', // Name of the top-level icons directory
    imagesPath: 'images', // Name of the top-level images directory
    scriptsPath: 'scripts', // Name of the top-level scripts directory
    sinksPath: 'sink-pages', // Name of the top-level sink-pages directory
    stylesPath: 'styles', // Name of the top-level styles directory
    templatesPath: 'templates', // Name of the top-level templates directory
    testPath: 'test', // Name of the top-level test directory
    tokensPath: 'tokens', // Name of the top-level tokens directory
    webroot: '_site', // Name of the top-level webroot directory
    forceCleanWebroot: false, // Use if the webroot is outside the default project directory, useful for publishing a monorepo doc site on github pages
    versionedDocs: true, // If true, webroot folder structure will support a '/v/' directory containing previous releases
    latestVersionPath: 'latest', // If versionedDocs is true, where is the latest version of the docs built? Relative to webroot
    tokensSourceFile: '*.yaml', // Tokens source filename
    tokensFormats: ['.scss', '.json'], // File formats of generated tokens files
    avrConfig: 'backstop.js', // Location of avg config file
    avrBaseConfig: '', // Location of a base backstop config file, useful for monorepos
    runAvrInDocker: true,
    stylesLintConfig: path.join(packageRoot, '.sass-lint.yml'), // Location of styles lint config, defaults to .sass-lint.yml in the root
    scriptsLintConfig: path.join(packageRoot, '.eslintrc'), // Location of scripts lint config, defaults to .eslintrc in the root
    iconSourceExtension: '.svg', // Icon File extension
    markupSourceExtension: '.nunjucks', // Markup template file extension
    scriptsSourceExtension: '.js', // Scripts file extension
    stylesSourceExtension: '.scss', // Styles file extension
    manageNunjucksEnv: false, // hook to configure the Nunjucks templating environment, add additional filters, etc.
    includeMarkdownWrapper: false, // include a wrapper div when the nunjucks markdown filter is used
    markdownWrapperClass: 'esds-markdown-wrap', // wrapper class when nunjucks markdown filter is used
    copyTasks: [], // Product specific set of tasks to copy a file from one destination to another. For copying jQuery from node_modules to the webroot as an example
    allTaskName: 'all', // gulp task name segment, ex: build:all, watch:all
    avrTaskName: 'avr', // gulp task name segment, ex: avr:reference, avr:test
    buildTaskName: 'build', // gulp task name segment, ex: markup:build, styles:build
    cleanTaskName: 'clean', // gulp task name segment, ex: clean:webroot
    concatTaskName: 'concatenate', // gulp task name segment, ex: markup:concatenate:macros, scripts:concatenate
    copyTaskName: 'copy', // gulp task name segment, ex: copy:images
    distTaskName: 'dist', // gulp task name segment, ex: copy:dist
    docsTaskName: 'docs', // gulp task name segment, ex: markup:build:docs
    iconsTaskName: 'icons', // gulp task name segment, ex: icons:optimize
    imagesTaskName: 'images', // gulp task name segment, ex: copy:images
    lintTaskName: 'lint', // gulp task name segment, ex: styles:lint, scripts:lint
    markupTaskName: 'markup', // gulp task name segment, ex: markup:build, watch:markup
    macrosTaskName: 'macros', // gulp task name segment, ex: markup:concatenate:macros
    templatesTaskName: 'templates', // gulp task name segment, ex: watch:markup:templates
    optimizeTaskName: 'optimize', // gulp task name segment, ex: icons:optimize
    postprocessTaskName: 'postprocess', // gulp task name segment, ex: styles:postprocess
    precompileTaskName: 'precompile', // gulp task name segment, ex: styles:precompile
    productTaskName: sanitizedProductName, // gulp task name segment, by default, a sanitized version of the "name" key in package.json, ex: eightshapes-build-tools
    tokensTaskName: 'tokens', // gulp task name segment, ex: tokens:build
    scriptsTaskName: 'scripts', // gulp task name segment, ex: scripts:build
    stylesTaskName: 'styles', // gulp task name segment, ex: styles:build
    watchTaskName: 'watch', // gulp task name segment, ex: watch:scripts, watch:styles
    webrootTaskName: 'webroot', // gulp task name segment, ex: clean:webroot
    showTaskHookNames: false, // If true, will show all the esds lifecycle hook names in the console
    manageNunjucksEnv: function (env) {
        env.addFilter('htmlbeautify', function (string) {
            return htmlBeautify(string, htmlBeautifyOptions);
        });

        env.addFilter('cssbeautify', function (string) {
            return cssBeautify(string, cssBeautifyOptions);
        });

        env.addFilter('jsbeautify', function (string) {
            return jsBeautify(string);
        });

        env.addFilter('stripindent', function (string) {
            return stripIndent(string);
        });

        env.addFilter('getcontext', function () {
            return this.ctx;
        });

        env.addFilter('split', function (str, seperator) {
            return str.split(seperator);
        });

        env.addFilter('isstring', function (obj) {
            return typeof obj === 'string';
        });

        env.addFilter('getContrastRatioForHex', function (foregroundColor, backgroundColor) {
            // MIT Licensed function courtesty of Lea Verou
            // https://github.com/LeaVerou/contrast-ratio/blob/gh-pages/color.js
            Math.round = (function () {
                var round = Math.round;

                return function (number, decimals) {
                    decimals = +decimals || 0;

                    var multiplier = Math.pow(100, decimals);

                    return round(number * multiplier) / multiplier;
                };
            })();

            // MIT Licensed functions courtesty of Qambar Raza
            // https://github.com/Qambar/color-contrast-checker/blob/master/src/colorContrastChecker.js
            var rgbClass = {
                toString: function () {
                    return '<r: ' + this.r +
                        ' g: ' + this.g +
                        ' b: ' + this.b +
                        ' >';
                }
            };

            function getRGBFromHex(color) {
                var rgb = Object.create(rgbClass),
                    rVal,
                    gVal,
                    bVal;

                if (typeof color !== 'string') {
                    throw new Error('must use string');
                }

                rVal = parseInt(color.slice(1, 3), 16);
                gVal = parseInt(color.slice(3, 5), 16);
                bVal = parseInt(color.slice(5, 7), 16);

                rgb.r = rVal;
                rgb.g = gVal;
                rgb.b = bVal;

                return rgb;
            }

            function calculateSRGB(rgb) {
                var sRGB = Object.create(rgbClass),
                    key;

                for (key in rgb) {
                    if (rgb.hasOwnProperty(key)) {
                        sRGB[key] = parseFloat(rgb[key] / 255, 10);
                    }
                }

                return sRGB;
            }

            function calculateLRGB(rgb) {
                var sRGB = calculateSRGB(rgb);
                var lRGB = Object.create(rgbClass),
                    key,
                    val = 0;

                for (key in sRGB) {
                    if (sRGB.hasOwnProperty(key)) {
                        val = parseFloat(sRGB[key], 10);
                        if (val <= 0.03928) {
                            lRGB[key] = val / 12.92;
                        } else {
                            lRGB[key] = Math.pow((val + 0.055) / 1.055, 2.4);
                        }
                    }
                }

                return lRGB;
            }

            function calculateLuminance(lRGB) {
                return 0.2126 * lRGB.r + 0.7152 * lRGB.g + 0.0722 * lRGB.b;
            }

            function getContrastRatio(lumA, lumB) {
                var ratio,
                    lighter,
                    darker;

                if (lumA >= lumB) {
                    lighter = lumA;
                    darker = lumB;
                } else {
                    lighter = lumB;
                    darker = lumA;
                }

                ratio = (lighter + 0.05) / (darker + 0.05);

                return Math.round(ratio, 1);
            }

            var color1 = getRGBFromHex(foregroundColor),
                color2 = getRGBFromHex(backgroundColor),
                l1RGB = calculateLRGB(color1),
                l2RGB = calculateLRGB(color2),
                l1 = calculateLuminance(l1RGB),
                l2 = calculateLuminance(l2RGB);

            return getContrastRatio(l1, l2);
        });
    }
};
