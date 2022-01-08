"use strict";
const Mongoose = require("mongoose");
require('dotenv').config();
/**
 * @deprecated
 */
class DataAccess {
    constructor() {
        DataAccess.connect();
    }
    static connect() {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", () => {
            console.log("DB is connected.");
        });
        this.mongooseInstance = Mongoose.connect(process.env.DB_URI || "");
        return this.mongooseInstance;
    }
}
DataAccess.connect();
module.exports = DataAccess;
//# sourceMappingURL=dataAccess.js.map