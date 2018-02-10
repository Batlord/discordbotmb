const commando = require('discord.js-commando')

class SendMessageDate extends commando.Command {
	constructor(client){
		super(client, {
			name: 'smd',
			group:'date',
			memberName: 'smd',
			description: 'Send a message for 1502 days starting at the moment you validate the command\n example : !smd message with spaces'
		});
	}

	async run(message, args){
		var interval;
		var nbfois = 5;
		if (args === ''){
			message.reply("Error, no arguments given");
		}
		else{
				interval = setInterval(function(){ 
				message.channel.send(args);
				nbfois -= 1;
				if (nbfois == 0){
				clearInterval(interval);
				}
				}, 86400000);
				//600 000 = 10 minutes
				//3 600 000 = 1 heure
				//86 400 000 = 24 heures
		}
	}
}

module.exports = SendMessageDate;