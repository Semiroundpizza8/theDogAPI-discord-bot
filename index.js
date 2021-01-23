'use strict';
require('dotenv').config()

const Discord = require('discord.js');
const { getDogImage } = require('./utilities');

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
    var dogInfo = await getDogImage(message.author.username);

    // get the Image, and first Breed from the returned object.
    var breed = dogInfo.breeds[0];
    
    // Send a formatted message to the discord channel
    const messageText = `***${breed.name}*** \r *${breed.temperament}*`
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



    // console.log({
    //   image,
    //   breed
    // })

    // console.log("message processed", "showing", breed);
    // use the *** to make text bold, and * to make italic