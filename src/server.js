'use strict';

const Hapi = require('@hapi/hapi');
const HapiOpenAPI = require('hapi-openapi');
const Path = require('path');

const init = async function() {
    const server = new Hapi.Server({
        host: process.env.SERVER_HOST || '0.0.0.0',
        port: process.env.SERVER_PORT || 3000,
        debug: false, // disable Hapi debug console logging
    });

    await server.register(
        [
            {
                plugin: HapiOpenAPI,
                options: {
                    api: Path.resolve('./src/config/swagger.json'),
                    handlers: Path.resolve('./src/handlers')
                }
            },
            {
                plugin: require('hapi-pino'),
                options: {
                    // Redact Authorization headers, see https://getpino.io/#/docs/redaction
                    redact: ['req.headers.authorization']
                },
            },
        ]
    );

    await server.start();

    return server;
};

init().then((server) => {
    server.plugins.openapi.setHost(server.info.host + ':' + server.info.port);

    server.log(['info'], `Server running on ${server.info.host}:${server.info.port}`);
});
