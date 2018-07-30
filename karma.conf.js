var webpackConfig = require('./webpack.config.js');

<<<<<<< HEAD
module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    files: ['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
=======
module.exports = function(config) {
    config.set({
        browsers: ['Chrome'],
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx'],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
               timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        }
    });
}
>>>>>>> e7a7c8d0b04b80bcd4b8bd29f2d1a0521078bd38
