const inMemoryDbAdapter = require('./adapters/inmemorydb_adapter');
const fastifyAdapter = require("./adapters/fastify_adapter");
const expressAdapter = require('./adapters/express_adapter');
const postgresqlAdapter = require("./adapters/postgresql_adapter");


const nonCQRSDataAdapter = inMemoryDbAdapter();
const opts = {
    port: 3000,
    readDataAdapter: nonCQRSDataAdapter,
    writeDataAdapter: nonCQRSDataAdapter
};

const server = fastifyAdapter(opts);
//const server = expressAdapter(opts);
server.start();

