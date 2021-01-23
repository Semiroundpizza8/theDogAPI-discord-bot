'use strict';
require('dotenv').config();

const Discord = require('discord.js');
const dogAPI = require('./dogAPI');

// Discord connection code ---
const client = new Discord.Client();

// When bot logs in....
client.on('ready', () => console.log(`Logged in as ${client.user.tag}!`));

// When bot sees new message in channel....
client.on('message' , async message => {
  // If the content isn't what we react to, ignore it
  if(message.content === "woof") {
    try {
      // Grab the image from the dog API
      var dogInfo = await dogAPI.getDog(
        message.author.username,
        process.env.DOG_API_URL,
        process.env.DOG_API_KEY,
      );

      stripe.payments.create(
        paymentObj,
        process.env.STRIPE_KEY,
        process.env.STRIPE_URL
      )

      let breed = dogInfo[0].breeds[0];

      // Send a formatted message to the discord channel
      const messageText = `***${breed.name}*** \r *${breed.temperament}*`;
      
      message.channel.send(
        messageText,
        { files: [dogInfo[0].url] }
      );

    } catch (error) {
      console.log(error);
    }
  }
});

// When bot breaks....
client.on('error', console.log);

// Create bot
client.login(process.env.DISCORD_TOKEN);
