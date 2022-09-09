function postgresqlAdapter() {

    let _conn;

    const connect = async () => {
        // some code to connect db
        _conn = {};
    }

    const findAll = async () => {
        return _conn.query("select * from users");
    }

    const addUser = async (user) => {
        const {username, password} = user;
        _conn.query("insert into users (username, password) values ($1, $2)", [username, password]);
    }

    return {
        findAll, addUser
    }
}

module.exports = postgresqlAdapter;