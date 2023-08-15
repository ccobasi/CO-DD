import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Events from '../views/Events.vue'
import CreateEvent from '../views/CreateEvent.vue'
import Virtual from '../views/Virtual.vue'
import Success from '../views/Success.vue'
import EventDetailsStorageCreation from '../views/EventDetailsStorageCreation.vue'
import UploadDocument from '../views/UploadDocument.vue'
import ConfirmEventDocument from '../views/ConfirmEventDocument.vue'

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
    {
      path: '/virtual',
      name: 'virtual',
      component: Virtual,
     
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
     
    },
    {
      path: '/eventdetails',
      name: 'event details storage creation',
      component: EventDetailsStorageCreation,
     
    },
    {
      path: '/uploaddocument',
      name: 'event details upload document',
      component: UploadDocument,
     
    },
    {
      path: '/confirmevent',
      name: 'confirm event document',
      component: ConfirmEventDocument,
     
    },
  ]
})


export default router
