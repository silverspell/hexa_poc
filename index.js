const inMemoryDbAdapter = require('./adapters/inmemorydb_adapter');
const UserController = require('./controllers/user_controller');

const fastify = require('fastify')({ logger: true })


const port = 3000;


const userController = UserController({dataAdapter: inMemoryDbAdapter()});
fastify.post("/create", userController.postUser);
fastify.get("/list", userController.listUsers);

const start = async () => {
    try {
        await fastify.listen({ port: port })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start();






