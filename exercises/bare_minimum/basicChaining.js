/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promiseFns = require('./promiseConstructor.js');
var morePromiseFns = require('./promisification.js');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  console.log(readFilePath);
  return promiseFns.pluckFirstLineFromFileAsync(readFilePath)
    .then(function(username) {
      return morePromiseFns.getGitHubProfileAsync(username);
    })
    .then(function(profile) {
      fs.writeFileSync(writeFilePath, JSON.stringify(profile)); 
    })
    .catch(function (err) {
      console.log('Caught Error: ' + err);
    });

};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
