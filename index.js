require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

bot.on('ready', () => {
  console.log(`Bot da Bia online como ${bot.user.tag}`);
});

bot.on('messageCreate', (msg) => {
  if (msg.content === '!oi') {
    msg.reply('Oi! Tudo bem? 🌙');
  }
});

bot.login(process.env.DISCORD_TOKEN);
