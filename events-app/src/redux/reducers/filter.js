import {GLOBAL_FILTER } from '../../constants';

const initialState = {
    isFilterApplied: false,
    eventList:[],
    memberList: []
}

const filterReducer = (state=initialState, action) =>{
    console.log('filter Reducer :', state, action)
    switch(action.type) {
        case 'GLOBAL_FILTER':
            return {...state, ...action.filteredObj}            
        default:
            return {...state}
    }
}

export default filterReducer;