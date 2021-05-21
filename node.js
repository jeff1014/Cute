const Discord = require("discord.js")
const bot = new Discord.Client()

const prefix = '.'

bot.on('ready' , () => {
    console.log("我準備好了!")
}) 

bot.on('message', message => {
    if(message.content === "嗨嗨") {
        message.channel.send("嗨嗨!")
    }
})

bot.on('message', message => {
    if(message.content === "趙雲") {
        message.channel.send("胖子!")
    }
})

bot.on('message', message => {
    if(message.content === "飛翔") {
        message.channel.send("帥哥!")
    }
})

bot.login('NTI5NTA3NTUwNjg1ODIyOTgx.XCrkVQ.CYOkQVgmNdN6lpvtinxk63GpKWI')
