<script setup>
    import NavBar from '../components/NavBar.vue'
</script>
<template>
  <NavBar />

  <body>
    <div class="success">
      <img src="../assets/draw.jpg" alt="success">
      <h2>Great Job!</h2>
      <p>You have successfully created an event. Sit tight while it finishes loading</p>
      <p>Loading....</p>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eeeeee;
  display: flex;
  height: 980px;
  padding: 150px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.success {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.success h2 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43.2px;
}
.success p {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
</style>