/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function (err, contents) {
    if (err) {
      callback(err);
    } else {
      var firstLine = contents.split('\n');
      callback(null, firstLine[0]);
    }  
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, function(err, res, body) {
    if (err) {
      callback(err);
    } else {
      callback(null, res.statusCode);
    }
  });
  // TODO
};


// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
