const mongoose = require("mongoose");
const faker = require("faker");
const schema = new mongoose.Schema(
    { name: String },
    {versionKey: false}
);
const UserModel = mongoose.model('User', schema);

class User {

    constructor(user) {
        this.name = user.name;
    }

    static async createDummy() {
        const user = await UserModel.create({
            name: faker.name.findName()
        });
        return new User(user);
    }

    static async listUsers() {
        const users = await UserModel.find({}, null, {lean: true});
        return users.map(user => new User(user));
    }
}

module.exports = {
    User,
}