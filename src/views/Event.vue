<!-- <script setup>
  import NavBar from '../components/NavBar.vue'
  import {useEventsStore} from "@/store/events"


const store = useEventsStore()
console.log(store.events);



  
</script> -->
<script>
import NavBar from '../components/NavBar.vue'
import { useEventsStore } from "@/store/events";

export default {
  components: NavBar,
  setup() {
    const store = useEventsStore();
    const events = store.events;
    

    return {
      events,
  
    };
  },
  methods: {
        getStatusColor(status) {
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
                //   default:
                //     return 'background-color: rgb(254, 249, 195); border-radius: 10px;  width: 60%; padding: 10px;';
            }
        },
        getStatusIcon(status) {
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
        },
    },
};
</script>
<template>

  <body>
    <NavBar />
    <div class="display">
      <div class="title">
        <h1><b>Events</b></h1>
        <button>
          Create event
        </button>

      </div>
      <div class="eve" style="border-radius: 15px;">
        <div style="display: flex; margin-bottom: 0;padding-bottom: 0;background:white;padding-top:20px;border-radius:10px 10px 0px 0px">
          <v-combobox label="Filter by: All" density="compact" :items="['All', 'Pending storage creation', 'Pending document upload', 'Pending L&D verification', 'Done']" variant="solo"></v-combobox>
          <v-spacer></v-spacer>

          <v-text-field v-model="search" append-icon="mdi-magnify" density="compact" label="Search" style="" variant="solo" single-line hide-details width="30"></v-text-field>
        </div>
        <div class="tabulate">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">
                  <div class="d-flex align-center gap-1">
                    <span> Deal ID </span>

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
              <!-- <tr v-for="event in events" :key="event.id" @click="$router.push('eventdetails/')"> -->
              <tr v-for="event in events" :key="event.id" @click="$router.push({ name: 'details', params: { id: event.id } })">

                <td>{{ event.id}}</td>
                <td>{{ event.transaction }}</td>
                <td>{{ event.venue }}</td>
                <td>{{ event.date }}</td>
                <td>
                  <p class="status" :style="getStatusColor(event.status)">
                    <i class="dot" :style="getStatusIcon(event.status)"></i>
                    {{ event.status }}
                  </p>
                </td>
              </tr>
            </tbody>
          </v-table>
        </div>
        <div class="text-center">
          <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eeeeee;
  height: 1080px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.display {
  width: 90%;
  margin: auto;
}
button {
  display: flex;
  width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: white;
  background-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105));
  margin: 12px 5px 20px 0;
  border-radius: 100px;
}
thead tr th {
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  padding: 15px;
}
.createBtn {
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  color: #fff;
}
.createBtn caption {
  color: #fff;
}
.text-center {
  border: 0px solid var(--gray-200, #eaecf0);
  background: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
</style>