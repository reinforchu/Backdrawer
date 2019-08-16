const webClient = require('request');
const jq        = require('node-jq');
const jqFilter  = '.[].newest_events.te.val';
const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language);

var printFunc = function(temp){
  message = '室温は' + temp + '度です。';
  console.log(message);
  googlehome.notify('部屋の温度は' + temp[0] + '度です。', function(res) {
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