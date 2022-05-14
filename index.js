const Discord = require(`discord.js`)

const config = require(`config.json`)

const client = new Discord.client()

client.login(config.token)


