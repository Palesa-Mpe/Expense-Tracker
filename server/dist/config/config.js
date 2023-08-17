"use strict";
require("dotenv").config;
ResourceConfig = {
    port: 4040,
    dbConfig: {
        user: "",
        password: "",
        database: "",
        server: ""
    },
};
module.exports = {
    ResourceConfig,
};
