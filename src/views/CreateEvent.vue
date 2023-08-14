<script setup>
  import NavBar from '../components/NavBar.vue'
</script>
<template>
  <NavBar />
  <div class="next">
    <h2>Tell us a little about the event.</h2>
    <p>You can always update these details later.</p>
    <v-spacer></v-spacer>

  </div>
  <div class="form">
    <form action="">
      <div class="trans">
        <caption>Transactions</caption>
        <select class="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
  </div>
</template>

<style scoped>
.next {
  color: white;
  background-image: linear-gradient(
    to right,
    rgb(40, 126, 193),
    rgb(85, 187, 105)
  );
  margin: 15px 30px 20px 30px;
  padding: 45px 15px;
  border-radius: 10px;
  height: 200px;
  padding: 70px 30px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

.next h2 {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 43.2px;
  margin-left: 28%;
}
.next p {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
  margin-left: 35%;
  padding-top: 10px;
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
}
.trans {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
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
</style>