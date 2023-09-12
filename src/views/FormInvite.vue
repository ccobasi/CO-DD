<script setup>
  import NavBar from '../components/NavBar.vue'
  import { ref, onMounted, computed, watch } from 'vue'


  const events = ref([])
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

  const events_asc = computed(() => events.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(events, (newVal) => {
	localStorage.setItem('events', JSON.stringify(newVal))
}, {
	deep: true
})

  const addEvent = () => {
	if (transaction.value === '' || venue.value === '' || coTransactor.value === ''
      || address.value === ''  || addressTwo.value === '' || state.value === ''
      || country.value === '' || date.value === '' || time.value === '' || timeZone.value === '') {
		return
	}

	events.value.push({
		transaction: transaction.value,
		venue: venue.value,
    coTransactor: coTransactor.value,
    address: address.value,
    addressTwo: addressTwo.value,
    state: state.value,
    country: country.value,
    date: date.value,
    time: time.value,
    timeZone: timeZone.value,
		createdAt: new Date().getTime()
	})

  console.log(events)
}

 const onSelectChange = () => {
  selectedValue.value = selectedValue.value
}

onMounted(() => {
	events.value = JSON.parse(localStorage.getItem('events')) || []
})
</script>
<template>

  <body>
    <NavBar />

    <div class="form">
      <form action="" @submit.prevent="addEvent">
        <h1>Event Attendance</h1>

        <div class="address">
          <div class="one">
            <caption>Name</caption>
            <input type="text" v-model="address">
          </div>
          <div class="one">
            <caption>Email</caption>
            <input type="text" v-model="addressTwo">
          </div>
        </div>
        <div class="trans mt-3">
          <caption>Response</caption>
          <select class="form-select" aria-label="Default select example">
            <option selected>Select Response</option>
            <option value="Interested">Interested</option>
            <option value="Not interested">Not interested</option>

          </select>

        </div>
        <div class="address mt-3">
          <div class="one">
            <caption>Reason</caption>
            <input type="text" style="width:600px">
          </div>

        </div>
        <div class="create">
          <button class="cancel" @click="$router.push('/')">
            <caption>Cancel</caption>
          </button>
          <!-- <button type="submit" value="Add event" class="createBtn" @click="$router.push('/success')"> -->
          <button type="submit" value="Add event" class="createBtn" @click="$router.push('/success')">
            <caption>Submit</caption>
          </button>
        </div>

      </form>

    </div>
  </body>
</template>

<style scoped>
body {
  background: #eeeeee;
  height: 1080px;
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
  margin-top: 30px;
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