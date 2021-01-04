const Discord = require("discord.js");
const client = new Discord.Client();

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

client.login("Nzk1NzM3MTU5Mzc3MjIzNjkw.X_Nt-g.ZI6Q3o6cpNPaQqLnqKq5pVK9a6A");