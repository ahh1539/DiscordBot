const Discord = require('discord.js-commando');
class Contact extends Discord.Command {
    constructor(client) {
        super(client, {
            name: 'contact',
            group: 'simple',
            memberName: 'contact',
            description: 'Displays creators contact information'
        });
    }
    async run(message, args) {
        message.channel.sendMessage('Github link: https://github.com/ahh1539 ' + ' Linkedin: https://linkedin.com/in/alexander-hurley-76756814a/')
    }
}

module.exports = Contact;