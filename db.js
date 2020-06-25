const mongoose = require("mongoose");
const config = require("./config");

module.exports.getConnection = () => {
    return mongoose.connect(config.mongoUri, { useNewUrlParser: true });
};