// import {defineStore} from 'pinia';

// export const useEventsStore = defineStore('events', {
//   state: () => ({
//     events: JSON.parse(localStorage.getItem('events')) || [],
//   }),

//   getters: {
//     getEvents() {
//       return this.events;
//     },
//   },
//   actions: {
//     addEvent(transaction,venue,coTransactor,address,addressTwo,state,country,date,time,timeZone,status) {
//       this.events.push({
//         id: Date.now(),
//         transaction: transaction,
//         venue: venue,
//         coTransactor: coTransactor,
//         address: address,
//         addressTwo: addressTwo,
//         state: state,
//         country: country,
//         date: date,
//         time: time,
//         timeZone: timeZone,
//         status: 'Pending storage creation'
//       });

//       this.saveEvents();
//     },
//     fetchEvents() {
//       return this.getEvents();
//     },

//     saveEvents() {
//       localStorage.setItem('events', JSON.stringify(this.events));
//     },
//   },
// });
import { defineStore } from 'pinia';

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: JSON.parse(localStorage.getItem('events')) || [],
  }),

  getters: {
    getEvents() {
      return this.events;
    },
  },

  actions: {
    addEvent(transaction, venue, coTransactor, address, addressTwo, state, country, date, time, timeZone, status) {
      // Use the store instance passed as an argument
      this.$state.events.push({
        id: Date.now(),
        transaction,
        venue,
        coTransactor,
        address,
        addressTwo,
        state,
        country,
        date,
        time,
        timeZone,
        status: 'Pending storage creation',
      });

      // Save the updated events to local storage
      this.saveEvents();
    },

    fetchEvents() {
      // Use the store instance passed as an argument
      return this.$state.events;
    },

    saveEvents() {
      // Save the events array to local storage
      localStorage.setItem('events', JSON.stringify(this.$state.events));
    },
  },
});
