const Discord = require('discord.js')
const kispista = new Discord.Client()
const token = 'te tokened'

kispista.on('ready', () => {
      console.log('Elindultam')
})

kispista.login(token)
