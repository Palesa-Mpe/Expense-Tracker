const user = require('../models/user');
  
  module.exports = {
    Home(req, res) {
      res.sendFile("login.html", {
        root: "./pages/",
      });
    },
    async getAllUsers(req, res) {
      res.json(await user.getAllUsers());
    }
  };
  