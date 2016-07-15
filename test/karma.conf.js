module.exports = function (config) {
  config.set({
    autoWatch : true,
    
    basePath : '',

    // Fix for "JASMINE is not supported anymore" warning
    frameworks : ["jasmine"],

    files : [
      'unit/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    browsers : ['Chrome'],
    // browsers: ['PhantomJS'], // jQuery selectors seem to blow up with phantom
    browserNoActivityTimeout : 3600000,
    browserDisconnectTolerance: 10,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: true,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    junitReporter : {
      outputFile : 'test_out/unit.xml',
      suite      : 'unit'
    }
  });
}
