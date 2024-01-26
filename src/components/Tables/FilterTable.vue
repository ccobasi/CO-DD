<script setup>

import { defineProps, computed, ref } from 'vue';
import SearchForm from '../SearchForm.vue'

import FilterDropdown from '../FilterDropdown.vue'


const searchFilter = ref('')
const radioFilter = ref('')
const statusesFilter = ref([])

const props = defineProps({
  events: {
    type: Array,
    required: true,
  },
});

const getStatusColor = (status) => {
            switch (status) {
                case 'Pending storage creation':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px; width: 80%; padding: 10px;';
                    
                case 'Pending document upload':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px;  width: 60%; padding: 10px;';
                case 'Pending L&D verification':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px;  width: 60%; padding: 10px;';
                case 'Pending schedule':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px;  width: 60%; padding: 10px;';
                case 'Pending access to dataroom':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px;  width: 60%; padding: 10px;';
                case 'Done':
                    return 'background-color: rgb(220, 252, 231); border-radius: 40px;  width: 60%; padding: 10px;';
               
            }
        }
    const getStatusIcon = (status) => {
            switch (status) {
                
                case 'Pending storage creation':
                    return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';
                case 'Pending document upload':
                    return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';
                case 'Pending L&D verification':
                    return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';
                case 'Pending schedule':
                    return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';
                case 'Pending access to dataroom':
                    return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';
                case 'Done':
                    return 'background-color: #47b65c; display: inline-block; border-radius: 50%; padding: 5px;';
            }
        }

const filteredEvents = computed(() => {
    let events = props.events;


    if(statusesFilter.value.length){
        events = events.filter(event => statusesFilter.value.includes(event.status))
    }

    if(searchFilter.value !== ''){
        
        events = events.filter(event => event.transaction.toLowerCase().includes(searchFilter.value) || event.coTransactor.toLowerCase().includes(searchFilter.value) || event.status.toLowerCase().includes(searchFilter.value))
    }

    
    return events
})

const handleSearch = (search) => {
    searchFilter.value = search
}


const handleCheckboxFilter = (filter) => {
    if(statusesFilter.value.includes(filter)){
        return statusesFilter.value.splice(statusesFilter.value.indexOf(filter), 1)
    }
    return statusesFilter.value.push(filter)
}
  console.log('searchFilter:', searchFilter.value);
</script>

<template>
  <div class="bg-white">
    <div class="d-flex item-center justify-between">
      <FilterDropdown :events="events" @filter="handleCheckboxFilter" />
      <SearchForm @search="handleSearch" />
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Deal Id </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Client Name </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Venue </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Date & Time </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Status </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>

        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="event in filteredEvents" :key="event.id" @click="$router.push({ name: 'details', params: { id: event.id } })">
          <td>{{event.id}}</td>
          <td>{{event.transaction}}</td>
          <td>{{event.venue}}</td>
          <td>{{event.date}}</td>
          <!-- <td>{{event.status}}</td> -->
          <td>
            <p class="status" :style="getStatusColor(event.status)">
              <i class="dot" :style="getStatusIcon(event.status)"></i>
              {{ event.status }}
            </p>
          </td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center">
      <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
    </div>
  </div>
</template>
<style scoped>
.bg-white {
  margin: 0px 30px 30px 30px;
  border-radius: 10px 10px 0px 0px;
}
.text-center {
  border: 0px solid var(--gray-200, #eaecf0);
  background: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
.d-flex {
  justify-content: space-between;
}
</style>