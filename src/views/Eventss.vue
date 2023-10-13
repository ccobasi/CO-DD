<script setup>
import FilterTable from '../components/Tables/FilterTable.vue'
import NavBar from '../components/NavBar.vue'
import { useEventsStore } from "@/store/events";


const store = useEventsStore();
const events = store.events;

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
    <div class="title">
      <h1><b>Events</b></h1>
      <router-link to="/createevent">
        <button>
          Create event
        </button>
      </router-link>

    </div>
    <FilterTable :events="events" />
  </div>

</template>

<style scoped>
.bg {
  background: #eeeeee;
  height: 100vh;
  padding: 10px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  padding: 20px;
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
</style>