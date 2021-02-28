import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions/event";
import "./global.css";

const EventList = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  const [eventState, setEventState] = useState({
    ...applicationState.events,
  });
  const [membersState, setMemberState] = useState({
    ...applicationState.members,
  });

  const deleteRow = (index) => {
    dispatch(deleteEvent(applicationState, membersState, index));
  };

  useEffect(() => {
    console.log("membersState.memberList : use::");
  });
  
  return (
    <div>
      {" "}
      <span className="eve-tit">Event List</span>
      
      <div>
        <div></div>
        <table>
          <thead>
            <tr>
              {eventState.headerList.map((header, headerIndex) => {
                return <th key={headerIndex}>{header.fieldName}</th>;
              })}
              <th>Members</th>
              
            </tr>
          </thead>
          
            <tbody>
              
                
              {eventState.eventList.map((row, rowIndex) => {
                  const data = row.members.filter(member => member.value.toLowerCase().includes(applicationState.globalFilter.searchKey.toLowerCase()))
                  if(!applicationState.globalFilter.searchKey || data.length) {
                    return (
                      <tr key={rowIndex}>
                        {eventState.headerList.map((column, colmnId) => {
                          return <td key={colmnId}>{row[column.key]}</td>;
                        })}
                        <td>
                          {row.members &&
                            row.members.length &&
                            row.members.map((member, memberIndex) => {
                              return (
                                <span>
                                  {" "}
                                  <span>{member.value}</span>{" "}
                                  {row.members.length != memberIndex + 1 && (
                                    <span>, </span>
                                  )}{" "}
                                </span>
                              );
                            })}
                        </td>
                        
                      </tr>
                    )
                  } 
                
              })}
              
              
            </tbody>
          

          {/* {applicationState.globalFilter.isFilterApplied && (
            <tbody>
              {applicationState.globalFilter.eventList.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {eventState.headerList.map((column, colmnId) => {
                      return <td key={colmnId}>{row[column.key]}</td>;
                    })}
                    <td>
                      {row.members &&
                        row.members.length &&
                        row.members.map((member, memberIndex) => {
                          return (
                            <span key={memberIndex}>
                              {" "}
                              <span>{member.value}</span>{" "}
                              {row.members.length != memberIndex + 1 && (
                                <span>, </span>
                              )}{" "}
                            </span>
                          );
                        })}
                    </td>
                    
                  </tr>
                );
              })}
            </tbody>
          )} */}
        </table>
      </div>
    </div>
  );
};

export default memo(EventList);
