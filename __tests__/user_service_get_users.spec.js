const UsersService = require("../domain/services/user_service");


const mockRepo = {
    users: [
        {username: "cemg", password: "1234"},
        {username: "mustafau", password: "1234"},
    ],
    findAll: async () => {
        return mockRepo.users;
    },

    addUser: async (user) => {
        return mockRepo.users.push(user);
    }

};

describe("Get Users", () => {
    test("it should return 2 values", async () => {
        const userService = UsersService(mockRepo);
        const userList = await userService.getUsers();
        expect(userList.length).toEqual(2);
    });

    test("it should add one user to the repo", async() => {
        const user = {username: "another user", password: "12345"};
        const userService = UsersService(mockRepo);
        await userService.addUser(user);

        const users = await userService.getUsers();
        const addedUser = users.filter(u => u.username == user.username && u.password == user.password);
        expect(addedUser.length).toEqual(1);
    });

    test("it should return invalid username while adding", async() => {
        const user = {password: "1111"};
        const userService = UsersService(mockRepo);
        const ret = await userService.addUser(user);

        expect(ret).toEqual("invalid username");
    });
});