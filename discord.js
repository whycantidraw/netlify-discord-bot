const client = new Discord.Client();

client.login(process.env.BOT_TOKEN)

client.on('ready', () => {
    console.log('we ready');
});

client.on('message', (msg) => {
    if (msg.content === 'Hello') msg.reply('Hi');
  });