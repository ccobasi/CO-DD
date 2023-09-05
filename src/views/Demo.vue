<template>
  <div>
    <h1>Registration Form</h1>
    <form @submit.prevent="save">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="user.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="user.email" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="user.password" required>
      </div>
      <button type="submit">Save</button>
    </form>
    <button @click="proceed" v-if="isFormValid">Proceed</button>
    <p v-else style="color: red;">Please fill in all fields.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.user.name.trim() !== '' &&
        this.user.email.trim() !== '' &&
        this.user.password.trim() !== ''
      );
    },
  },
  methods: {
    save() {
      // Perform validation here if needed
      if (this.isFormValid) {
        // Here, you can perform any necessary actions to save the user's data.
        // For example, you can make an API request or save the data to the local storage.
        console.log('User Data Saved:', this.user);
      }
    },
    proceed() {
      // Navigate to the next step or route.
      // You can use Vue Router for navigation if you're using it in your project.
      // Example:
      // this.$router.push('/next-step');

      // For this example, let's assume a simple alert.
      alert('Proceeding to the next step');
    },
  },
};
</script>

<style>
/* Add your custom CSS styles here */
.form-group {
  margin-bottom: 20px;
}
</style>
