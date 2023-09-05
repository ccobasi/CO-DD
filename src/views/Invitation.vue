<script>
    import NavBar from '../components/NavBar.vue'
  //   import {ref} from "vue";

  // const showModal = ref(false)
  // const errorMessage = ref("")
 export default{
  components: NavBar,
  data() {
    return {
      user: {
        // transaction: '',
        // venue: '',
        // address: '',
        // address2: '',
        // state: '',
        // country: '',
        // date: '',
        // time: '',
        // timezone: '',
        flyer: '',
        availability: '',
        invitattion: '',

      },
    };
  },
  computed: {
    isFormValid() {
      return (
        // this.user.transaction.trim() !== '' &&
        // this.user.venue.trim() !== '' &&
        // this.user.address.trim() !== '' &&
        // this.user.address2.trim() !== '' &&
        // this.user.state.trim() !== '' &&
        // this.user.country.trim() !== '' &&
        // this.user.date.trim() !== '' &&
        // this.user.time.trim() !== '' &&
        // this.user.timezone.trim() !== '' &&
        this.user.flyer !== '' &&
        this.user.availability !== '' &&
        this.user.invitattion !== ''
      );
    },
  },
   methods: {
  changeRoute(e) {
    this.$router.push("/" + e.target.value);
  },
  save() {
      // Perform validation here if needed
      if (this.isFormValid) {
        // Here, you can perform any necessary actions to save the user's data.
        // For example, you can make an API request or save the data to the local storage.
        console.log('User Data Saved:', this.user);
      }
    },
    proceed() {
      // Navigate to the next step or route.
      // You can use Vue Router for navigation if you're using it in your project.
      // Example:
      // this.$router.push('/next-step');

      // For this example, let's assume a simple alert.
      // alert('Proceeding to the next step');
      // @click="$router.push('investordecision')"
      
      $router.push('investordecision')
    },
},
 }

</script>

<template>
  <NavBar />

  <body>

    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header" style="width:500px">
            <h4 class="modal-title">Invitation email</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal">X</button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <input type="text" placeholder="Email">
            <input type="text" placeholder="Subject">
            <textarea name="email" id="" cols="30" rows="10" placeholder="Body Text"></textarea>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <div class="icon">
              <img src="../assets/attach.png" alt="attach">
              <img src="../assets/link.png" alt="link">
              <img src="../assets/emoji.png" alt="emoji">
              <img src="../assets/img.png" alt="image">
            </div>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Send Invitation</button>
          </div>

        </div>
      </div>
    </div>

    <div class="event-info">

      <div class="form">
        <h1>Event Information</h1>

        <form action="" @submit.prevent="save">
          <div class="trans">
            <h6>Transactions</h6>
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
          <div class="trans mt-1">
            <h6>Venue</h6>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select Venue</option>
              <option value="1">Physical(Internal)</option>
              <option value="2">Physical(External)</option>
              <option value="3">Virtual</option>
            </select>

          </div>
          <div class="address mt-1">
            <div class="one">
              <h6>Address</h6>
              <input type="text" placeholder="Eko Hotels & Suites" v-model="user.address" required>
            </div>
            <div class="one">
              <h6>Address2</h6>
              <input type="text" placeholder="Plot 1415 Adetokunbo Ademola Street, VI" v-model="user.address2" required>
            </div>
          </div>
          <div class="address mt-3">
            <div class="one">
              <h6>State</h6>
              <input type="text" placeholder="Lagos" v-model="user.state" required>
            </div>
            <div class="one">
              <h6>Country</h6>
              <input type="text" placeholder="Nigeria" v-model="user.country" required>
            </div>
          </div>
          <div class="address mt-3">
            <div class="one">
              <h6>Date</h6>
              <!-- <input class="d-t" type="date" id="date" name="date"> -->
              <input type="text" placeholder="20/06/2023" v-model="user.date" required>
            </div>
            <div class="one">
              <h6>Time</h6>
              <!-- <input class="d-t" type="time" id="appt" name="appt"> -->
              <input type="text" placeholder="8:00 AM" v-model="user.time" required>
            </div>
          </div>
          <div class="trans mt-3">
            <h6>Time Zone</h6>
            <select class="form-select" aria-label="Default select example">
              <option selected>(GMT +01:00)Africa West Central</option>
              <option value="1">(GMT +00:00)Greenwich(London)</option>
              <option value="2">(GMT +01:00)Africa West Central</option>
              <option value="3">(GMT +01:00)Europe Central</option>
              <option value="4">(GMT +02:00)Europe Eastern</option>
              <option value="5">(GMT +02:00)Egypt</option>
            </select>
          </div>
          <div class="storage mt-1">
            <h6>Storage Link</h6>
            <div class="input">
              <h6>https://www.infracredit_storage/app/public.link</h6>
              <div class="copy">
                <h6>Copy<img src="../assets/frame.png" alt="copy"></h6>

              </div>
            </div>

          </div>
          <hr>
          <div class="sub">
            <h3>Invitation</h3>
            <h6>Timeline: <br>3 weeks before due date </h6>
          </div>
          <div class="agenda">
            <img src="../assets/agenda.png" alt="agenda">
            <div class="text">
              <h4>Agenda</h4>
              <h6>Send agenda to interested investors.</h6>
            </div>
            <div class="check" style="width:260px;padding-left:140px">
              <h6>NO</h6>
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider round"></span>
              </label>
              <h6>YES</h6>
            </div>
          </div>
          <hr style="width: 600px;height: 2px;background: #808080;">
          <div class="agenda">
            <img src="../assets/flyer.png" alt="agenda">

            <div class="text">
              <h4>Flyer</h4>
              <h6>Design of flyers to be sent to potential investors.</h6>
            </div>
            <div class="check" style="width:180px;padding-left:60px">
              <h6>NO</h6>
              <label class="switch">
                <input type="checkbox" unchecked v-model="user.flyer" required>
                <span class="slider round"></span>
              </label>
              <h6>YES</h6>
            </div>
          </div>
          <hr style="width: 600px;height: 2px;background: #808080;">
          <div class="agenda">
            <img src="../assets/availability.png" alt="agenda">

            <div class="text">
              <h4>Availability of Facilitators</h4>

            </div>
            <select class="form-select" aria-label="Default select example" v-on:change="changeRoute($event)" v-model="user.availability" required>
              <option selected>All facilitators will be available</option>
              <option value="invitation">All facilitators will be available</option>
              <option value="invitationtwo">
                Some facilitators will be available
              </option>

              <option value="invitationthree">None facilitators will be available</option>

            </select>
          </div>
          <hr style="width: 600px;height: 2px;background: #808080;">
          <div class="agenda">
            <img src="../assets/invites.png" alt="agenda">

            <div class="text">
              <h4>Invites</h4>
              <h6>Send invites and flyers to potential investors.</h6>
            </div>
            <button class="createBtn" style="margin-left:80px" data-bs-toggle="modal" data-bs-target="#myModal" type="button">
              <caption>Invite investors</caption>
            </button>
          </div>
          <hr style="width: 600px;height: 2px;background: #808080;">
          <div class="no-yes">
            <h6>Have you sent invitation to potential investors?</h6>

            <div class="check">
              <h6>NO</h6>
              <label class="switch">
                <input type="checkbox" unchecked v-model="user.invitation" required>
                <span class="slider round"></span>
              </label>
              <h6>YES</h6>
            </div>

          </div>

          <div class="create">
            <button class="createBtn">
              <caption>Save</caption>
            </button>
            <button class="createBtn" :disabled="!isFormValid">
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
  height: 1120px;
  display: flex;

  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
}
.event-info {
  padding: 20px;
  background: #eee;
  height: 1200px;
}
.form {
  display: flex;
  flex-direction: column;
  width: 660px;
  height: 1030px;
  padding: 10px 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
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
.trans h6,
h6 {
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
.agenda {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 40px;
}
.text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
}
.text h4 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
}
.text h6 {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.agenda .form-select {
  display: flex;
  width: 300px;
  padding: 10px 14px;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #fff);

  /* Shadow/xs */
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.agenda .form-select option {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
.address {
  display: flex;
  gap: 20px;
  height: 50px;
}
.one {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  align-self: stretch;
  height: 50px;
}
input {
  display: flex;
  padding: 12.5px 14px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  width: 290px;
  height: 40px;
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
.d-t {
  height: 50px;
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
.storage h6 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
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
  margin-top: 10px;
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
.modal-header {
  width: 549px;
  height: 36px;
  border-radius: 6.077px 6.077px 0px 0px;
  background: var(--black, #000);
}
.modal-title {
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.btn-close {
  color: #fff;
}
.modal-body {
  width: 549px;
  height: 450px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 9.116px;
  border-bottom: none;
}
.modal-body input {
  height: 24px;
  width: 450px;
  align-self: stretch;
  background: #fff;
  border: 1px solid #eee;
}
.modal-body textarea {
  width: 450px;
  height: 350px;
  border: 1px solid #eee;
}
.modal-footer {
  display: flex;
  width: 517.765px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.modal-footer button {
  display: flex;
  padding: 9.723px 18.231px;
  justify-content: center;
  align-items: center;
  gap: 9.116px;
  border-radius: 5px;
  background: var(--secondary, #47b65c);
  color: var(--white, #fff);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.icon {
  display: flex;
}
.createBtn:disabled {
  cursor: not-allowed;
  opacity: 0.8;
}
</style>
