const userBuilder = require("../entities/user");


function UsersService(userRepository) {

    async function findAll() {
        return await userRepository.findAll();
    }

    async function addUser(source) {
        try {
            const user = userBuilder(source);
            return await userRepository.addUser(user);
        } catch (err) {
            return err.message;
        }
    }

    async function aLongRunningRequest() {
        setTimeout(() => console.log("Long running processes done"), 5000);
    }

    return {
        findAll,
        addUser,
        aLongRunningRequest
    }
}

module.exports = UsersService;