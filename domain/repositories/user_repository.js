

function userRepository(dataAdapter) {

    const findAll = async () => {
        return dataAdapter.findAll();
    }

    const addUser = async (user)  => {
        return dataAdapter.addUser(user);
    }

    return {
        findAll,
        addUser,
    }
}

module.exports = userRepository;