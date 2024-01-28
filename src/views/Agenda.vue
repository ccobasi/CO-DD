<script>
   
  
   export default{
  
  data() {
    return {
      user: {
        checkbox: false,
        checkbox1: false,
      },
    };
  },
  computed: {
    isFormValid() {
      return (
        this.user.checkbox !== false && this.user.checkbox1 !== false
      );
    },
  },
   methods: {
  changeRoute(e) {
    this.$router.push("/" + e.target.value);
  },
  toggleCheckbox() {
      this.checkbox = !this.checkbox
      this.$emit('setCheckboxVal', this.checkbox)
  },
  toggleCheckbox1() {
      this.checkbox1 = !this.checkbox1
      this.$emit('setCheckboxVal', this.checkbox1)
  },
    proceed() {
      if (this.isFormValid) {
        console.log('User Data Saved:', this.user.checkbox);
      }
      
    },
},
 }
</script>
<template>

  <body>
    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header" style="width:500px">
            <h4 class="modal-title">Agenda</h4>
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
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Send Agenda</button>
          </div>

        </div>
      </div>
    </div>

    <div class="readiness">
      <div class="top">
        <h3>Readiness Check</h3>
        <h6>Timeline:<br>
          1 weeks before due date </h6>
      </div>
      <form action="" @submit.prevent="save">
        <div class="dry">
          <img src="../assets/agenda.png" alt="agenda">
          <div class="text">
            <h4>Dry run</h4>
            <h6>Organize a dry run for CO-DD session.</h6>
          </div>
          <div class="check">
            <h6>NO</h6>
            <label class="switch">
              <input type="checkbox" value="ckeckedInvite" unchecked v-model="user.checkbox1" required @click="toggleCheckbox1">
              <span class="slider round"></span>
            </label>
            <h6>YES</h6>
          </div>
        </div>
        <div class="dry">
          <h6>Leave a comment:</h6>
          <div class="text">
            <textarea name="" class="fb" id="" cols="30" rows="10"></textarea>
          </div>

        </div>
        <hr>
        <div class="agenda">

          <button class="createBtn" data-bs-toggle="modal" data-bs-target="#myModal" type="button">
            <caption>Send Agenda</caption>
          </button>
        </div>
        <div class="agenda mb-5">
          <img src="../assets/agenda.png" alt="agenda">
          <div class="text">
            <h4>Agenda</h4>
            <h6>Send agenda to interested investors.</h6>
          </div>
          <div class="check">
            <h6>NO</h6>
            <label class="switch">
              <input type="checkbox" unchecked v-model="user.checkbox" required @click="toggleCheckbox">
              <span class="slider round"></span>
            </label>
            <h6>YES</h6>
          </div>
        </div>
        <div class="dry mt-5">
          <div class="title mt-5">
            <h6>Leave a comment:</h6>
          </div>
          <div class="text">
            <textarea name="" class="fb" id="" cols="30" rows="10"></textarea>
          </div>

        </div>

        <hr>
        <div class="create">
          <button class="createBtn" :disabled="!isFormValid" @click="$router.push('feedback')">
            <caption>Proceed</caption>
          </button>

        </div>
        <!-- <div class="tab">
        <TableTwo />
      </div> -->
      </form>
    </div>
  </body>
</template>

<style scoped>
body {
  display: flex;
  padding: 20px 50px;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  background: #eee;
}
.readiness {
  display: flex;
  width: 660px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 0 0;
  border-radius: 10px;
  border: 0.885px solid var(--gray-200, #e4e4e7);
  background: #fff;
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
}
h3 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
}
.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.top h6 {
  color: var(--red, #f00);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
.dry {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.text h6 {
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
  width: 260px;
  padding-left: 140px;
}
.check h6 {
  color: var(--black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
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
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
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
  margin-left: 480px;
}
.createBtn caption {
  color: #fff;

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.tab {
  visibility: hidden;
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
.fb {
  display: flex;
  width: 450px;
  height: 100px;
  padding: 10px 14px;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid var(--grey-dark, #808080);
  background: var(--white, #fff);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}
.fb::placeholder {
  color: var(--grey-dark, #808080);
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
hr {
  width: 600px;
  height: 2px;
  background: #808080;
}
@media screen and (max-width: 767px) {
  body {
    padding: 20px;
  }

  .readiness {
    width: 100%;
    padding: 15px;
  }

  h3 {
    font-size: 20px;
    line-height: 24px;
  }

  .top h6 {
    font-size: 10px;
    line-height: 12px;
  }

  .dry {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .createBtn {
    margin-left: 150px;
  }
  .agenda {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
  }
  .modal-header,
  .modal-body,
  .modal-footer,
  .icon,
  .fb {
    width: 100%;
  }

  .modal-header {
    width: 100%;
  }

  .modal-title {
    font-size: 14px;
    line-height: 16.8px;
  }

  .btn-close {
    font-size: 14px;
  }

  .modal-body input,
  .modal-body textarea,
  .fb {
    width: 100%;
  }

  .modal-body input {
    height: 20px;
  }

  .modal-body textarea {
    height: 150px;
  }

  .modal-footer {
    width: 100%;
  }

  .modal-footer button {
    font-size: 14px;
    line-height: 16.8px;
    padding: 8px 15px;
  }
  hr {
    width: 300px;
  }
  .check {
    padding-left: 5px;
  }
}
</style>
