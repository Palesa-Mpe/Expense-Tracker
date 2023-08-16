const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
  ];
  
  module.exports = {
    getAllUsers() {
      return users;
    },
  
    getUserById(id) {
      const user = users.find(user => user.id === parseInt(id));
      if (user) {
        return user;
      } else {
        return { success: false, message: 'User not found' };
      }
    },
  
    createUser(newUser) {
      users.push(newUser);
      return { success: true };
    },
  
    updateUser(id, updatedUser) {
      const index = users.findIndex(user => user.id === parseInt(id));
      if (index !== -1) {
        users[index] = updatedUser;
        return { success: true };
      } else {
        return { success: false, message: 'User not found' };
      }
    },
  
    deleteUser(id) {
      const index = users.findIndex(user => user.id === parseInt(id));
      if (index !== -1) {
        users.splice(index, 1);
        return { success: true };
      } else {
        return { success: false, message: 'User not found' };
      }
    },
  };
  