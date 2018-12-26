const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

function Play(connection, message){
    var server = servers[message.guild.id];
    server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
    server.queue.shift();
    server.dipatcher.on("end", function(){
        if(server.queue[0])
        {
            Play(connection,message)
        }
        else
        {
            connection.disconnect();
        }
    });
}

class JoinChannelCommand extends Discord.Command {
    constructor(client) 
    {
        super(client, {
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the music voice channel'
        });
    }
    async run(message, args) 
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id]){
                    servers[message.guild.id] = {queue: []}
                    console.log(servers)
                }
                // var server = servers[message.guild.id]
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id]
                        message.reply('Successfully joined!');
                        server.queue.push(args);
                        console.log(args);
                        Play(connection, message)
                    
                    })
            }
            else{
                message.reply('Im already in the voice channel')
            }
        }
        else
        {
            message.reply("You need to be in a voice channel to call upon me!");
        }
        
    }
}

module.exports = JoinChannelCommand;