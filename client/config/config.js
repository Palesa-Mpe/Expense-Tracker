require("dotenv").config;

ResourceConfig = {
  port: 8080,
  dbConfig: {
    user: "",
    password: "",
    database: "",
    server:""
  },
};

module.exports = {
  ResourceConfig,
};
