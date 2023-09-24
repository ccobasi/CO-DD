<script setup>
  import NavBar from '../components/NavBar.vue'

     const recent = [
            {
                name: 'Chinua Azubike',
                date: '12 July, 2023 ',
                time: '07:49:22 PM ',
                action: 'Assigned Role',
            },
            {
                name: 'Osaze Osaghae',
                date: '9 March, 2023 ',
                time: '10:19:56 AM ',
                action: 'Added User',
            },
            {
                name: 'Daniel Mueller',
                date: '14 June, 2023',
                time: '11:45:30 AM ',
                action: 'Edited Permission',
            },
            {
                name: 'Lola Oyebola',
                date: '20 May, 2023 ',
                time: '09:25:40 AM ',
                action: 'Added User',
            },
            {
                name: 'Jane Doe',
                date: '3 April, 2023 ',
                time: '12:13:19 PM ',
                action: 'Assigned Role',
            },
        ]
  
</script>
<template>

  <body>
    <NavBar />

    <div class="form">
      <div class="title mb-3">
        <h2>Admin</h2>
      </div>

      <v-table>
        <thead>
          <tr>
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
                <span> Date </span>

                <span class="d-flex flex-column align-center">
                  <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                  <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                </span>

              </div>
            </th>
            <th class="text-left">
              <div class="d-flex align-center gap-1">
                <span> Time </span>

                <span class="d-flex flex-column align-center">
                  <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                  <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                </span>

              </div>
            </th>
            <th class="text-left">
              <div class="d-flex align-center gap-1">
                <span> Action </span>

                <span class="d-flex flex-column align-center">
                  <v-icon icon="mdi-chevron-up" size="x-small" class="mb-n1"></v-icon>
                  <v-icon icon="mdi-chevron-down" size="x-small"></v-icon>
                </span>

              </div>
            </th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="item in recent" :key="item.name" @click="$router.push('eventdetails')">
            <td>{{ item.name }}</td>
            <td>{{ item.date }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.action }}</td>

          </tr>
        </tbody>
      </v-table>
    </div>
  </body>
</template>

<style scoped>
body {
  background: #eeeeee;
  height: 100vh;
}
.form {
  display: flex;
  width: 95%;
  height: 70vh;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border-radius: 10px;
  background: #fff;
  margin: auto;
  /* Drop Shadow */
  box-shadow: 1px 1px 10px 0px rgba(0, 0, 0, 0.1);
  margin-top: 30px;
}
th {
  color: var(--Black, #000);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
}
td {
  color: var(--Grey-Dark, #808080);

  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14.4px;
  width: 300px;

  border-top: 1px solid var(--Grey-Light, #fafafb);
  border-bottom: 1px solid var(--Grey-Light, #fafafb);
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.05);
}
</style>