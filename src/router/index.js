import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateEvent from '../views/CreateEvent.vue'
import Virtual from '../views/Virtual.vue'
import Success from '../views/Success.vue'
import EventDetailsStorageCreation from '../views/EventDetailsStorageCreation.vue'
import UploadDocument from '../views/UploadDocument.vue'
import ConfirmEventDocument from '../views/ConfirmEventDocument.vue'
import ScheduleDate from '../views/ScheduleDate.vue'
import Invitation from '../views/Invitation.vue'
import InvestorDecision from '../views/InvestorDecision.vue'
import Access from '../views/Access.vue'
import Agenda from '../views/Agenda.vue'
import RequestFeedback from '../views/RequestFeedback.vue'
import Events from '../views/Events.vue'
import Eventss from '../views/Eventss.vue'
import IT from '../views/IT.vue'
import FormInvite from '../views/FormInvite.vue'
import FormResponse from '../views/FormResponse.vue'
import Login from '../views/Login.vue'
import Event from '../views/Event.vue'
import AdminLog from '../views/AdminLog.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
      {
      path: '/login',
      name: 'login',
      component: Login,
     
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      
    },
     {
      path: '/events',
      name: 'Events',
      component: Events,
    
    },
    {
      path: '/eventss',
      name: 'Events',
      component: Eventss,
    
    },
    {
      path: '/eventit',
      name: 'IT events',
      component: IT,
    
    },
    {
      path: '/createevent',
      name: 'Create event',
      component: CreateEvent,
     
    },
    {
      path: '/virtual',
      name: 'Virtual',
      component: Virtual,
     
    },
    {
      path: '/success',
      name: 'Success Page',
      component: Success,
     
    },
    {
      path: '/eventdetails/:id',
      name: 'details',
      component: EventDetailsStorageCreation,
     
    },
    {
      path: '/uploaddocument/:id',
      name: 'UploadDetails',
      component: UploadDocument,
     
    },
    {
      path: '/confirmevent/:id',
      name: 'ConfirmDetails',
      component: ConfirmEventDocument,
     
    },
    {
      path: '/scheduledate/:id',
      name: 'ScheduleDetails',
      component: ScheduleDate,
     
    },
    {
      path: '/invitation',
      name: 'Event details invitation',
      component: Invitation,
     
    },
    {
      path: '/investordecision',
      name: 'Event details investordecision',
      component: InvestorDecision,
     
    },
    {
      path: '/access',
      name: 'Event details access',
      component: Access,
     
    },
    {
      path: '/agenda',
      name: 'Event details agenda',
      component: Agenda,
     
    },
    {
      path: '/feedback',
      name: 'event details request feedback',
      component: RequestFeedback,
     
    },
    {
      path: '/forminvite',
      name: 'Event form',
      component: FormInvite,
     
    },
    {
      path: '/formresponse',
      name: 'event form response',
      component: FormResponse,
     
    },
    {
      path: '/event',
      name: 'Event',
      component: Event,
     
    },
    {
      path: '/adminlog',
      name: 'Admin log',
      component: AdminLog,
     
    },
  ]
})


export default router
