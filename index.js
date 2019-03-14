const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '777413269:AAFUzxudWEyUs_nmUxw4tNPipVSqYQ8BlO0'

const bot = new TelegramBot(TOKEN,{polling: true})

bot.onText(//echo (.+)/, function (msg, match) {
var fromId = msg.from.id;
var resp = match[1];
bot.sendMessage(fromId, resp);
});
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    // Фотография может быть: путь к файлу, поток(stream) или параметр file_id
    var photo = 'cats.png';
    bot.sendPhoto(chatId, photo, {caption: 'Милые котята'});
});