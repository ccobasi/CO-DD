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
      this.$router.push('/event');
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
      <!-- <p>Loading....</p> -->
      <!-- <div class="loader-wrapper">
        <svg>
          <circle cx="70" cy="70" r="50"></circle>
        </svg>
      </div> -->

      <p style="visibility:hidden">Redirecting in {{ countdown }} seconds...</p>
      <div class="loader"></div>
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
.loader-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader-wrapper svg {
  position: relative;
  width: 150px;
  height: 150px;
  animation: rotate 2s linear infinite;
}
.loader-wrapper svg circle {
  width: 100%;
  height: 100%;
  fill: none;
  stroke-width: 10;
  stroke: #59b976, #2c84b9;
  stroke-linecap: round;
  transform: translate(5px, 5px);
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  animation: animate 4s linear infinite;
}
@keyframes animate {
  0%,
  100% {
    stroke-dashoffset: 440;
  }
  50% {
    stroke-dashoffset: 0;
  }
  50.1% {
    stroke-dashoffset: 880;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/*Next*/
.loader,
.loader:before,
.loader:after {
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  position: absolute;
  border-radius: 50%;
}

.loader {
  position: fixed;
  width: 100px;
  height: 100px;
  margin-top: 450px;
  margin-left: 50%;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

.loader:before {
  border: 5px solid #2c84b9;
  border-bottom: 5px solid #59b976;
  border-left: 5px solid #59b976;
  animation: spin1 1s linear infinite;
}

.loader:after {
  border: 5px solid #2c84b9;
  border-top: 5px solid transparent;
  border-right: 5px solid transparent;
  animation: spin2 1s linear infinite;
}

@keyframes spin1 {
  20% {
    transform: rotate(150deg);
  }
  40% {
    transform: rotate(300deg);
  }
  80% {
    transform: rotate(300deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes spin2 {
  0% {
    transform: rotate(-30deg);
  }
  20% {
    transform: rotate(-30deg);
    border-color: transparent transparent #2c84b9 #2c84b9;
  }
  21% {
    border-color: #59b976 #59b976 transparent transparent;
  }
  40% {
    transform: rotate(-30deg);
  }
  60% {
    transform: rotate(120deg);
    border-color: #59b976 #59b976 transparent transparent;
  }
  61% {
    border-color: transparent transparent #2c84b9 #2c84b9;
  }
  80% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(330deg);
  }
}
</style>