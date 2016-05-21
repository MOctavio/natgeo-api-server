var express = require('express');
var app = express();
var photo = require("nat-geo-api");

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var env_port = process.env.PORT || 8080;

photo.run({
  port: env_port
});
