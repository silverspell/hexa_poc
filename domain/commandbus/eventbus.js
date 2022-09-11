const events = require('events');

function buildEventBus({userService}) {
    const eventEmitter = new events.EventEmitter();

    const register = () => {
        eventEmitter.on("LOG_EVENT", (event) => console.log(event));
        eventEmitter.on("LONG_RUNNING_EVENT", async () => await userService.aLongRunningRequest());
    }

    return {
        register,
        eventEmitter
    }
}

module.exports = buildEventBus;