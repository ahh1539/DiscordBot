const Discord = require('discord.js-commando');

class MusicSelect extends Discord.Command {
    constructor(client) {
        super(client, {
            name: 'music',
            group: 'music',
            memberName: 'music',
            description: 'returns youtube link of some good playlists'
        });
    }
    async run(message, args) {
        message.reply("ChillHop 2018: https://www.youtube.com/watch?v=Rhomn5Um9dg Todays hits: https://www.youtube.com/watch?v=ApXoWvfEYVU&list=PLxhnpe8pN3TmqD2EuqUN-BWHCd9NHk9fk")
    }
}

module.exports = MusicSelect;