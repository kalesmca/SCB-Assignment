import {DELETE_EVENTS, UPDATE_EVENTS} from '../../constants';

export const deleteEvent = (appState, index) => {
    let tempEventsState = {...appState.events}
    tempEventsState.eventList.splice(index, 1)
    return {type: DELETE_EVENTS, tempEventsState}
}

export const updateEvents = (updatedEventState) => {
    return {type: UPDATE_EVENTS, updatedEventState}
}