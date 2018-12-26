const Discord = require('discord.js-commando');

class CoinFlipCommand extends Discord.Command{
    constructor(client){
        super(client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flips coin either heads or tails'
        });
    }
    async run(message, args){
        var chance = Math.floor(Math.random()*2);
        if(chance == 0){
            message.reply("Your coin landed on heads");
        }
        else{
            message.reply("Your coin landed on tails")
        }
    }
}

module.exports = CoinFlipCommand;