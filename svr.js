const ngrok      = require('ngrok');
const express    = require('express');
var app  = express();
var port = 8091;

// temp
app.get('/te', function(req, res) {
  const exec = require('child_process').exec;
  exec('node /Users/reinforchu/homebot/te.js', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
 });
});

// hu
app.get('/hu', function(req, res) {
  const exec = require('child_process').exec;
  exec('node /Users/reinforchu/homebot/hu.js', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
 });
});

// say Alexa, Tarot card. Bridge Amazon Echo
app.get('/card', function(req, res) {
  const exec = require('child_process').exec;
  exec('node /Users/reinforchu/homebot/card.js', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
 });
});

// say test
app.get('/say', function(req, res) {
  const exec = require('child_process').exec;
  exec('node /Users/reinforchu/homebot/say.js', (err, stdout, stderr) => {
  if (err) { console.log(err); }
  console.log(stdout);
 });
});

app.listen(port, function() {
  ngrok.connect(port, function(err, url) {
    console.log('Endpoint: ' + url);
  });
});