const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("602837302024208397")
setInterval(function() {
channel.send(`لوووووووووووووووووووووووووووووووووووولكرت سبااام بروو بوتتت كريديت بلهبل crcreadiafiosaoasoddaiososiadiadsoaidsoadsioadsoadssodoadposoaop hlhdsfd`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
