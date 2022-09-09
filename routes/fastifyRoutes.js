const UserController = require("../controllers/user_controller");


async function buildFastifyRoutes(fastify, options) {
    const {readDataAdapter, writeDataAdapter} = options;
    const userController = UserController({readDataAdapter, writeDataAdapter});
    fastify.post("/create", userController.postUser);
    fastify.get("/list", userController.listUsers);

}

module.exports = buildFastifyRoutes;