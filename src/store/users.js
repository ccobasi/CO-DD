import {defineStore} from 'pinia';

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users')) || [],
  }),

  getters: {
    getUsers() {
      return this.users;
    },
     getUserById(id) {
      return this.users.find(user => user.id === id);
    },
  },
  actions: {
    addUser(name, email, company, phone, role, status) {
      try {
        
         const nextId = this.users.length + 1;

        this.users.push({
          id: nextId,
          name: name,
          email: email,
          company: company,
          phone: phone,
          role: role,
          status: status
        });

        this.saveUsers();
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },

    fetchUsers() {
      return this.users;
    },

    saveUsers() {
      try {
        localStorage.setItem('users', JSON.stringify(this.users));
      } catch (error) {
        console.error('Error saving users to localStorage:', error);
      }
    },
  },
});
