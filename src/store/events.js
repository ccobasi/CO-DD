import {defineStore} from 'pinia';

export const useEventsStore = defineStore('events', {
  state: () => ({
    events: JSON.parse(localStorage.getItem('events')) || [],
  }),

  getters: {
    getEvents() {
      return this.events;
    },
     getEventById(id) {
      return this.events.find(event => event.id === id);
    },
  },
  actions: {
    addEvent(transaction, venue, coTransactor, address, addressTwo, state, country, date, time,timeZone, status) {
      try {
        this.events.push({
          id: Date.now(),
          transaction: transaction,
          venue: venue,
          coTransactor: coTransactor,
          address: address,
          addressTwo: addressTwo,
          state: state,
          country: country,
          date: date,
          time: time,
          timeZone: timeZone,
          status: 'Pending storage creation'
        });

        this.saveEvents();
      } catch (error) {
        console.error('Error adding event:', error);
      }
    },

    fetchEvents() {
      return this.events;
    },

    saveEvents() {
      try {
        localStorage.setItem('events', JSON.stringify(this.events));
      } catch (error) {
        console.error('Error saving events to localStorage:', error);
      }
    },
  },
});
