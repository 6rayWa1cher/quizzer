const port = process.env.PORT || 3000;

export default () => ( {
    port,
    host: process.env.HOST || '0.0.0.0',
    base_url: process.env.BASE_URL || 'http://localhost:' + port,
    rmq_handlers: true,
} );

