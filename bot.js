const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("562584649163997190")
setInterval(function() {
channel.send(`hello hello hello i needhelp helllooooo في حدا هون بدي مساعدة ضروري يا عيال وينكم ._.`);
}, 30)
})

client.login(process.env.BOT_TOKEN);