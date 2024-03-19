import Fastify from 'fastify';
import greetingsController from './greetings.controller.js';

const fastify = Fastify({
    logger: false,
});

fastify.register(greetingsController, {prefix: '/greetings'});

try {
    fastify.listen({port: 3002});
} catch (error) {
    fastify.log.error(error);
    process.exit(1);
}

