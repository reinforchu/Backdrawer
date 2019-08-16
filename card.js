const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language); 

googlehome.notify('アレクサ、。　、。　、。　、。　、。　タロットカード', function(res) {
  console.log(res);
});