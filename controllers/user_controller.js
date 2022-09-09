const execute = require("../domain/commandbus/commandbus");

function UserController({readDataAdapter, writeDataAdapter}) {

    const postUser = async(req, res) => {
        const bus = await execute({commandName: "CREATE", source: req.body, dataAdapter: writeDataAdapter});
        return {msg: "OK", status: 0};
    }

    const listUsers = async(req, res) => {
        const result = await execute({commandName: "FIND_ALL", dataAdapter: readDataAdapter});
        return {msg: "OK", status: 0, result};
    }

    return {
        postUser, listUsers
    }
}

module.exports = UserController;