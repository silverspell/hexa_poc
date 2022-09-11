const UserController = require("../controllers/user_controller");


async function buildExpressRoutes(app, options) {
    const {readDataAdapter, writeDataAdapter} = options;
    const userController = UserController({readDataAdapter, writeDataAdapter});
    app.post("/create", async(req, res) => {
                                    const response = await userController.postUser(req, res);
                                    res.send(response);
                                });
    app.get("/list", async(req, res) => { 
                                    const response = await userController.listUsers(req, res);
                                    res.send(response);
                                });
    app.get("/longRunner", async(req, res) => {
                                    await userController.longRunner(req, res); 
                                    res.send({"result": "success"});
    });
}

module.exports = buildExpressRoutes;