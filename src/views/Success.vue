<script>
    import NavBar from '../components/NavBar.vue'

  export default {
    components: NavBar,
  data() {
    return {
      countdown: 5, // Set the initial countdown time in seconds
    };
  },
  mounted() {
    this.startRedirectTimer();
  },
  methods: {
    startRedirectTimer() {
      const redirectTime = 5000; // 5000 milliseconds (5 seconds)
      
      setTimeout(() => {
        this.redirectToNewPage();
      }, redirectTime);
      
      // Update countdown every second
      const countdownInterval = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(countdownInterval);
        }
      }, 1000);
    },
    redirectToNewPage() {
      // Replace '/target-page' with the actual route you want to redirect to
      this.$router.push('/events');
    },
  },
};
</script>
<template>
  <NavBar />

  <body>
    <div class="success">
      <img src="../assets/draw.jpg" alt="success">
      <h2>Great Job!</h2>
      <p>You have successfully created an event. Sit tight while it finishes loading</p>
      <p>Loading....</p>
      <v-progress-linear v-model="value" :buffer-value="bufferValue" color="" class="bar"></v-progress-linear>
      <p>Redirecting in {{ countdown }} seconds...</p>
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
bar {
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
}
</style>