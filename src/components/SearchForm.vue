<script setup>
import { defineEmits } from 'vue';

// const emit = defineEmits(emitOptions: ['search'])

const emit = defineEmits(['search']);
    const search = (e) => {
        emit('search', e.target.value);
    }


</script>

<template>
  <form action="">
    <label for="">Search</label>
    <div class="search"><input type="text" @input="search" placeholder="Search"></div>
  </form>
</template>

<style scoped>
.search {
  width: 200px;
}
</style>
