const Discord = require("discord.js");
const client = new Discord.Client();
const secret = require("./secret")

client.on("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    if(message.content.toLowerCase() === "ratio") {
        message.channel.fetch().then(messages => {
            previousMessage = Array.from(messages.messages.cache.values())[messages.messages.cache.size - 2];
            if(previousMessage.content === "**Muck Fillet**") {
                message.reply("Tu peux pas ratio ça fdp");
                let role = message.guild.roles.cache.find(role => role.name === "Goulag");
                message.member.roles.add(role);
            }
            else {
                previousMessage.react("❤️");
                message.react("❤️");
            }
        });
    }
});

client.login(secret.token);