const telegramBot = require('node-telegram-bot-api');

require('dotenv').config();

const TOKEN = process.env.TOKEN;

const bot = new telegramBot(TOKEN, { polling: true });


bot.on('message',(msg) => {
    // console.log(msg.text);
    // console.log(msg.from.id);
    //middleware

    let chat_id=msg.from.id;
    bot.sendMessage(chat_id, 'Hi K401')
})