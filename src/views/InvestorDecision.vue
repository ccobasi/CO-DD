<script setup>
  import NavBar from '../components/NavBar.vue'
  import TableTwo from '../components/Tables/TableTwo.vue'
  import { ref, computed, getCurrentInstance } from 'vue';
import { useEventsStore } from "@/store/events";
import { useRouter } from 'vue-router';

const { appContext } = getCurrentInstance();
const $route = appContext.config.globalProperties.$route;
const router = useRouter();
const store = useEventsStore();
const events = store.events;

const detailsId = ref(parseInt($route.params.id));
const detail = computed(() => events.find(event => event.id === detailsId.value));

const proceedAndNavigate = () => {
    router.push({ name: 'AccessDetails', params: { id: detail.value.id } });
};

</script>
<template>
  <NavBar />

  <body>
    <div class="response">
      <h1>Investors Response</h1>
      <TableTwo />
      <div class="btn">
        <button @click="proceedAndNavigate">Notify IT to grant access to interested investors</button>
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
</style>