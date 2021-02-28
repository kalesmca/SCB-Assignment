import {GLOBAL_FILTER,CLEAR_FILTER } from '../../constants';

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
        case 'CLEAR_FILTER':
            return {...state, ...action.filterState}          
        default:
            return {...state}
    }
}

export default filterReducer;