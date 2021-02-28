import React, { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  sortingMembers,
  deleteMember,
  AddEventsToMember,
} from "../redux/actions/member";
import MultiSelect from "react-multi-select-component";

import "./global.css";

const MemberList = () => {
  const dispatch = useDispatch();
  const applicationState = useSelector((state) => state);
  const [memberState, setMemberState] = useState({
    ...applicationState.members,
  });
  let options = [];
  applicationState.events.eventList.map((event) => {
    let tempObj = {
      label: event.eventName,
      value: event.eventName,
      id: event.id,
      disabled: event.isDisabled,
    };
    options.push(tempObj);
  });

  const sorting = (index) => {
    dispatch(sortingMembers(applicationState, index));
  };
  const deleteRow = (index) => {
    dispatch(deleteMember(applicationState, index));
  };

  const selectEvents = (value, index) => {
    let tmpObj = { ...memberState };
    const newSelectedEvent = value.filter(
      ({ value: id1 }) =>
        !tmpObj.memberList[index].events.some(({ value: id2 }) => id2 === id1)
    );

    dispatch(
      AddEventsToMember(applicationState, index, newSelectedEvent, value)
    );
  };

  return (
    <div className="container">
      {" "}
      <span className="mem-tit">Member List</span>
      <div>
        <table>
          <thead>
            <tr>
              {memberState.headerList.map((header, headerIndex) => {
                return (
                  <th key={headerIndex}>
                    {header.fieldName}
                    {header.sortingType && (
                      <span
                        onClick={(e) => {
                          sorting(headerIndex);
                        }}
                      >
                        {header.sortingType === "asc" ? " 🔽" : " 🔼"}
                      </span>
                    )}
                  </th>
                );
              })}
              <th>Events</th>
              <th>Action</th>
            </tr>
          </thead>
          {!applicationState.globalFilter.isFilterApplied && (
            <tbody>
              {memberState.memberList.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {memberState.headerList.map((column, colmnId) => {
                      return <td key={colmnId}>{row[column.key]}</td>;
                    })}
                    <td>
                      <span>
                        <MultiSelect
                          options={options}
                          value={row.events}
                          onChange={(value) => {
                            selectEvents(value, rowIndex);
                          }}
                          labelledBy={"Select"}
                        />
                      </span>
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
          )}
          {applicationState.globalFilter.isFilterApplied && (
            <tbody>
              {applicationState.globalFilter.memberList.map((row, rowIndex) => {
                return (
                  <tr key={rowIndex}>
                    {memberState.headerList.map((column, colmnId) => {
                      return <td key={colmnId}>{row[column.key]}</td>;
                    })}
                    <td>
                      <span>
                        <MultiSelect
                          options={options}
                          value={row.events}
                          onChange={(value) => {
                            selectEvents(value, rowIndex);
                          }}
                          labelledBy={"Select"}
                        />
                      </span>
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
          )}
        </table>
      </div>
    </div>
  );
};

export default memo(MemberList);
