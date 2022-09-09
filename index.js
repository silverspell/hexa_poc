const inMemoryDbAdapter = require('./adapters/inmemorydb_adapter');
const fastifyAdapter = require("./adapters/fastify_adapter");
const expressAdapter = require('./adapters/express_adapter');


const opts = {
    port: 3000,
    dataAdapter: inMemoryDbAdapter()
};

//const server = fastifyAdapter(opts);
const server = expressAdapter(opts);
server.start();






