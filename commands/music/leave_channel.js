const Discord = require('discord.js-commando');

class LeaveChannelCommand extends Discord.Command {

    constructor(client) {
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves the music voice channel'
        });
    }

    async run(message, args) 
    {
        if(message.guild.voiceConnection)
        {
            message.guild.voiceConnection.disconnect();
        }
        else
        {
            message.reply('I must be in a voice channel')
        }
    }

}
module.exports = LeaveChannelCommand;

