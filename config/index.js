var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' +  configValues.pass + '@ds033036.mlab.com:33036/pa_todo';
    }
}