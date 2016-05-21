var express = require('express');
var app = express();
var photo = require("nat-geo-api");

photo.run({
  port: 8000
});
