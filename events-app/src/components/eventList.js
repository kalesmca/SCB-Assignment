import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../redux/actions/event";
import "./global.css";
import { MEMBER_TITLE } from "../constants";

const EventList = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  console.log("application state Event :", applicationState);
  const [eventState, setEventState] = useState({
    ...applicationState.events,
  });
  const [membersState, setMemberState] = useState({
    ...applicationState.members,
  });
  console.log("Events :", MEMBER_TITLE);

  const deleteRow = (index) => {
    console.log("deleteRow :", index);
    dispatch(deleteEvent(applicationState, membersState, index));
  };

  const dropDownChange = (value) => {
    console.log("value::", value);
  };

  useEffect(() => {
    console.log("membersState.memberList : use::");
  });

  return (
    <div>
      {" "}
      Event List Rendered
      <div>
        <div></div>
        <table>
          <thead>
            <tr>
              {eventState.headerList.map((header, headerIndex) => {
                return <th key={headerIndex}>{header.fieldName}</th>;
              })}
              <th>Members</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {eventState.eventList.map((row, rowIndex) => {
              return (
                <tr key={rowIndex}>
                  {eventState.headerList.map((column, colmnId) => {
                    return <td key={colmnId}>{row[column.key]}</td>;
                  })}
                  <td>
                    {
                      row.members && row.members.length && row.members.map((member, memberIndex) => {
                        return (<span> <span>{member.value}</span> {row.members.length != memberIndex+1 && <span>, </span>} </span>)
                      }) 
                    }
                    
                  </td>
                  <td>
                    <span
                      onClick={() => {
                        deleteRow(rowIndex);
                      }}
                    >
                      Delete
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;
