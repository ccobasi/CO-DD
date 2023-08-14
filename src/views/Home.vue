<script>

export default {
    data: () => ({
        tab: null,
        recent: [
            {
                dealid: '#CP4526',
                clientname: 'Lagos Free Zone Company',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending storage creation',
            },
            {
                dealid: '#CP4526',
                clientname: 'konexa',
                venue: 'Physical(internal)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
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
        ],
    }),
    methods: {
        getStatusColor(status) {
            switch (status) {
                case 'Pending storage creation':
                    return 'background-color: rgb(254, 249, 195); border-radius: 40px; width: 60%; padding: 10px;';
                    
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
    },

    return: {
        page: 1,
        search: '',
    }
};
</script>
<template>
  <v-card>
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container-fluid" style="display: flex;">
        <img src="../components/icons/InfraCredit.png" alt="Image" style="margin: 10px 0 0 30px; width: 100px; height: 30px;">
        <v-tabs v-model="tab" style="border-bottom:none; margin-left: 34%;">
          <v-tab value="one" style="color:#227CBF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Home</v-tab>
          <v-tab value="two" style="color:#808080;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Events</v-tab>
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
        <v-window-item value="one">
          <div>
            <h3 class="greet">
              Good afternoon, Mubarak Abubakar
            </h3>
          </div>
          <div class="next">
            <h2><b>Ready to create your next event?</b></h2>
            <v-spacer></v-spacer>
            <router-link to="/">
              <v-btn class="cbtn" dark>
                <h6>Create event</h6>
              </v-btn>
            </router-link>
          </div>
          <div class="prev">
            <h3>Recent Co-DD Events &gt;</h3>
            <v-spacer></v-spacer>
            <router-link to="/">
              <v-btn class="vbtn" dark>
                <h4 class="plus">View all</h4>
              </v-btn>
            </router-link>
          </div>
          <div class="admin">
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
                <tr v-for="item in recent" :key="item.name">
                  <td>{{ item.dealid }}</td>
                  <td>{{ item.clientname }}</td>
                  <td>{{ item.venue }}</td>
                  <td>{{ item.datetime }}</td>
                  <td>
                    <p class="status" :style="getStatusColor(item.status)"><i class="dot" style="background: orange;"></i>{{ item.status }}</p>
                  </td>
                </tr>
              </tbody>
            </v-table>

          </div>
        </v-window-item>

        <v-window-item value="two" style="padding: 1rem; border-radius: none;">
          <div class="tab-two" style="display: flex; margin: 10px 30px 20px 30px;">
            <h2>
              <b>Events</b>
            </h2>
            <v-spacer></v-spacer>
            <router-link to="/">
              <v-btn style=" color: white; background-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105)); margin: 2px 5px 20px 0; border-radius: 100px;" dark>
                Create event
              </v-btn>
            </router-link>
          </div>

          <div class="eve" style="border-radius: 15px;">
            <div style="display: flex; margin-bottom: 0;padding-bottom: 0;">
              <v-combobox label="Filter by: All" density="compact" :items="['All', 'Pending storage creation', 'Pending document upload', 'Pending L&D verification', 'Done']" variant="solo"></v-combobox>
              <v-spacer></v-spacer>
              <v-text-field v-model="search" append-icon="mdi-magnify" density="compact" label="Search" style="" variant="solo" single-line hide-details width="30"></v-text-field>
            </div>
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
                <tr v-for="item in recent" :key="item.name">
                  <td>{{ item.dealid }}</td>
                  <td>{{ item.clientname }}</td>
                  <td>{{ item.venue }}</td>
                  <td>{{ item.datetime }}</td>
                  <td>
                    <p class="status" :style="getStatusColor(item.status)">{{ item.status }}</p>
                  </td>
                </tr>
              </tbody>
            </v-table>

          </div>
          <div class="text-center">
            <v-pagination v-model="page" :length="15" :total-visible="7"></v-pagination>
          </div>
        </v-window-item>

      </v-window>
    </v-card-text>
  </v-card>
</template>

  

<style scoped>
.navbar {
  height: 50px;
  border-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105))
    1;
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
  background-image: linear-gradient(
    to right,
    rgb(40, 126, 193),
    rgb(85, 187, 105)
  );
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
}

.cbtn h6 {
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
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
.dot {
  display: inline-block;
  border-radius: 50%;
  padding: 5px;
}
</style>
  