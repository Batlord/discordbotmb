//const Discord = require('discord.js');
const commando = require('discord.js-commando');
const MB = new commando.Client();

MB.registry.registerGroup('random', 'Random');
MB.registry.registerGroup('date', 'Date');
MB.registry.registerDefaults();
MB.registry.registerCommandsIn(__dirname + "/commands");

MB.on('message', (message) => {
	if(message.content == 'Bonjour M&B'){
		message.reply('Bonjour !')
	}
	if(message.content == 'ping'){
		message.channel.send('pong');
	}
})

MB.login('');
