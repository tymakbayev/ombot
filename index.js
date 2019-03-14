const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '777413269:AAFUzxudWEyUs_nmUxw4tNPipVSqYQ8BlO0'

const bot = new TelegramBot(TOKEN,{polling: true})

bot.on('message', msg => {
    bot.sendMessage(msq.chat.id, 'Hello from Abay, bot says: "Hi, ${msg.from.first_name}"')
})
