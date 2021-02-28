import MOCK_EVENTS from '../../data/EVENTS_MOCK.json';
import {DELETE_EVENTS, UPDATE_EVENTS} from '../../constants';

const initialState = {
    eventList: MOCK_EVENTS,
    headerList: [
        { fieldName: "Event Name ", key: "eventName" },
        { fieldName: "Capacity ", key: "capacity" },
        { fieldName: "Availability", key: "availability" },
        { fieldName: "Date", key: "date" },
        { fieldName: "Organizer", key: "organizer", sortingType : 'all' },
        { fieldName: "About", key: "about" },
        { fieldName: "Schedules For", key: "schedulesFor", sortingType : 'all' },
      ]
}

const eventReducer = (state=initialState, action) =>{
    console.log('events Reducer :', state, action)
    switch(action.type) {
        case 'ADD_EVENT':
            return {...state}
        case DELETE_EVENTS:
            return {...state, ...action.tempEventsState}
        case UPDATE_EVENTS:
            return {...state, ...action.updatedEventState}
            
        default:
            return {...state}
    }
}

export default eventReducer;