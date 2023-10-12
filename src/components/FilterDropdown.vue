<script setup>
import { computed, ref, defineProps, defineEmits } from "vue";

    const show = ref(false)

    const props = defineProps({
        items: {
            type: Array,
            required: true,
        }
    })

    const emit = defineEmits(['filter'])

    const statuses = computed(() => {
        return [...new Set(props.items.map(item => item.status))]
    })

    const filter = (e) => {
        emit('filter', e.target.value)
    }
</script>

<template>
  <div class="flex">
    <button @click="show = !show">Filter</button>
    <div v-if="show" class="status">
      <h6>Status</h6>
      <ul class="list">
        <!-- <li v-for="(status, index) in statuses"> -->
        <!-- <input :id="`filter_option_${index}`" type="checkbox" @change="filter" value="status">
          <label :for="`filter_option_${index}`">{{status}}</label> -->
        <li v-for="status in statuses" :key="status">
          <input :id="`filter_option_${status}`" type="checkbox" @change="filter" :value="status">
          <label :for="`filter_option_${status}`">{{ status }}</label>
        </li>

      </ul>
    </div>
  </div>
</template>
<style scoped>
.flex {
  margin-left: 100px;
}
</style>