<script setup>
import { defineEmits } from 'vue';

    const emit = defineEmits(['filter'])

    const filter = (e) => {
        emit('filter', e.target.value)
    }
</script>

<template>
  <label for="">
    <input type="radio" name="show" value="all" checked @change="filter">
    <span>Show All</span>
  </label>
  <label for="">
    <input type="radio" name="show" value="today" @change="filter">
    <span>Due Today</span>
  </label>
  <label for="">
    <input type="radio" name="show" value="past" @change="filter">
    <span>Past Due</span>
  </label>
</template>