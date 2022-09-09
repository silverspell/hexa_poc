const UserController = require("../controllers/user_controller");


async function buildFastifyRoutes(fastify, options) {
    const {dataAdapter} = options;
    const userController = UserController({dataAdapter});
    fastify.post("/create", userController.postUser);
    fastify.get("/list", userController.listUsers);

}

module.exports = buildFastifyRoutes;