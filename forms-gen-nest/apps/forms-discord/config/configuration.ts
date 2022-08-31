export default () => ( {
    rmq_handlers: true,
    discord: {
        bot_token: process.env.DISCORD_BOT_TOKEN || 'ERROR: NO TOKEN FOUND',
        server_name: 'Bot forms\' notification test room',
        notification_category_name: 'Notifications',
    },
} );
