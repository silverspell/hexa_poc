const UserController = require("../controllers/user_controller");


async function buildFastifyRoutes(fastify, options) {
    const userController = UserController(options);
    fastify.post("/create", userController.postUser);
    fastify.get("/list", userController.listUsers);
    fastify.get("/longRunner", userController.longRunner);

}

module.exports = buildFastifyRoutes;