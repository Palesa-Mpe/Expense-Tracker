import { User } from '../models/User';
import { cassandraDatabase } from '../database/db';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../database/queries/users';

export const UserRepository = {
  async getAllUsers() {
    const result = await cassandraDatabase.execute(getAllUsers);
    console.log(result);
    return result;
  },

  async getUserById(id: string) {
    const result = await cassandraDatabase.execute(getUserById, [id]);
    console.log(result);
    return result;
  },

  async createUser(newUser: User) {
    const result = await cassandraDatabase.execute(createUser, [newUser.userid, newUser.email, newUser.username]);
    console.log(result);
    return result;
  },

  async updateUser(id: string, updatedUser: User) {
    const result = await cassandraDatabase.execute(updateUser, [updatedUser.email, updatedUser.username, id]);
    console.log(result);
    return result;
  },

  async deleteUser(id: string) {
    const result = await cassandraDatabase.execute(deleteUser, [id]);
    console.log(result);
    return result;
  },
};
