const Discord = require("discord.js");
const client = new Discord.Client();
const secret = require("./secret")

client.on("ready", () => {
    console.log("Ready!");
});

client.on("message", (message) => {
    if(message.content.toLowerCase() === "ratio") {
        message.react("❤️");
        message.channel.fetch().then(messages => {
            Array.from(messages.messages.cache.values())[messages.messages.cache.size - 2].react("❤️");
        });
    }
});

client.login(secret.token);