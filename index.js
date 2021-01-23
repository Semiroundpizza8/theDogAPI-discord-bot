'use strict';
require('dotenv').config()

const Discord = require('discord.js');
const { messageRecieved } = require('./utilities');

// Discord connection code ---
const client = new Discord.Client();

client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

client.on('message' ,message => {

  if (message.content === 'woof') {
    messageRecieved(message);
  }

});

client.on('error', console.log);

client.login(process.env.DISCORD_TOKEN);