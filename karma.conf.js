const webpack = require('webpack');

function configuration (config, webpack) {
  config.set({
    basePath: '',
    frameworks: ["jasmine"],
    files: [
      "node_modules/angular/angular.js",
      "node_modules/angular-mocks/angular-mocks.js",
      "test/globals.js",
      "source/**/*.spec.js"
    ],
    preprocessors: {
      "**/*.spec.js": ["webpack", "sourcemap"]
    },
    webpack: {
      devtool: 'inline-source-map',
      resolve: {
        enforceExtension: false,
        extensions: [".js"]
      },
      module: {
        rules: [{
          test: /\.js$/,
          exclude: /node_modules/,
          enforce: 'pre',
          use: [{
            loader: 'eslint-loader'
          }]
        }, {
          test: /\.js$/,
          exclude: /node_modules/,
          use: [{
            loader: 'ng-annotate-loader'
          }, {
            loader: 'babel-loader',
            query: {
              presets: [
                'env',
                'es2017',
                'flow'
              ],
              plugins: [
                'transform-decorators-legacy',
                'transform-flow-strip-types'
              ]
            }
          }]
        }, {
          test: /\.html$/,
          use: [{
            loader: 'raw-loader'
          }]
        }, {
          test: /\.(jpg|png|woff|woff2|eot|ttf|svg|ico)$/,
          use: [{
            loader: 'null-loader'
          }]
        }, {
          test: /\.(json|geojson)$/,
          use: [{
            loader: 'json-loader'
          }]
        }, {
          test: /\.js$/,
          exclude: [
            /\.spec\.js$/,
            /node_modules/
          ],
          enforce: 'post',
          use: [{
            loader: 'istanbul-instrumenter-loader'
          }]
        }]
      },
      externals: {
        "angular": "angular"
      },
      plugins: []
    },
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    port: 38121,
    colors: true,
    logLevel: config.LOG_INFO,
    singleRun: false,
    autoWatch: true,
    concurrency: Infinity,
    reporters: ['mocha', 'junit', 'coverage'],
    browsers: ['PhantomJS'],
    junitReporter: {
      outputDir: '.tmp/unit-tests/'
    },
    browserNoActivityTimeout: 200000,
    mochaReporter: {
      output: 'autowatch'
    },
    coverageReporter: {
      dir: '.tmp/coverage/',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      reporters: [
        // { type: "html" },
        { type: "text-summary" },
        { type: "cobertura", file: "cobertura-coverage.xml" }
      ],
      mime: {
        'text/javascript': ['js']
      }
    }
  });
}

module.exports = configuration;
