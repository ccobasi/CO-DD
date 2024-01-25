<script setup>
import AdminLog from '../views/AdminLog.vue';
import { ref, onMounted } from 'vue';
import { useUsersStore } from "@/store/users";
import { useRouter } from 'vue-router';

const store = useUsersStore();
const users = store.users;
console.log(users)
const router = useRouter();


const addUser = () => {
  if (name.value.trim() !== '' || email.value.trim() !== '' || company.value.trim() !== ''
      || phone.value.trim() !== ''  || role.value.trim() !== ''
      || status.value.trim() !== '' ) {
    store.addUser(name.value.trim(), email.value.trim(), company.value.trim(),
      phone.value.trim(), role.value.trim(), status.value.trim());
  
  }
};

const name = ref('')
const email = ref('')
const company = ref('')
const phone = ref('')
const role = ref('')
const status = ref('')
 const selectedValue = ref('')

const handleSubmit = () => {
  addUser();
  console.log("User added")
  console.log(store.users)
  router.push('/')
};


onMounted(() => {
  store.fetchUsers();
});

const onSelectChange = () => {
  selectedValue.value = selectedValue.value
}

const tab1 = ref(null);
</script>
<template>
  <form method="post" action="" @submit.prevent="handleSubmit">
    <div class="modal" id="myModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">User Role</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div class="modal-body">

            <div class="goal">
              <div class="left">
                <h4>Name</h4>
                <textarea name="Name" placeholder="Name" id="" cols="30" rows="10" v-model="name"></textarea>
              </div>
              <div class="right">
                <h4 class="">Email</h4>
                <textarea name="Email" placeholder="Email" id="" cols="30" rows="10" v-model="email"></textarea>
              </div>
            </div>
            <div class="goal">
              <div class="left">
                <h4>Company</h4>
                <textarea name="Company" placeholder="Company" id="" cols="30" rows="10" v-model="company"></textarea>
              </div>
              <div class="right">
                <h4 class="">Phone Number</h4>
                <textarea name="Phone Number" placeholder="Phone Number" id="" cols="30" rows="10" v-model="phone"></textarea>
              </div>
            </div>
            <div class="goal">
              <div class="left">
                <h4>Role</h4>
                <select class="form-select" aria-label="Default select example" v-on:change="onSelectChange(e)" v-model="role">

                  <option class="opt" value="Co-Transactor">Co-Transactor</option>
                  <option class="opt" value="IT">IT</option>
                  <option class="opt" value="Management">Management</option>
                  <option class="opt" value="Transactor">Transactor</option>
                </select>
              </div>
              <div class="right">
                <h4 class="">Status</h4>
                <select class="form-select" aria-label="Default select example" v-on:change="onSelectChange(e)" v-model="status">

                  <option class="opt" value="Active">Active</option>
                  <option class="opt" value="In-Active">In-Active</option>
                </select>
              </div>
            </div>

          </div>
          <div class="modal-footer">

            <button type="submit" class="btn btn-success" data-bs-dismiss="modal" @click="$router.push('/')">Add User</button>
          </div>

        </div>
      </div>
    </div>
  </form>
  <v-card>
    <v-tabs v-model="tab1" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="1">Users</v-tab>
      <v-tab :value="2">Log</v-tab>

    </v-tabs>

    <v-window v-model="tab1">
      <v-window-item :value="1">
        <div class="dev">
          <h3>Users Role</h3>
          <button data-bs-toggle="modal" data-bs-target="#myModal" type="button">Add User</button>
        </div>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> S/N </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Name </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Email </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Company </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Phone No. </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Role </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>
              <th class="text-left">
                <div class="d-flex align-center gap-1">
                  <span> Status </span>

                  <span class="d-flex flex-column align-center">
                    <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                    <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                  </span>

                </div>
              </th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="item in users" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.email }}</td>
              <td>{{ item.company }}</td>
              <td>{{ item.phone }}</td>
              <td>{{ item.role }}</td>
              <td>{{ item.status }}</td>

            </tr>
          </tbody>
        </v-table>
      </v-window-item>
      <v-window-item :value="2">
        <AdminLog />
      </v-window-item>
    </v-window>
  </v-card>
</template>
<style scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  height: 30px !important;
}
.modal-body {
  gap: 20px;
  background: #fff;
  margin-top: 0px !important;
}
.modal-dialog {
  z-index: 1500;
  width: 900px;
  height: 630px;
  margin-left: 20%;
  display: inline-flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  border: 1px solid var(--Grey-Light, #eee);
  background: var(--Grey-Light, #eee);
}
.modal-content {
  display: flex;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  background: #fff;
}
.goal {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin-top: 20px;
}
.left {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
}
.left h4,
.right h4 {
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 19.2px;
}
.goal textarea {
  display: flex;
  width: 320px;
  height: 70px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border: 1px solid #808080;
  border-radius: 5px;
}
.type input {
  display: flex;
  width: 320px;
  height: 40px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Grey-Light, #eee);
  background: var(--White, #fff);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
}
.modal-footer {
  display: flex;
  height: 40px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
}
.modal-footer .btn {
  border-radius: 5px;
  background: var(--Secondary, #47b65c);
  color: #fff;
}
.form-select {
  display: flex;
  width: 320px;
  height: 40px;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid var(--Grey-Light, #eee);
  background: var(--White, #fff);
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
}
.dev h3 {
  color: var(--Black, #000);
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28.8px;
  width: 900px;
}
.dev {
  display: flex;
  padding: 10px 30px;
  align-items: center;
  gap: 10px;
}
.dev button {
  border-radius: 5px;
  background: var(--Secondary, #47b65c);
  width: 180px;
  height: 40px;
  color: #fff;
  font-size: 18px;
}
</style>