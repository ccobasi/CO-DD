<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid" style="display: flex;">
      <img src="../components/icons/InfraCredit.png" alt="Image" style="margin: 10px 0 0 30px; width: 100px; height: 30px;">
      <v-tabs v-model="tab" style="border-bottom:none; margin-left: 34%;">
        <v-tab value="one" style="color:#227CBF;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Home</v-tab>
        <v-tab value="two" style="color:#808080;font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;line-height: 19.2px;">Events</v-tab>
      </v-tabs>
      <v-spacer></v-spacer>
      <v-badge content=2 color="#227cbf" style="margin:10px 20px; ">
        <v-icon icon="mdi-bell-outline" size="large" style="margin-top:0px;" />
      </v-badge>

      <v-list-item style="margin: 0 1px 0 0; padding: 0 5px 0 5px;" prepend-avatar="https://cdn.vuetifyjs.com/images/john.jpg"></v-list-item>
    </div>

  </nav>
</template>

<style scoped>
.navbar {
  height: 50px;
  border-image: linear-gradient(to right, rgb(40, 126, 193), rgb(85, 187, 105))
    1;
  border-bottom: 8px solid;
  padding-bottom: 5px;
  width: 100%;
}
.container-fluid {
  background: #fff;
}
/* Your existing scoped styles */
.navbar-nav {
  margin-left: 200px;
  padding-left: 0px;
  padding-bottom: 0px;
  justify-content: space-around;
}
</style>