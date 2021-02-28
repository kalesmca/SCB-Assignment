import {GLOBAL_FILTER} from '../../constants';

export const globalFilter = (appState, searchKeyword) => {
    let tempEventsState = {...appState.events}
    let tempMemberState = {...appState.members}

    let memberList = tempMemberState.memberList.filter(member=> member.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    let eventList = []
    tempEventsState.eventList.map((event) =>{
        let tmp = []
        tmp = event.members.filter(member => member.value.toLowerCase().includes(searchKeyword.toLocaleLowerCase()))
        console.log('tmp:', tmp.length)
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
