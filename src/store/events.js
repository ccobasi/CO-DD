// import {defineStore} from "pinia"

// export const useEventsStore = defineStore("events", {
//     state: () => ({
//         events: [
            // {
            //     dealid: '#CP4526',
            //     clientname: 'Lagos Free Zone Company',
            //     venue: 'Virtual',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Pending storage creation',
            // },
            // {
            //     dealid: '#CP4526',
            //     clientname: 'konexa',
            //     venue: 'Physical(internal)',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Pending document upload',
            // },
            // {
            //     dealid: '#CP4526',
            //     clientname: 'Banner Energy Limited',
            //     venue: 'Physical(external)',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Pending L&D verification',
            // },
            // {
            //     dealid: '#CP4526',
            //     clientname: 'Seplat',
            //     venue: 'Virtual',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Pending schedule',
            // },
            // {
            //     dealid: '#CP4526',
            //     clientname: '9mobile',
            //     venue: 'Virtual',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Pending access to dataroom',
            // },
            // {
            //     dealid: '#CP4526',
            //     clientname: 'Total',
            //     venue: 'Physical(internal)',
            //     datetime: 'Thursday July 20, 2023 8:00 AM',
            //     status: 'Done',
            // },
//         ],
//         actions: {
//     addEvent(event) {
//       this.events.push(event);
//     },
//   },
//         }),
// })

import {defineStore} from 'pinia';

const initialState = [
    {
        id: 1,
        dealid: '#CP4526',
        clientname: 'Lagos Free Zone Company',
        venue: 'Virtual',
        datetime: 'Thursday July 20, 2023 8:00 AM',
        status: 'Pending storage creation',
    }
];

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [...initialState],
        showForm: false,
        id: null
    }),
    getters: {
      count: state => state.events.length,
      findById: state => eventId => state.events.find(event => event.id === eventId),
      findIndex: state => eventId => state.events.findIndex(event => event.id === eventId)
    },
    actions: {
        create(dealid, clientname, venue, datetime, status) {
            const created = {id: this.count + 1, dealid, clientname, venue, datetime, status};
            this.events = [created, ...this.events];
        },
        update(dealid, clientname, venue, datetime, status) {
            const index = this.findIndex(this.id);
            this.events[index] = {...this.events[index], dealid, clientname, venue, datetime, status};
        },
        remove(id) {
            this.events = this.events.filter(event => event.id !== id);
        }
    }
});

