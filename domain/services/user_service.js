const userBuilder = require("../entities/user");


function UsersService(userRepository) {

    async function getUsers() {
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

    return {
        getUsers,
        addUser
    }
}

module.exports = UsersService;