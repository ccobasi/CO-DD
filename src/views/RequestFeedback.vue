<script setup>
    import NavBar from '../components/NavBar.vue'
    import TableTwo from '../components/Tables/TableTwo.vue'
</script>

<template>
  <NavBar />

  <body>
    <div class="feedback">
      <h3>Feedback</h3>
      <div class="request">
        <div class="img">
          <img src="../assets/invites.png" alt="feedback">
        </div>
        <div class="r-text">
          <h4>Request feedback</h4>
          <p>Get feedback from participants on the Co-DD day</p>
        </div>
        <div class="btn">
          <button>Request Feedback</button>
        </div>
      </div>
      <hr style="width: 600px;height: 2px;background: #808080;">
      <div class="table">
        <h3>Feedback response</h3>
        <TableTwo />
        <div class="complete">
          <button class="back">Back</button>
          <button class="done">Complete</button>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eee;
  height: 1040px;
  display: flex;

  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.feedback {
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
}
.feedback h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.request {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.r-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.r-text h4 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.r-text {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
button {
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  color: #fff;
}
.table h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.complete {
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
.back {
  display: flex;
  padding: 10px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 5px;
  border: 1px solid var(--grey-light, #eee);
  background: var(--white, #fff);
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.done {
  display: flex;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
}
</style>
