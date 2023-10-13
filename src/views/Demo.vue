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