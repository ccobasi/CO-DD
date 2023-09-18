import {defineStore} from "pinia"

export const useEventsStore = defineStore("events", {
    state: () => ({
        events: [
            {
                dealid: '#CP4526',
                clientname: 'Lagos Free Zone Company',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending storage creation',
            },
        ],
        }),
})
// store.js
// import {defineStore} from "pinia"

// export const useMyStore = defineStore('events', {
//   state: () => ({
//     count: 0,
//   }),
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });
