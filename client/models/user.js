module.exports = {
    async getAllUsers() {
      return await fetch(`http://localhost:${4040}/users`)
    }
};