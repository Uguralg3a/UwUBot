const Discord = require("discord.js")
const keepAlive = require("./server")
const fs = require("fs")
const client = new Discord.Client({intents: [ ]});

let prefix = 'uwu!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'test'){
        client.commands.get('test').execute(message, args, Discord)
    } 
});

client.once('ready', () => {
    console.log(`${client.user.username} ist jetzt online und bereit zum testen! Ich bin gerade auf ${client.guilds.cache.size} Servern! Um ${client.readyAt} wurden der Bot gestartet! Sollte mehr als 1 Monat vergangen sein, bitte neu starten!`);
    client.user.setStatus('dnd');
    setInterval(() => {
        const statuses = [
            "Prefix: uwu!",
            "Developer: Ugur#0570 und ^^Violet#0461"
        ]

        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING" })}, 5000)
});


const TOKENSECRET = 'OTk4MjM3Nzc1NzEzMjc2MDI0.GTK3X0.9fE0dL3ONvKXbtmLiGmji2POmdwSGcjsRVOZfo'
keepAlive()
client.login(TOKENSECRET)