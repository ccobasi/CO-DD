<script setup>
// defineProps(props: {
//     items: {
//         type: Array,
//         required: true
//     }
// });
import { defineProps, computed, ref } from 'vue';
import SearchForm from '../components/SearchForm.vue'
import FilterRadios from '../components/FilterRadios.vue'
import FilterDropdown from '../components/FilterDropdown.vue'

const searchFilter = ref('')
const radioFilter = ref('')
const statusesFilter = ref([])

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});

const filteredItems = computed(() => {
    let items = props.items;
    // return props.items.filter(item => item.status === 'Done')
    switch(radioFilter.value){
        case 'today':
            // show items due today
            items = items.filter(item => new Date(item.datetime) === new Date().getDate());
            break;
        case 'past':
            // show items past due
            items = items.filter(item => new Date(item.datetime) < new Date())
            break;
    }

    if(statusesFilter.value.length){
        items = items.filter(item => statusesFilter.value.includes(item.status))
    }

    if(searchFilter.value !== ''){
        // return props.items.filter(item => item.clientname.toLowerCase().includes(searchFilter.value) || item.dealid.toLowerCase().includes(searchFilter.value) || item.status.toLowerCase().includes(searchFilter.value))
        items = items.filter(item => item.clientname.toLowerCase().includes(searchFilter.value) || item.dealid.toLowerCase().includes(searchFilter.value) || item.status.toLowerCase().includes(searchFilter.value))
    }

    // return props.items
    return items
})

const handleSearch = (search) => {
    searchFilter.value = search
}

const handleRadioFilter = (filter) => {
    radioFilter.value = filter
}

const handleCheckboxFilter = (filter) => {
    if(statusesFilter.value.includes(filter)){
        return statusesFilter.value.splice(statusesFilter.value.indexOf(filter), 1)
    }
    return statusesFilter.value.push(filter)
}
    
</script>

<template>
  <div class="bg-white">
    <div class="d-flex item-center justify-between">
      <SearchForm @search="handleSearch" />
      <FilterRadios @filter="handleRadioFilter" />
      <FilterDropdown :items="items" @filter="handleCheckboxFilter" />
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
          <th class="text-left">
            <div class="d-flex align-center gap-1">
              <span> Actions </span>

              <span class="d-flex flex-column align-center">
                <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
              </span>

            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b" v-for="item in filteredItems" :key="item.dealid">
          <td>{{item.dealid}}</td>
          <td>{{item.clientname}}</td>
          <td>{{item.venue}}</td>
          <td>{{item.datetime}}</td>
          <td>{{item.status}}</td>
          <td>Details</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<style scoped>
.bg-white {
  margin: 30px 30px 30px 30px;
}
</style>