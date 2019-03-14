const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '603812765:AAFyzYAcIcac35ug9BZ6EgzEcrzwI_qO8Og'

const bot = new TelegramBot(TOKEN,{polling: true})

bot.on('message', msg => {
    bot.sendMessage(msq.chat.id, 'Hello from Abay, bot says: "Hi, ${msg.from.first_name}"')
})
