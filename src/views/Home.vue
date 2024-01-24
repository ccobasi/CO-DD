<script setup>
import AdminLog from '../views/AdminLog.vue';
import { ref, computed } from 'vue';
import { useEventsStore } from "@/store/events";
import FilterTable from '../components/Tables/FilterTable.vue'


const store = useEventsStore();
const events = store.events;
console.log(events)

const tab = ref(null);

const filteredEvents = computed(() => {
  let events = recents.value;

  if (searchFilter.value !== '') {
    events = events.filter(
      (event) =>
        event.transaction.toLowerCase().includes(searchFilter.value) ||
        event.coTransactor.toLowerCase().includes(searchFilter.value) ||
        event.status.toLowerCase().includes(searchFilter.value)
    );
  }

  return events;
});

const getStatusColor = (status) => {
  switch (status) {
    case 'Pending storage creation':
    case 'Pending document upload':
    case 'Pending L&D verification':
    case 'Pending schedule':
    case 'Pending access to dataroom':
      return 'background-color: rgb(254, 249, 195); border-radius: 40px; width: 60%; padding: 10px;';

    case 'Done':
      return 'background-color: rgb(220, 252, 231); border-radius: 40px; width: 60%; padding: 10px;';

    
  }
};

const getStatusIcon = (status) => {
  switch (status) {
    case 'Pending storage creation':
    case 'Pending document upload':
    case 'Pending L&D verification':
    case 'Pending schedule':
    case 'Pending access to dataroom':
      return 'background-color: #ffbf1a; display: inline-block; border-radius: 50%; padding: 5px;';

    case 'Done':
      return 'background-color: #47b65c; display: inline-block; border-radius: 50%; padding: 5px;';
  }
};

const page = ref(1);
const search = ref('');

</script>

<template>
  <v-card>
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container-fluid" style="display: flex;">
        <img src="../components/icons/InfraCredit.png" alt="Image" style="margin: 10px 0 0 30px; width: 100px; height: 30px;">
        <v-tabs v-model="tab" style="border-bottom:none; margin-left: 34%;">
          <v-tab value="two" style="color:#227CBF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Home</v-tab>
          <v-tab value="one" style="color:#808080;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Settings</v-tab>
          <v-tab to="/adminlog" value="three" style="color:#808080;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Audit Log</v-tab>
        </v-tabs>
        <v-spacer></v-spacer>
        <v-badge content=2 color="#227cbf" style="margin:10px 20px; ">
          <v-icon icon="mdi-bell-outline" size="large" style="margin-top:0px;" />
        </v-badge>

        <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;" prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"></v-list-item>
      </div>

    </nav>

    <v-card-text style="background-color: rgba(235, 235, 235, 0.64); padding: 0; box-shadow: none;">
      <v-window v-model="tab">
        <!-- <v-window-item value="three">

        </v-window-item> -->
        <v-window-item value="two">
          <div>
            <h3 class="greet">
              Good afternoon, Mubarak Abubakar
            </h3>
          </div>
          <div class="next">
            <h2><b>Ready to create your next event?</b></h2>
            <v-spacer></v-spacer>
            <router-link to="/createevent">
              <!-- <v-btn class="cbtn" dark>
                <h6>Create event</h6>
              </v-btn> -->
              <v-btn style=" color: #227cbf; background: #fff; margin: 2px 5px 20px 0; border-radius: 100px; text-transform:capitalize" dark>
                Create event
              </v-btn>
            </router-link>
          </div>
          <div class="prev">
            <h3>Recent Co-DD Events &gt;</h3>
            <v-spacer></v-spacer>
            <router-link to="">
              <v-btn class="vbtn" dark>
                <v-tabs v-model="tab">

                  <v-tab value="two">View all</v-tab>
                </v-tabs>

              </v-btn>
            </router-link>
          </div>
          <div class="admin">
            <v-table>
              <FilterTable :events="events" />
              <!-- <thead>
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
                      <span> Date </span>

                      <span class="d-flex flex-column align-center">
                        <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                        <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                      </span>

                    </div>
                  </th>
                  <th class="text-left">
                    <div class="d-flex align-center gap-1">
                      <span> Time </span>

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
                <tr v-for="item in events" :key="item.id" @click="$router.push({ name: 'details', params: { id: item.id } })">
                  <td>{{ item.id }}</td>
                  <td>{{ item.transaction }}</td>
                  <td>{{ item.venue }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.time }}</td>
                  <td>

                    <p class="status" :style="getStatusColor(item.status)">
                      <i class="dot" :style="getStatusIcon(item.status)"></i>
                      {{ item.status }}

                    </p>
                  </td>
                </tr>
              </tbody> -->
            </v-table>

          </div>
        </v-window-item>

        <v-window-item value="one" style="padding: 1rem; border-radius: none;">
          <div class="container-fluid mt-3 justify-content-start">
            <h3 style="color: var(--black, #000);font-size: 24px;font-family: Roboto;font-style: normal;font-weight: 500;line-height: 28.8px;">Settings</h3>
            <p style="color: var(--grey-dark, #808080);font-size: 16px;font-family: Roboto;font-style: normal;font-weight: 400;line-height: 19.2px;">System Configuration</p>

            <div class="list-group">
              <div class="list-group-item" style="background:#F7F7F7;color: var(--black, #000);font-size: 20px;font-family: Roboto;font-style: normal;font-weight: 600;line-height: 24px;">
                <h4>Roles</h4>
              </div>

            </div>

          </div>
        </v-window-item>

      </v-window>
    </v-card-text>
  </v-card>
</template>

  

<style scoped>
.top {
  display: flex;
  padding: 18px 20px;
  align-items: center;
  gap: 125px;
  border-radius: 10px 10px 0px 0px;
  background: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
.container-fluid {
  background: #fff;
}
.navbar {
  height: 50px;
  border-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105)) 1;
  border-bottom: 4px solid;
  padding-bottom: 5px;
  width: 100%;
}
/* Your existing scoped styles */
.navbar-nav {
  margin-left: 200px;
  padding-left: 0px;
  padding-bottom: 0px;
  justify-content: space-around;
}

.main {
  background: #fafafb;
  height: 160vh;
  width: 100vw;
  padding-left: 50px;
  padding-right: 50px;
}

.greet {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
  margin: 20px 0 0 30px;
}

.next {
  display: flex;
  color: white;
  background-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105));
  margin: 15px 30px 20px 30px;
  padding: 45px 15px;
  border-radius: 10px;
}

.next h2 {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43.2px;
}

.cbtn {
  display: flex;
  width: 200px;
  height: 50px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  border: 1px solid var(--primary, #227cbf);
  background: var(--white, #fff);
  color: var(--primary, #227cbf);
  text-transform: capitalize;
}

.cbtn h6 {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
  text-decoration: none;
  padding-top: 10px;
}
.prev {
  display: flex;
  margin: 10px 30px 20px 30px;
}
.prev h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.vbtn {
  background-color: rgba(235, 235, 235, 0.05);
  color: rgb(40, 126, 193);
  border: none;
  border-radius: 0px;
  box-shadow: none;
}
.plus {
  color: var(--primary, #227cbf);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.admin {
  margin: 10px 30px 20px 30px;
  font-size: 12px;
  padding: 0px;
  background-color: rgb(243, 243, 243);
  border-radius: 10px;
}

.status {
  padding: 0;
  margin: 0;
}

thead tr th {
  font-size: 12px;
  font-weight: 600;
  line-height: 14.4px;
  padding: 15px;
}

tbody tr td {
  color: var(--grey-dark, #808080);
  /* Caption */
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  padding: 20px 15px;
  cursor: pointer;
}
thead,
tr {
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}
.noshrink {
  display: flex;
  flex-shrink: 0;
}

.grade-btn {
  min-width: 45px;
  max-width: 65px;
  border-radius: 40px;
}
.dot {
  display: inline-block;
  border-radius: 50%;
  padding: 5px;
}
.input-group {
  width: 400px;
  margin-right: 20px;
}
input {
  height: 50px;
}
.list-group-item {
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}

input[type='text'] {
  width: 230px;
  height: 50px;
  padding: 12px 0px;
  box-sizing: border-box;
  border: none;
  border-bottom: 0.5px solid #dfdfdf;
  color: var(--grey-dark, #808080);

  font-size: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
</style>
  