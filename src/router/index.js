import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import CreateEvent from '../views/CreateEvent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    
    },
    {
      path: '/events',
      name: 'events',
      component: Events,
     
    },
    {
      path: '/createevent',
      name: 'create event',
      component: CreateEvent,
     
    },
  ]
})


export default router
