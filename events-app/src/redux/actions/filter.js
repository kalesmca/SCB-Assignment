import {GLOBAL_FILTER, CLEAR_FILTER,SEARCH_KEY} from '../../constants';

export const globalFilter = (appState, searchKeyword) => {
    let tempEventsState = {...appState.events}
    let tempMemberState = {...appState.members}

    let memberList = tempMemberState.memberList.filter(member=> member.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    let eventList = []
    tempEventsState.eventList.map((event) =>{
        let tmp = []
        tmp = event.members.filter(member => member.value.toLowerCase().includes(searchKeyword.toLocaleLowerCase()))
        if(tmp.length){
            eventList.push(event)
        }
    })

    const filteredObj = {
        isFilterApplied: true,
        memberList,
        eventList
    }
    return {type: GLOBAL_FILTER, filteredObj}
}

export const clearFilter = (appState) => {
    const filterState = {...appState.globalFilter}
    filterState.isFilterApplied = false
    return {type: CLEAR_FILTER, filterState}
}

export const onChangeSearch = (appState, value) => {
    const filterState = {...appState.globalFilter}
    filterState.searchKey = value
    return { type: SEARCH_KEY, filterState}
}


