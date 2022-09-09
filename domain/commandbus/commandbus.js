const userRepository = require("../repositories/user_repository")

async function execute({commandName, source, dataAdapter}) {
    const repo = userRepository(dataAdapter);

    const create = (source) => repo.addUser(source);
    const findAll = () => repo.findAll();

    let returnValue;
    switch(commandName) {
        case "CREATE":
            returnValue = await create(source);
        break;
        case "FIND_ALL":
            returnValue = await findAll();
        break;

    }

    return returnValue;
    

}


module.exports = execute
