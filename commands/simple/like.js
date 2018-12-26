const Discord = require('discord.js-commando');
var counter = 0;
class LikeCounter extends Discord.Command {
    constructor(client) {
        super(client, {
            name: 'like',
            group: 'simple',
            memberName: 'like',
            description: 'adds another like to the channel'
        });
    }
    async run(message, args) {
        counter++;
        message.reply('Thanks for liking the page' + ' The current number of likes is ' + counter)
    }
}

module.exports = LikeCounter;