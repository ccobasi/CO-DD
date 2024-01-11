<script setup>
import NavBar from '../components/NavBar.vue';
import Tab from '../components/Tab/Tab.vue'
import { useEventsStore } from "@/store/events";
import { useRouter } from 'vue-router';
import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue';

const { appContext } = getCurrentInstance();
const $route = appContext.config.globalProperties.$route;
const router = useRouter();

const store = useEventsStore();
const events = ref(store.events);
const user = ref({
  checkbox: false,
});

const isFormValid = computed(() => user.value.checkbox !== false);
const detailsId = computed(() => parseInt($route.params.id));
const detail = computed(() => events.value.find(event => event.id === detailsId.value));


const toggleCheckbox = () => {
  user.value.checkbox = !user.value.checkbox;
};

const save = () => {
  if (isFormValid.value) {
    console.log('User Data Saved:', user.value);
  }
};

const proceed = () => {
  if (isFormValid.value) {
    detail.value.status = 'Pending document upload';
    console.log('User Data Saved:', user.value.checkbox);
  }
};

const proceedAndNavigate = () => {
  proceed();
  detail.value.status = 'Pending document upload';
  router.push('/eventss');
};

const changeRoute = (e) => {
  router.push("/" + e.target.value);
};

const handleSubmit = () => {
  
  addStorage();
  console.log("Event added");
  console.log(store.events);
};

watch(() => user.value.checkbox, () => {
  if (user.value.checkbox) {
    proceed();
  }
});

onMounted(() => {
  console.log('Component is mounted');
});

</script>


<template>
  <NavBar />

  <body>
    <Tab />
    <div class="event-info">
      <div class="form">
        <h1>Event Information</h1>
        <form method="post" action="" @submit.prevent="handleSubmit">
          <div class="trans">
            <caption>Transactions </caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>{{detail.transaction}}</option>

            </select>
          </div>
          <div class="trans">
            <caption>Venue</caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>{{detail.venue}}</option>

            </select>

          </div>
          <div class="address">
            <div class="one">
              <caption>Address</caption>

              <div class="dvalue">{{detail.address}}</div>
            </div>
            <div class="one">
              <caption>Address2</caption>

              <div class="dvalue">{{detail.addressTwo}}</div>
            </div>
          </div>
          <div class="address">
            <div class="one">
              <caption>State</caption>
              <div class="dvalue">{{detail.state}}</div>
            </div>
            <div class="one">
              <caption>Country</caption>
              <div class="dvalue">{{detail.country}}</div>
            </div>
          </div>
          <div class="address">
            <div class="one">
              <caption>Date</caption>
              <div class="dvalue">{{detail.date}}</div>
            </div>
            <div class="one">
              <caption>Time</caption>
              <div class="dvalue">{{detail.time}}</div>
            </div>
          </div>
          <div class="trans">
            <caption>Time Zone</caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>{{detail.timeZone}}</option>

            </select>
          </div>
          <hr>
          <div class="sub">
            <h3>Create Co-DD storage</h3>
          </div>
          <div class="storage">
            <caption>Storage Link</caption>
            <input type="text" class="link" placeholder="https://www.infracredit_storage/app/public.link">
          </div>
          <div class="no-yes">
            <h6>Have you created storage?</h6>
            <div class="check">
              <h6>NO</h6>
              <label class="switch">
                <input type="checkbox" value="ckeckedInvite" unchecked v-model="user.checkbox" required @click="toggleCheckbox">
                <span class="slider round"></span>
              </label>
              <h6>YES</h6>
            </div>

          </div>
          <div class="create">
            <button type="submit" class="createBtn" :disabled="!isFormValid" @click="proceedAndNavigate">
              <caption>Notify transactor</caption>
            </button>

          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eee;
  height: 1080px;
  display: flex;

  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.event-info {
  padding: 30px;
  background: #eee;
  height: 980px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 920px;
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
  border-radius: 5px;
  background: var(--grey-light, #eee);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
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
input,
.dvalue {
  display: flex;
  padding: 12.5px 14px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 290px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #eee);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
input::placeholder {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
.sub {
  margin-top: 20px;
}
.sub h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
hr {
  width: 600px;
  height: 1px;
  background: #eee;
}
.storage {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.link {
  display: flex;
  width: 600px;
  height: 35px;
  padding: 10px 14px;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #fff);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.no-yes {
  height: 50px;
  padding-top: 20px;
}
.no-yes h6 {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.check {
  display: flex;
  gap: 10px;
}
.check h6 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.create {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin-top: 35px;
}
.createBtn {
  display: flex;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  color: #fff;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.createBtn caption {
  color: #fff;
}
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
