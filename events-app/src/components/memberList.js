import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {sortingMembers, deleteMember, AddEventsToMember} from '../redux/actions/member';
import MultiSelect from "react-multi-select-component";

import "./global.css";
import {MEMBER_TITLE} from '../constants'

const MemberList = () => {
  const dispatch = useDispatch()
  const applicationState = useSelector((state) => state);
  console.log("application state :", applicationState);
  const [memberState, setMemberState] = useState({
    ...applicationState.members,
  });
  let  options = []
  applicationState.events.eventList.map((event) =>{
    let tempObj = {
      label: event.eventName,
      value: event.eventName,
      id: event.id,
      disabled: event.isDisabled
    }
    options.push(tempObj)
  })
  
  console.log("members :", memberState, MEMBER_TITLE);

  const sorting = (index) => {
      console.log('testing');
      dispatch(sortingMembers(applicationState, index))

  }
  const deleteRow = (index) => {
      console.log('deleteRow :', index)
      dispatch(deleteMember(applicationState, index))
  }

  useEffect(()=>{
      console.log('useEE',applicationState)
  })

  const selectEvents = (value, index) => {
    console.log('value ::', value);
    console.log('memberState.memberList ::', memberState.memberList[index])
    let tmpObj = {...memberState};
    
    const newSelectedEvent = value.filter(({ value: id1 }) => !tmpObj.memberList[index].events.some(({ value: id2 }) => id2 === id1));

    
    console.log('newValue :', newSelectedEvent)
    dispatch(AddEventsToMember(applicationState, index, newSelectedEvent, value))
    debugger
    // tmpObj.memberList[index].events = value;
    // setMemberState(tmpObj)
  }

  return (
    <div>
      {" "}
      MemberList Rendered 
      <div>
        <table>
          <thead>
            <tr>
              {/* <th>one</th>
                            <th>dd</th> */}
              {memberState.headerList.map((header, headerIndex) => {
                return (
                  <th key={headerIndex}>
                    {header.fieldName} 
                    {header.sortingType &&
                      <span
                        onClick={(e) => {
                            sorting(headerIndex);
                        }}
                      >
                        {header.sortingType === 'asc' ? " 🔽" : " 🔼"}
                      </span>
                    }
                  </th>
                );
              })}
              <th>Events</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {memberState.memberList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {memberState.headerList.map((column, colmnId) => {
                    return <td key={colmnId}>{row[column.key]}</td>;
                  })}
                  <td><span><MultiSelect
                        options={options}
                        value={row.events}
                        onChange={(value) => {selectEvents(value, rowIndex)}}
                        labelledBy={"Select"}
                      /></span></td>
                  <td><span onClick={()=>{deleteRow(rowIndex)}}>Delete</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MemberList;
