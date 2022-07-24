import { Event, EventTypes } from "../types/event";

const initDate = new Date();


const initEvent: Event = {
    id: 0,
    createdAt: initDate,
    estimatedGuests: 0,
    lastUpdatedAt: initDate,
    name: "",
    type: EventTypes.Other,
    closed: false
}

export default initEvent