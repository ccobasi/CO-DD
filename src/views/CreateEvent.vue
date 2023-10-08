<script setup>
  import NavBar from '../components/NavBar.vue'
  import { ref, onMounted, computed, watch, reactive } from 'vue'
  import {useEventsStore} from "@/store/events"
  
      
const store = useEventsStore();
console.log(store.events);

const addEvent = () => {
  if (transaction.value.trim() !== '' || venue.value.trim() !== '' || coTransactor.value.trim() !== ''
      || address.value.trim() !== ''  || addressTwo.value.trim() !== '' || state.value.trim() !== ''
      || country.value.trim() !== '' || date.value.trim() !== '' || time.value.trim() !== '' || timeZone.value.trim() !== '') {
    store.addEvent(transaction.value.trim(), venue.value.trim(), coTransactor.value.trim(),
      address.value.trim(), addressTwo.value.trim(), state.value.trim(), country.value.trim(), date.value.trim(), time.value.trim(), timeZone.value.trim());
  
  }
};
// const updateId = computed(() => store.$state.id);

const event = ref([])
  const transaction = ref('')
  const venue = ref('')
  const coTransactor = ref('')
  const address = ref('')
  const addressTwo  = ref('')
  const state = ref('')
  const country = ref('')
  const date = ref('')
  const time = ref('')
  const timeZone = ref('')
  const selectedValue = ref('')

const handleSubmit = () => {
  addEvent();
  console.log("Event added")
  console.log(store.events)
  $router.push("/" + e.target.value);
};

// const changeRoute = (e) => {
//     this.$router.push("/" + e.target.value);
//   }
const changeRoute = (e) => {
  $router.push("/" + e.target.value);
}

onMounted(() => {
  // Fetch todos when the component is mounted
  store.fetchEvents();
});

 

 const onSelectChange = () => {
  selectedValue.value = selectedValue.value
}

</script>
<template>

  <body>
    <NavBar />
    <div class="next">
      <h2>Tell us a little about the event.</h2>
      <p>You can always update these details later.</p>
      <v-spacer></v-spacer>

    </div>
    <div class="form">
      <form method="post" action="" @submit.prevent="handleSubmit">
        <div class="trans">
          <caption>Transactions</caption>
          <select class="form-select" aria-label="Default select example" v-on:change="onSelectChange(e)" v-model="transaction">
            <option selected>Select Transactions</option>
            <option value="#CP4526-Lagos Free Zone Company">#CP4526-Lagos Free Zone Company</option>
            <option value="#CP4526-konexa">#CP4526-konexa</option>
            <option value="#CP4526-Banner Energy Limited">#CP4526-Banner Energy Limited</option>
            <option value="#CP4526-Seplat">#CP4526-Seplat</option>
            <option value="#CP4526-9mobile">#CP4526-9mobile</option>
            <option value="#CP4526-Total">#CP4526-Total</option>
          </select>
        </div>
        <div class="trans">
          <caption>Venue</caption>
          <select class="form-select" aria-label="Default select example" @change="onSelectChange(e)" v-model="venue">
            <option selected>Select Venue</option>
            <option value="Physical(Internal)">Physical(Internal)</option>
            <option value="Physical(External)">Physical(External)</option>
            <option value="Virtual">Virtual</option>
          </select>
          <p class="cap">Please provide address below if the venue is external</p>
        </div>
        <div class="trans">
          <caption>Co-Transactor</caption>
          <select class="form-select" aria-label="Default select example" @change="onSelectChange(e)" v-model="coTransactor">
            <option selected>Select Co-Transactor</option>
            <option value="Daniel Mueller">Daniel Mueller</option>
            <option value="John Doe">John Doe</option>
            <option value="Chido">Chido</option>
          </select>

        </div>
        <div class="address">
          <div class="one">
            <caption>Address</caption>
            <input type="text" v-model="address">
          </div>
          <div class="one">
            <caption>Address2</caption>
            <input type="text" v-model="addressTwo">
          </div>
        </div>
        <div class="address">
          <div class="one">
            <caption>State</caption>
            <input type="text" v-model="state">
          </div>
          <div class="one">
            <caption>Country</caption>
            <input type="text" v-model="country">
          </div>
        </div>
        <div class="address">
          <div class="one">
            <caption>Date</caption>
            <input type="date" id="date" name="date" v-model="date">
          </div>
          <div class="one">
            <caption>Time</caption>
            <input type="time" id="appt" name="appt" v-model="time">
          </div>
        </div>
        <div class="trans">
          <caption>Time Zone</caption>
          <select class="form-select" aria-label="Default select example" @change="onSelectChange(e)" v-model="timeZone">
            <option selected>(GMT +01:00)Africa West Central</option>
            <option value="1">(GMT +00:00)Greenwich(London)</option>
            <option value="2">(GMT +01:00)Africa West Central</option>
            <option value="3">(GMT +01:00)Europe Central</option>
            <option value="4">(GMT +02:00)Europe Eastern</option>
            <option value="5">(GMT +02:00)Egypt</option>
          </select>
        </div>
        <div class="create">
          <button class="cancel" @click="$router.push('/')">
            <caption>Cancel</caption>
          </button>

          <button type="submit" value="Add event" class="createBtn" @click="$router.push('success')">

            <caption>Create Event</caption>
          </button>
        </div>

      </form>
      <!-- <section class="todo-list">
        <h3>EVENT LIST</h3>
        <div class="list" id="todo-list">

          <div v-for="event in events_asc" :class="`todo-item ${event.done && 'done'}`">
            <label>
              <input type="checkbox" v-model="event.done" />
            </label>

            <div class="todo-content">
              <h5>Co-transactor: {{event.coTransactor}}</h5>
            </div>

          </div>

        </div>
      </section> -->
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eeeeee;
  height: 1080px;
}
.next {
  color: white;
  background-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105));
  margin: 15px 30px 20px 30px;
  padding: 45px 15px;
  border-radius: 10px;
  height: 200px;
  padding: 70px 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.next h2 {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43.2px;
  margin-left: 28%;
}
.next p {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
  margin-left: 35%;
  padding-top: 10px;
}
.form {
  display: flex;
  width: 660px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  background: #fff;
  margin: auto;
  /* Drop Shadow */
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
.trans {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
}
caption {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
.form-select {
  width: 600px;
  height: 40px;
}
.cap {
  font-size: 10px;
}
.address {
  display: flex;
  gap: 20px;
}
.one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
}
input {
  display: flex;
  padding: 12.5px 14px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 290px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #fff);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.create {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin-top: 20px;
}
.cancel {
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  border: 1px solid var(--grey-light, #eee);
  background: var(--white, #fff);
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
</style>