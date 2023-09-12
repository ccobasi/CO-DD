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
        ]
    })
})
