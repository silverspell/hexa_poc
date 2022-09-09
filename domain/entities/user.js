function userBuilder(source) {

    const {username, password} = source;

    if (!username) {
        throw new Error("invalid username");
    }

    if (!password) {
        throw new Error("invalid password");
    }

    return {
        username,
        password
    };
}



module.exports = userBuilder;