<script>
    import NavBar from '../components/NavBar.vue'

     export default {
  components:NavBar,
  // data() {
  //   return {
  //     textToCopy: 'https://www.infracredit_storage/app/public.link', // Replace with the text you want to copy
  //     copiedMessage: '',
  //   };
  // },
  // methods: {
  //   copyToClipboard() {
  //     const textarea = document.createElement('textarea');
  //     textarea.value = this.textToCopy;
  //     document.body.appendChild(textarea);
  //     textarea.select();
  //     document.execCommand('copy');
  //     document.body.removeChild(textarea);

  //     this.copiedMessage = 'Copied!';
  //     setTimeout(() => {
  //       this.copiedMessage = '';
  //     }, 2000); // Clear the copied message after 2 seconds
  //   },
  // },
  data() {
    return {
      textToCopy: 'https://www.infracredit_storage/app/public.link', // Replace with the text you want to copy
      copiedMessage: '',
      user: {
        checkbox: false,
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.user.checkbox !== false 
      );
    },
  },
  methods: {
    copyToClipboard() {
      const textarea = document.createElement('textarea');
      textarea.value = this.textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);

      this.copiedMessage = 'Copied!';
      setTimeout(() => {
        this.copiedMessage = '';
      }, 2000); // Clear the copied message after 2 seconds
    },
     changeRoute(e) {
    this.$router.push("/" + e.target.value);
  },
  toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
  },
  save() {
      if (this.isFormValid) {
        console.log('User Data Saved:', this.user);
      }
    },
    proceed() {
      if (this.isFormValid) {
        console.log('User Data Saved:', this.user.checkbox);
      }
    },
  },
};
</script>

<template>
  <NavBar />

  <body>
    <div class="event-info">
      <div class="form">
        <h1>Event Information</h1>
        <form action="">
          <div class="trans">
            <caption>Transactions</caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>#CP4526-Lagos Free Zone Company</option>
              <option value="1">#CP4526-Lagos Free Zone Company</option>
              <option value="2">#CP4526-konexa</option>
              <option value="3">#CP4526-Banner Energy Limited</option>
              <option value="4">#CP4526-Seplat</option>
              <option value="5">#CP4526-9mobile</option>
              <option value="6">#CP4526-Total</option>
            </select>
          </div>
          <div class="trans">
            <caption>Venue</caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>Physical(Internal)</option>
              <option value="1">Physical(Internal)</option>
              <option value="2">Physical(External)</option>
              <option value="3">Virtual</option>
            </select>

          </div>
          <div class="address">
            <div class="one">
              <caption>Address</caption>
              <input type="text" placeholder="Eko Hotels & Suites">
            </div>
            <div class="one">
              <caption>Address2</caption>
              <input type="text" placeholder="Plot 1415 Adetokunbo Ademola Street, VI">
            </div>
          </div>
          <div class="address">
            <div class="one">
              <caption>State</caption>
              <input type="text" placeholder="Lagos">
            </div>
            <div class="one">
              <caption>Country</caption>
              <input type="text" placeholder="Nigeria">
            </div>
          </div>
          <div class="address">
            <div class="one">
              <caption>Date</caption>
              <!-- <input type="date" id="date" name="date"> -->
              <input id="date" name="date" placeholder="20/06/2023">
            </div>
            <div class="one">
              <caption>Time</caption>
              <!-- <input type="time" id="appt" name="appt"> -->
              <input id="appt" name="appt" placeholder="8:00 AM">
            </div>
          </div>
          <div class="trans">
            <caption>Time Zone</caption>
            <select class="form-select" aria-label="Default select example">
              <option selected>(GMT +01:00)Africa West Central</option>
              <option value="1">(GMT +00:00)Greenwich(London)</option>
              <option value="2">(GMT +01:00)Africa West Central</option>
              <option value="3">(GMT +01:00)Europe Central</option>
              <option value="4">(GMT +02:00)Europe Eastern</option>
              <option value="5">(GMT +02:00)Egypt</option>
            </select>
          </div>
          <hr>
          <div class="sub">
            <h3>Confirm Co-DD event and documents</h3>
            <h6>Timeline: <br>5 weeks before due date </h6>
          </div>
          <div class="storage">
            <caption>Storage Link</caption>
            <div class="input">
              <input v-model="textToCopy" readonly />
              <div class="copy" @click="copyToClipboard">
                <h6>Copy<img src="../assets/frame.png" alt="copy"></h6>
                <p>{{ copiedMessage }}</p>

              </div>
            </div>

          </div>
          <div class="no-yes">
            <h6>Have you confirmed documents?</h6>
            <div class="check">
              <h6>NO</h6>
              <label class="switch">
                <input type="checkbox" value="ckeckedInvite" unchecked v-model="user.checkbox" required @click="toggleCheckbox">
                <span class="slider round"></span>
              </label>
              <h6>YES</h6>
            </div>

          </div>
          <div class="create">
            <button class="createBtn" :disabled="!isFormValid" @click="$router.push('scheduledate')">
              <caption>Proceed</caption>
            </button>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eee;
  height: 1020px;
  display: flex;

  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.event-info {
  padding: 30px;
  background: #eee;
  height: 980px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 920px;
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
  gap: 8px;
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
.form-select {
  width: 600px;
  height: 40px;
  border-radius: 5px;
  background: var(--grey-light, #eee);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.address {
  display: flex;
  gap: 20px;
}
.one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
}
input {
  display: flex;
  padding: 12.5px 14px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 290px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #eee);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
input::placeholder {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
.sub {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.sub h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.sub h6 {
  color: var(--red, #f00);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
  width: 131px;
  height: 29px;
}
hr {
  width: 600px;
  height: 1px;
  background: #eee;
}
.storage {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.input {
  display: flex;
  width: 600px;
  padding: 10px 14px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--white, #fff);
  background: var(--grey-light, #eee);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.input input {
  border: none;
  color: var(--primary, #227cbf);
  font-family: Roboto;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 14.4px;
}
.input h6 {
  color: var(--primary, #227cbf);
  font-family: Roboto;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 14.4px;
}
.copy h6 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 14.4px;
}
.no-yes {
  height: 50px;
  padding-top: 20px;
}
.no-yes h6 {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.check {
  display: flex;
  gap: 10px;
}
.check h6 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.create {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  margin-top: 35px;
}
.createBtn {
  display: flex;
  height: 40px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: var(--gradient, linear-gradient(90deg, #227cbf 0%, #47b65c 100%));
  color: #fff;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.createBtn caption {
  color: #fff;
}
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 22px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: '';
  height: 16px;
  width: 16px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
