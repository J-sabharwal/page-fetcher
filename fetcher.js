const net = require('net');
const request = require('request');
const fs = require('fs')

let arg = process.argv.slice(2);

request(arg[0], (error, response, body) => {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  let stats =  fs.statSync(arg[1]);
  console.log(`Downloaded and saved ${stats.size} bytes to ${arg[1]}`)
});