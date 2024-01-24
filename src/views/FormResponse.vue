<script setup>
  import NavBar from '../components/NavBar.vue'
  import { ref, onMounted, computed, watch } from 'vue'


  const invites = ref([])
  const name = ref('')
  const email = ref('')
  const selectedValue = ref('')
  const additionalInput = ref('')
  const attend = ref('')
  const company = ref('')

  const invites_asc = computed(() => invites.value.sort((a,b) =>{
	return a.createdAt - b.createdAt
}))

watch(invites, (newVal) => {
	localStorage.setItem('events', JSON.stringify(newVal))
}, {
	deep: true
})

  const addInvite = () => {
	if (name.value === '' || email.value === '' || company.value === ''
      || attend.value === ''  || additionalInput.value === '') {
		return
	}

	invites.value.push({
		name: name.value,
		email: email.value,
    company: company.value,
    attend: attend.value,
    additionalInput: additionalInput.value,
	})

  console.log(invites)
}

 const onSelectChange = () => {
  selectedValue.value = selectedValue.value
}

onMounted(() => {
	invites.value = JSON.parse(localStorage.getItem('invites')) || []
})
</script>
<template>

  <body>
    <NavBar />

    <div class="form">
      <form action="" @submit.prevent="addInvite">
        <h1>Site Visit Feedback</h1>

        <div class="address">
          <div class="one">
            <caption>Name</caption>
            <input type="text" v-model="name">
          </div>
          <div class="one">
            <caption>Email</caption>
            <input type="text" v-model="email">
          </div>
        </div>
        <div class="trans mt-3">
          <caption>Company</caption>
          <select class="form-select" aria-label="Default select example" v-model="company">
            <option selected>Select Company</option>
            <option value="Lagos Free Zone Company">Lagos Free Zone Company</option>
            <option value="konexa">konexa</option>
            <option value="Banner Energy Limited">Banner Energy Limited</option>
            <option value="Seplat">Seplat</option>
            <option value="9mobile">9mobile</option>
            <option value="Total">Total</option>
          </select>

        </div>
        <div class="trans mt-3">
          <caption>Feedback</caption>
          <select class="form-select" aria-label="Default select example" v-model="rating">
            <option selected>Select Feedback</option>
            <option value="Excellent">Excellent<i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i></option>
            <option value="Very Good">Very Good<i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i></option>
            <option value="Good">Good<i class="checked">&#9733;</i><i class="checked">&#9733;</i><i class="checked">&#9733;</i></option>
            <option value="Average">Average<i class="checked">&#9733;</i><i class="checked">&#9733;</i></option>
            <option value="Below Average">Below Average<span>&#9733;</span></option>

          </select>

        </div>
        <div class="trans mt-3">
          <caption>Comment</caption>
          <textarea class="comment" name="Comment" id="" cols="30" rows="10"></textarea>

        </div>
        <div class="trans mt-3">
          <caption>Rate your experience</caption>
          <select class="form-select" aria-label="Default select example" v-model="rating">
            <option selected>Select Feedback</option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
            <option value="Average">Average</option>
            <option value="Below Average">Below Average</option>

          </select>

        </div>
        <!-- <div class="trans mt-3">
          <caption>Are you open to visit our site?</caption>
          <select class="form-select" aria-label="Default select example" @change="onSelectChange(e)" v-model="attend">
            <option selected>Select Response</option>
            <option value="Yes">Yes, I will be open to visit</option>
            <option value="addInput">No, may not be able visit</option>

          </select>

        </div>
        <div class="address mt-3" v-if="attend === 'addInput'">
          <div class="one">
            <caption>Reason</caption>
            <textarea id="w3review" name="w3review" rows="4" cols="80" v-model="additionalInput"></textarea>
          </div>

        </div> -->
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
  color: #43b067;
}
.form-select i {
  color: orange;
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
textarea {
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
}
.checked {
  color: orange !important;
}
.orange-star {
  color: #ffcc3d !important ;
}
select {
  padding: 5px;
  width: 200px;
}

/* Style the options with images */
option {
  padding-left: 30px; /* Add spacing for the image */
  background-repeat: no-repeat;
  background-position: left center;
}
.rating {
  color: #43b067;
}
.comment {
  width: 600px;
  height: 100px;
}
</style>