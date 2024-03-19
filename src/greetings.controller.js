const responseSchema = {
    response: {
        200: {
            type: 'object',
            properties: {
                message: {
                    type: 'string',
                },
            },
            required: ['message'],
        },
    },
};

const greetingsController = (fastify, options, done) => {
    // 1. Application Hook: onReady (Triggered once when the application starts)
    fastify.addHook('onReady', async () => {
        console.log(1, 'Application is ready!');
    });

    // 2. Request Hook: onRequest (Triggered before request processing begins)
    fastify.addHook('onRequest', async (request) => {
        console.log(2, 'Incoming request:', request.url);
    });

    // 3. Request Hook: onPreValidation (Triggered before schema validation)
    fastify.addHook('preValidation', async (request) => {
        console.log(3, 'Request validation about to start.');
    });

    fastify.get('/', {schema: responseSchema}, (req, reply) => {
        console.log(4, 'Handling request for /'); // Inside the route handler
        return {message: 'Hello World'};
    });

    fastify.get('/:name', {schema: responseSchema}, (req, reply) => {
        console.log(
            5,
            'Handling request for /:name with name:',
            req.params.name
        );
        return {message: `Hello ${req.params.name}`};
    });

    // 6. Reply Hook: onResponse (Triggered after successful request processing)
    fastify.addHook('onResponse', async (request, reply) => {
        console.log(6, 'Sending response:', reply.statusCode);
    });

    // 7. Application Hook: onClose (Triggered when the application is stopped)
    fastify.addHook('onClose', async () => {
        console.log(7, 'Application is closing!');
    });

    done();
};

export default greetingsController;
