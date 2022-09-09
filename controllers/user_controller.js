const execute = require("../domain/commandbus/commandbus");

function UserController({dataAdapter}) {

    const postUser = async(req, res) => {
        console.log(req.body);
        const bus = await execute({commandName: "CREATE", source: req.body, dataAdapter: dataAdapter});
        return {msg: "OK", status: 0};
    }

    const listUsers = async(req, res) => {
        const result = await execute({commandName: "FIND_ALL", dataAdapter: dataAdapter});
        return {msg: "OK", status: 0, result};
    }

    return {
        postUser, listUsers
    }
}

module.exports = UserController;