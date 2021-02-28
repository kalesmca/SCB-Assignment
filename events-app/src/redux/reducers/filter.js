import {GLOBAL_FILTER,CLEAR_FILTER,SEARCH_KEY } from '../../constants';

const initialState = {
    isFilterApplied: false,
    eventList:[],
    memberList: [],
    searchKey: ''
}

const filterReducer = (state=initialState, action) =>{
    switch(action.type) {
        case GLOBAL_FILTER:
            return {...state, ...action.filteredObj}   
        case CLEAR_FILTER:
            return {...state, ...action.filterState}     
        case SEARCH_KEY:
            return {...state, ...action.filterState}       
        default:
            return {...state}
    }
}

export default filterReducer;