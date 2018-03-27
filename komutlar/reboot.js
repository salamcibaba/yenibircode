const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (msg.author.id !== ayarlar.sahip) {
      msg.reply('Benim yapımcım değilsin!');
    } else {
      msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
      console.log(`BOT: Bot yeniden başlatılıyor...`);
      process.exit(0);
    })
   }
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reset'],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
