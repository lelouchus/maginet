
const Discord = require('discord.js');
const client = new Discord.Client();

var prefix = '.';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	           //.ping//
if (msg.content === prefix + 'ping') {
msg.reply('Pong!');
}
                 //.avatar//
if (msg.content === prefix + 'avatar') {
msg.reply(msg.author.avatarURL);
}
	        //sa, yazısı//
if (msg.content.toLowerCase() === 'sa') {
msg.reply('aleyküm selam hoşgeldin.');
}
	       //günaydın, yazısı//
if (msg.content.toLowerCase() === 'günaydın') {
msg.reply('günaydın.');
}
	      //iyi geceler, yazısı//
if (msg.content.toLowerCase() === 'iyi geceler') {
msg.reply('iyi geceler, tatlı rüyalar.');
}
});

client.login(process.env.BOT_TOKEN);
