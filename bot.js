
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDU2ODc2MDkwMjUwNzU2MDk3.DgTRYg.6C-ZybmeaboIFVQVs54Ujc4eMtM);
