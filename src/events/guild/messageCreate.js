module.exports = (Discord, client, message) => {
    const  PREFIX = "!"
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    message.react('👍');
    const args = message.content.slice(PREFIX.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd);

    if (command) command.execute(client, message, args, Discord);
}