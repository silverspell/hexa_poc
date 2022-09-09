const buildFastifyRoutes = require('../routes/fastifyRoutes');

const fastify = require('fastify')({ logger: true })


function fastifyAdapter(options) {

    const {port} = options;
    
    const buildRoutes = async() => {
        buildFastifyRoutes(fastify, options);
    }
    
    const start = async () => {
        try {
            await buildRoutes();
            await fastify.listen({ port: port })
        } catch (err) {
            fastify.log.error(err)
            process.exit(1)
        }
    }

    return {
        start,
    };
}


module.exports = fastifyAdapter;


