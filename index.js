const { Client } = require('discord.js-selfbot-v13');
const Discord = require('discord.js-selfbot-v13');
const keep_alive = require('./keep_alive.js');

const client = new Client();

client.on('ready', () => {
  client.user.setPresence({
    activities: [{
      name: '.gg/chillzone',
      type: 'STREAMING',
      url: 'https://twitch.tv/discord'
    }],
    status: 'dnd'
  });
});

client.login(process.env.token);
