const { Client, Message, MessageEmbed } = require('discord.js');
const { filters, emojis, color } = require('../../config/bot');

module.exports = {
    name: 'filter-list',
    aliases: ['filters-list', 'list-filters', 'filters'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
      // Embed if the user isn't in a voice channel
if (!message.member.voice.channel) {
    const userNotinVC_ = new MessageEmbed()
    .setDescription("Please join a voice channel first.")
    .setColor("#FF0000")
    return message.channel.send(userNotinVC_)
    }
   // Embed if the user isn't in the same voice channel
    if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) {
        const notInSameVC_ = new MessageEmbed()
        .setDescription("You're not in the same channel as me.")
        .setColor("#FF0000")
        return message.channel.send(notInSameVC_)
    }

    const queue = client.player.getQueue(message);

    // If no music is currently playing
  if (!client.player.getQueue(message)) { 
    const noMusicCurrentlyPlaying = new MessageEmbed()
    .setDescription("No song(s) are currently playing.")
    .setColor("#FF0000")
    return message.channel.send(noMusicCurrentlyPlaying)
}

const embed = new MessageEmbed()
.setTitle(`Filters`)
.setDescription("Here's the list of filters:\n\n`8D`\n`gate`\n`haas`\n`phaser`\n`treble`\n`tremolo`\n`vibrato`\n`reverse`\n`karaoke`\n`flanger`\n`mcompand`\n`pulsator`\n`subboost`\n`bassboost`\n`vaporwave`\n`nightcore`\n`normalizer`\n`surrounding`")
.setColor(color.boom)
message.channel.send(embed)

    }
}