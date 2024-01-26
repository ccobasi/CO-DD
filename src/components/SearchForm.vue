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

    <div class="input-group rounded mt-3">
      <input type="search" class="form-control rounded" @input="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
      <span class="input-group-text border-0" id="search-addon">
        <i class="fa fa-search"></i>

      </span>
    </div>
  </form>
</template>

<style scoped>
.search {
  width: 200px;
}
.input-group {
  width: 400px;
  margin-right: 20px;
}
input {
  height: 50px;
}
</style>
