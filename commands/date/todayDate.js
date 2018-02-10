const commando = require('discord.js-commando')

class TodayDate extends commando.Command {
	constructor(client){
		super(client, {
			name: 'today',
			group:'date',
			memberName: 'today',
			description: 'Display current date'
		});
	}

	async run(message, args){
		var date = new Date();
		message.reply("Nous sommes le "+date);
	}
}

module.exports = TodayDate;