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
import InvitationTwo from '../views/InvitationTwo.vue'
import InvitationThree from '../views/InvitationThree.vue'
import InvestorDecision from '../views/InvestorDecision.vue'
import Access from '../views/Access.vue'
import Agenda from '../views/Agenda.vue'
import RequestFeedback from '../views/RequestFeedback.vue'
import Events from '../views/Events.vue'
import FormInvite from '../views/FormInvite.vue'
import FormResponse from '../views/FormResponse.vue'
import Login from '../views/Login.vue'
import Demo from '../views/Demo.vue'
import Event from '../views/Event.vue'
import AdminLog from '../views/AdminLog.vue'


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
      path: '/eventdetails/:id',
      name: 'details',
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
    {
      path: '/scheduledate',
      name: 'schedule date',
      component: ScheduleDate,
     
    },
    {
      path: '/invitation',
      name: 'event details invitation',
      component: Invitation,
     
    },
    {
      path: '/invitationtwo',
      name: 'event details invitation two',
      component: InvitationTwo,
     
    },
    {
      path: '/invitationthree',
      name: 'event details invitation three',
      component: InvitationThree,
     
    },
    {
      path: '/investordecision',
      name: 'event details investordecision',
      component: InvestorDecision,
     
    },
    {
      path: '/access',
      name: 'event details access',
      component: Access,
     
    },
    {
      path: '/agenda',
      name: 'event details agenda',
      component: Agenda,
     
    },
    {
      path: '/feedback',
      name: 'event details request feedback',
      component: RequestFeedback,
     
    },
    {
      path: '/forminvite',
      name: 'event form',
      component: FormInvite,
     
    },
    {
      path: '/formresponse',
      name: 'event form response',
      component: FormResponse,
     
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
     
    },
    {
      path: '/demo',
      name: 'demo',
      component: Demo,
     
    },
    {
      path: '/event',
      name: 'event',
      component: Event,
     
    },
    {
      path: '/adminlog',
      name: 'admin log',
      component: AdminLog,
     
    },
  ]
})


export default router
