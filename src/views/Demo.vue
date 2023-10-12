<!-- <template>
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
</style> -->
<!-- <template>
  <div>
    <h1>Form Data</h1>
    <form @submit.prevent="submitForm">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" />

      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" />

      <button type="submit">Submit</button>
    </form>

    <div v-if="storedFormData">
      <h2>Stored Form Data</h2>
      <p><strong>Name:</strong> {{ storedFormData.name }}</p>
      <p><strong>Email:</strong> {{ storedFormData.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
      },
    };
  },
  computed: {
    storedFormData() {
      const storedData = localStorage.getItem('formData');
      return storedData ? JSON.parse(storedData) : null;
    },
  },
  methods: {
    submitForm() {
      // Store form data in local storage
      localStorage.setItem('formData', JSON.stringify(this.formData));
      alert('Form data has been saved in local storage.');
    },
  },
};
</script> -->


<!-- MyComponent.vue -->
<!-- <template>
  <div>
    <h1>My Component</h1>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useMyStore } from '@/store/events'; // Replace with your actual store path

export default defineComponent({
  setup() {
    const store = useMyStore();

    // Use computed property for reactive data binding
    const count = computed(() => store.count);

    // Define a method that calls the store's action
    const increment = () => {
      store.increment();
    };

    return {
      count,
      increment,
    };
  },
});
</script> -->
<script setup>
// import { onMounted, Ref } from 'vue'
import DataTable from '../components/DataTable.vue'

// const items = ref(value: [])

// onMounted(hook: async () => {
//   const response = await fetch(input: 'http://localhost/api/tasks');
//   items.value = await response.json();
// })

const items = [
            {
                dealid: '#CP4526',
                clientname: 'Lagos Free Zone Company',
                venue: 'Virtual',
                datetime: 'Thursday October 12, 2023 10:36 AM',
                status: 'Pending storage creation',
            },
            {
                dealid: '#CP4526',
                clientname: 'konexa',
                venue: 'Physical(internal)',
                datetime: 'Thursday October 12, 2023 10:36 AM',
                status: 'Pending document upload',
            },
            {
                dealid: '#CP4526',
                clientname: 'Banner Energy Limited',
                venue: 'Physical(external)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending L&D verification',
            },
            {
                dealid: '#CP4526',
                clientname: 'Seplat',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending schedule',
            },
            {
                dealid: '#CP4526',
                clientname: '9mobile',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending access to dataroom',
            },
            {
                dealid: '#CP4526',
                clientname: 'Total',
                venue: 'Physical(internal)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Done',
            },
        ]
  
</script>

<template>
  <div class="bg">
    <DataTable :items="items" />
  </div>
</template>

<style scoped>
.bg {
  background: bisque;
  height: 100vh;
  padding: 20px;
}
</style>