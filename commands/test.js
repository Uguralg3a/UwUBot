const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'test',
    description: "Test",
    execute(message, args, Discord){

      const test = new MessageEmbed()
      .setColor("YELLOW")
      .setTitle("TEST")
      .setDescription("test")
      message.channel.send({embeds: [test]})
  }
}