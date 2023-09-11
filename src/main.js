import './assets/main.css'

import { createApp } from 'vue'
import {createPinia} from "pinia"

import App from './App.vue'
import router from './router'
// import { BootstrapVue } from 'bootstrap-vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
// import 'bootstrap-vue/dist/bootstrap-vue.css'


const vuetify = createVuetify({
    components,
    directives,
});
const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)
// app.use(BootstrapVue)

app.mount('#app')