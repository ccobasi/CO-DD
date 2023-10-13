<script setup>
import { computed, ref, defineProps, defineEmits } from "vue";

    const show = ref(false)

    const props = defineProps({
        events: {
            type: Array,
            required: true,
        }
    })

    const emit = defineEmits(['filter'])

    const statuses = computed(() => {
        return [...new Set(props.events.map(event => event.status))]
    })

    const filter = (e) => {
        emit('filter', e.target.value)
    }
</script>

<template>
  <div class="flex mt-3 mb-2">
    <!-- <button @click="show = !show">Filter</button>
    <div v-if="show" class="status">
      <h6>Status</h6> -->
    <!-- <ul class="list">
        <li v-for="status in statuses" :key="status">
          <input :id="`filter_option_${status}`" type="checkbox" @change="filter" :value="status">
          <label :for="`filter_option_${status}`">{{ status }}</label>
        </li>

      </ul> -->
    <select class="list ml-4" @change="filter">
      <option value="All">All</option>
      <option value="Pending storage creation">Pending storage creation</option>
      <option value="Pending document upload">Pending document upload</option>
      <option value="Pending L&D verification">Pending L&D verification</option>
      <option value="Done">Done</option>

    </select>
  </div>
  <!-- </div> -->
</template>
<style scoped>
.flex {
  margin-left: 5px;
}
.list {
  display: flex;
  width: 320px;
  padding: 10px 20px;
  align-items: flex-start;
  gap: 20px;

  border-radius: 5px;
  border: 1px solid var(--Grey-Light, #eee);
  background: var(--White, #fff);
}
.list::placeholder {
  color: #808080;
}
</style>