const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

module.exports = {
    name: "invite",
    category: "Information",
    aliases: [ "addme" ],
    description: "invite LavaMusic",
    args: false,
    usage: "",
    permission: [],
    owner: false,
   execute: async (message, args, client, prefix) => {
         
         
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite Pupu")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=907555185897902110&permissions=288435216&scope=bot`),
			new MessageButton()
    .setLabel("Donate")
    .setStyle("LINK")
    .setURL("https://tixproper.blogspot.com/p/donate-us.html"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/Vj4PcmCcP3")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Pupu Music', 'https://cdn.discordapp.com/attachments/913464997387063307/913479469405196288/Lyricist.png')
            .setThumbnail('https://cdn.discordapp.com/attachments/913464997387063307/913479469405196288/Lyricist.png')
             .setColor('#303236')
            .addField('invite pupu music', `[Here](https://discord.com/api/oauth2/authorize?client_id=907555185897902110&permissions=288435216&scope=bot)`, true)
           message.reply({embeds: [mainPage], components: [row]})
    }
				}