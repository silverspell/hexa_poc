const userRepository = require("../repositories/user_repository")
const userService = require("../services/user_service");
const buildEventBus = require("./eventbus");

async function execute({commandName, source, dataAdapter}) {
    const repo = userRepository(dataAdapter);
    const service = userService(repo);

    const eventBus = buildEventBus({userService: service});
    eventBus.register();

    const create = (source) => service.addUser(source);
    const findAll = () => service.findAll();
    
    

    let returnValue;
    switch(commandName) {
        case "CREATE":
            returnValue = await create(source);
        break;
        case "FIND_ALL":
            returnValue = await findAll();
        break;
        case "LONG_RUNNING_EVENT":
            eventBus.eventEmitter.emit("LONG_RUNNING_EVENT");
        break;
    }

    eventBus.eventEmitter.emit("LOG_EVENT", `${commandName} executed successfully. Params: ${JSON.stringify(source)}`);

    return returnValue;
    

}


module.exports = execute
