const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: [ "botinfo" ],
    description: "See description about this project",
    args: false,
    usage: "",
    permission: [],
    owner: false,
    execute: async (message, args, client, prefix) => {
     
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("INVITE THIS BOT YOUR SERVER")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=907555185897902110&permissions=288435216&scope=bot`),
			new MessageButton()
    .setLabel("DONATE US")
    .setStyle("LINK")
    .setURL("https://tixproper.blogspot.com/p/donate-us.html"),
    new MessageButton()
    .setLabel("OUR SUPPORT SERVER")
    .setStyle("LINK")
    .setURL("https://discord.gg/Vj4PcmCcP3")
			);

      const mainPage = new MessageEmbed()
            .setAuthor('Pupu Music', 'https://cdn.discordapp.com/attachments/913464997387063307/913479469405196288/Lyricist.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/913464997387063307/913479469405196288/Lyricist.png')
            .setColor('#303236')
            .addField('Creator', '[XTawhidX#6585](https://discord.gg/sb7S6cEpPR) And [instagram](https://www.instagram.com/designer_tawhid/)', true)
            .addField('Organization', '[XForcesX](https://dsc.gg/xforcesx)', true)
            .addField('Update Check', '[Click Here For Check](https://discord.gg/ruXTwmXt)', true)
            .addField('\u200b',
                `[Pupu Music](https://discord.gg/CZ4h3MmRdW) is [Advanced](https://discord.gg/CZ4h3MmRdW) and [Free Music Bot](https://discord.gg/CZ4h3MmRdW)'s Was created by XTawhidX.This Bot Will Help You To Listen To Any Kind Of Music.
               If You Want To Know More Than [.help]. Hope you enjoy using Pupu Music!`
            )
        return message.reply({embeds: [mainPage], components: [row]});
    }
}