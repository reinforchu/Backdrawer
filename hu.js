const webClient = require('request');
const jq        = require('node-jq');
const jqFilter  = '.[].newest_events.hu.val';
const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language);

var printFunc = function(hu){
  message = '湿度は' + hu + '%です。';
  console.log(message);
  googlehome.notify('部屋の湿度は' + hu[0] + '%です。', function(res) {
  console.log(res);
 });
}

var splitVal = function(val){
  val = val.split('\n');
  return val;
}

webClient.get({
  url: "https://api.nature.global/1/devices",
  headers: { "Authorization": "Bearer REPLASE_YOUR_TOKEN" }
}, function(error, response, body){
  jq.run(jqFilter, body, { input: 'string' }).then(splitVal).then(printFunc);
});
