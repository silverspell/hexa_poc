function inMemoryDbAdapter() {

    const inMemoryUserData = [];

    const findAll = async () => {
        return inMemoryUserData;
    }

    const findByUsername = async (username) => {
        return inMemoryUserData.filter(x => x.username = username);
    }; 

    const addUser = async(user) => {
        inMemoryUserData.push(user);
    };

    return {
        findAll,
        findByUsername,
        addUser
    };
}

module.exports = inMemoryDbAdapter;