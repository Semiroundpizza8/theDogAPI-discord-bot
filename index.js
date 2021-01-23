'use strict';
const Discord = require('discord.js');

// Discord connection code ---
const client = new Discord.Client();

// When bot logs in....
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

// When bot sees new message in channel....
client.on('message' ,async message => {
  // If the content isn't what we react to, ignore it

  try {
    // Grab the image from the dog API    

    
    // Send a formatted message to the discord channel
    const messageText = `***DOG BREED*** \r *DOG TEMPERMENT*`;
    
    message.channel.send(
      messageText,
      { files: [/* */] }
    );
  } catch (error) {
    console.log(error);
  }

});

// When bot breaks....
client.on('error', console.log);

// Create bot
client.login(process.env.DISCORD_TOKEN);
