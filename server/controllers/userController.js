const user = require('../models/user');
  
  module.exports = {
    async getAllUsers(req, res) {
      const result =  await user.getAllUsers();
      
      res.json(result);
    },
  
    async getUserById (req, res) {
      const result =  await user.getUserById(req.params.Id);
      
      res.json(result);
    },
  
    async createUser(req, res) {
      const result =  await user.createUser(req.body);

      res.status(201).json(result);
    },
  
    async updateUser(req, res) {
      const updatedUser = req.body;
      const result =  await user.updateUser(updatedUser, req.params.Id);

    },
  
    async deleteUser(req, res) {
      const result =  await user.deleteUser(req.params.Id);

      res.json(result);
    },
  };
  