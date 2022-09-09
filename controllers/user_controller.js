const execute = require("../domain/commandbus/commandbus");

function UserController({dataAdapter}) {

    const postUser = async(req, res) => {
        const bus = await execute({commandName: "CREATE", source: req.body, dataAdapter});
        return {msg: "OK", status: 0};
    }

    const listUsers = async(req, res) => {
        const result = await execute({commandName: "FIND_ALL", dataAdapter});
        return {msg: "OK", status: 0, result};
    }

    return {
        postUser, listUsers
    }
}

module.exports = UserController;