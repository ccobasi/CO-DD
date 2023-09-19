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
            {
                dealid: '#CP4526',
                clientname: 'konexa',
                venue: 'Physical(internal)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending document upload',
            },
            {
                dealid: '#CP4526',
                clientname: 'Banner Energy Limited',
                venue: 'Physical(external)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending L&D verification',
            },
            {
                dealid: '#CP4526',
                clientname: 'Seplat',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending schedule',
            },
            {
                dealid: '#CP4526',
                clientname: '9mobile',
                venue: 'Virtual',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Pending access to dataroom',
            },
            {
                dealid: '#CP4526',
                clientname: 'Total',
                venue: 'Physical(internal)',
                datetime: 'Thursday July 20, 2023 8:00 AM',
                status: 'Done',
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
