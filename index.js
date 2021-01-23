'use strict';
require('dotenv').config()

const Discord = require('discord.js');
const dogAPI = require('./dogAPI');

// Discord connection code ---
const client = new Discord.Client();

// When bot logs in....
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

// When bot sees new message in channel....
client.on('message' ,async message => {
  // If the content isn't what we react to, ignore it
  if (message.content !== 'woof') return;

  try {
    // Grab the image from the dog API    
    var dogInfo = await dogAPI.getDog(
      message.author.username,
      process.env.DOG_API_URL,
      process.env.DOG_API_KEY
    );

    
    // Send a formatted message to the discord channel
    var breed = dogInfo.breeds[0];
    const messageText = `***${breed.name}*** \r *${breed.temperament}*`;
    
    message.channel.send(
      messageText,
      { files: [dogInfo.url] }
    );
    
    // if you didn't want to see the text, just send the file
  } catch (error) {
    console.log(error);
  }

});

// When bot breaks....
client.on('error', console.log);

// Create bot
client.login(process.env.DISCORD_TOKEN);
