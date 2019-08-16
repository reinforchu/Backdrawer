const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language); 

googlehome.notify('はろーわーるど、わたしはここにいます', function(res) {
  console.log(res);
});