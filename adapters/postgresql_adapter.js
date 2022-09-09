function postgresqlAdapter() {

    let _conn;

    const connect = async () => {
        // some code to connect db
        _conn = {};
    }

    const findAll = async () => {
        console.log("simulating a bunch of results returning.....");
        return [{username: "asdf", password: "1234"}, {username: "qwer", password: "1233"}]
        //return _conn.query("select * from users");
    }

    const addUser = async (user) => {
        const {username, password} = user;
        console.log("I've ordered to write these", username, password);
        //_conn.query("insert into users (username, password) values ($1, $2)", [username, password]);
    }

    return {
        findAll, addUser
    }
}

module.exports = postgresqlAdapter;