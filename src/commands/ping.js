module.exports = {
    name: "ping",
    description: "this is a ping command",
    async execute(client, message, args, Discord){
        message.channel.sendTyping();
        // sends pong and displays latency. 
        message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
    }
}