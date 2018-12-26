const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const key = had to delete due to privacy concerns :)

bot.registry.registerGroup('simple','Simple');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

global.servers = {};

bot.on('message', function(message){
    if(message.content == 'Hello')
    {
        message.channel.sendMessage('Hello ' + message.author + ',welcome to the channel');
    }
    
});

bot.login(key);
