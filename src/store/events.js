import {defineStore} from 'pinia';

// const initialState = [
//     {
//         id: 1,
//          transaction:  '#CP4526-Lagos Free Zone Company',
//    venue: 'Virtual',
//    coTransactor: 'Chido',
//    address: 'Ketu',
//    addressTwo : 'Berger',
//    state: 'Lagos',
//    country: 'Nigeria',
//    date: 'Thursday July 20, 2023',
//    time: '8:00 AM',
//    timeZone: 'GMT +1',
//    status: 'Pending storage creation',
//     }
// ];

// export const useEventsStore = defineStore('events', {
//     state: () => ({
//         events: [...initialState],
//         showForm: false,
//         id: null
//     }),
//     getters: {
//       count: state => state.events.length,
//       findById: state => eventId => state.events.find(event => event.id === eventId),
//       findIndex: state => eventId => state.events.findIndex(event => event.id === eventId)
//     },
//     actions: {
//         create(transaction, venue, coTransactor, address, addressTwo, state, country, date, time, timeZone, status) {
//             const created = {id: this.count + 1, transaction, venue, coTransactor, address, addressTwo, state, country, date, time, timeZone, status};
//             this.events = [created, ...this.events];
//         },
//         update(transaction, venue, coTransactor, address, addressTwo, state, country, date, time, timeZone, status) {
//             const index = this.findIndex(this.id);
//             this.events[index] = {...this.events[index], transaction, venue, coTransactor, address, addressTwo, state, country, date, time, timeZone, status};
//         },
//         remove(id) {
//             this.events = this.events.filter(event => event.id !== id);
//         }
//     }
// });

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
    addEvent(transaction,venue,coTransactor,address,addressTwo,state,country,date,time,timeZone,status) {
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
    },
    fetchEvents() {
      return this.getEvents();
    },

    // toggleTodoStatus(todoId) {
    //   const todoIndex = this.todos.findIndex((todo) => todo.id === todoId);
    //   if (todoIndex !== -1) {
    //     this.todos[todoIndex].completed = !this.todos[todoIndex].completed;
    //     this.saveTodos();
    //   }
    // },

    // removeTodo(todoId) {
    //   this.todos = this.todos.filter((todo) => todo.id !== todoId);
    //   this.saveTodos();
    // },

    saveEvents() {
      localStorage.setItem('events', JSON.stringify(this.events));
    },
  },
});