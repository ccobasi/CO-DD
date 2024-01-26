<script setup>

import TableTwo from '../components/Tables/TableTwo.vue'
import { ref, computed, getCurrentInstance } from 'vue';
import { useEventsStore } from "@/store/events";
import { useRouter } from 'vue-router';

const { appContext } = getCurrentInstance();
const $route = appContext.config.globalProperties.$route;
const router = useRouter();
const store = useEventsStore();
const events = store.events;

const isFormValid = computed(() => user.value.checkbox !== false);

const user = ref({
  checkbox: false,
});

const toggleCheckbox = () => {
  user.value.checkbox = !user.value.checkbox;
  $emit('setCheckboxVal', user.value.checkbox);
};

const detailsId = ref(parseInt($route.params.id));
const detail = computed(() => events.find(event => event.id === detailsId.value));

const proceedAndNavigate = () => {
  if (isFormValid.value) {
    detail.value.status = 'Done';
    router.push('/agenda');
  } else {
    console.error('User checkbox is not checked');
  }
};
</script>
<template>

  <body>
    <div class="response">
      <h1>Investors Response</h1>
      <TableTwo />
      <div class="access">
        <h3>Access</h3>
        <h6>Timeline:<br>
          1 weeks before due date </h6>
      </div>
      <div class="agenda">
        <img src="../assets/flyer.png" alt="agenda">

        <div class="text">
          <h4>Data room access</h4>
          <h6>Grant interested investors access to data room</h6>
        </div>
        <div class="check">
          <h6>NO</h6>
          <label class="switch">
            <input type="checkbox" value="ckeckedInvite" unchecked v-model="user.checkbox" required @click="toggleCheckbox">
            <span class="slider round"></span>
          </label>
          <h6>YES</h6>
        </div>
      </div>
      <hr>

      <div class="btn">
        <button :disabled="!isFormValid" @click="proceedAndNavigate">Notify L&D</button>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #eee;
  height: 980px;
}
.response {
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 10px;
  border: 0.885px solid var(--gray-200, #e4e4e7);
  background: var(--color-3, #fff);
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
  width: 660px;
  height: 940px;
}
.btn {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  align-self: stretch;
}
button {
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
  justify-self: end;
}
.access {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.access h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.access h6,
caption {
  color: var(--red, #f00);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
  width: 131px;
}
.agenda {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 40px;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.text h4 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.text h6 {
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
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
hr {
  width: 600px;
  height: 2px;
  background: #808080;
}
.check {
  width: 180px;
  padding-left: 60px;
}
@media screen and (max-width: 767px) {
  body {
    padding: 20px;
  }

  .response {
    width: 100%;
    padding: 15px;
  }

  .btn button {
    width: 100%;
    justify-self: center;
  }

  .access,
  .agenda {
    flex-direction: column;
    align-items: flex-start;
  }

  .access h3 {
    font-size: 18px;
    line-height: 22px;
  }

  .access h6,
  .caption,
  .text h4,
  .text h6,
  .check h6 {
    font-size: 14px;
    line-height: 17px;
  }

  .agenda img {
    width: 100%;
    max-width: 200px;
  }

  .agenda .text {
    width: 60%;
  }

  .check {
    padding-left: 0;
  }

  hr {
    width: 100%;
    visibility: hidden;
  }
  .btn {
    margin-top: 200px;
  }
  .check {
    padding-left: 5px;
    margin-bottom: 20px;
  }
}
</style>