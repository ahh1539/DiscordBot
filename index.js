const Discord = require('discord.js-commando');
const bot = new Discord.Client();
const key = 'NTI1NDIzNjUyOTcyNTI3NjM2.Dv2asA.eQ2UOuMEy6N-44IgwT8u1vi-HQ8'

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