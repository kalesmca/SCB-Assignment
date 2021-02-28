import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  globalFilter,
  clearFilter,
  onChangeSearch,
} from "../redux/actions/filter";

import MemberList from "./memberList";
import EventList from "./eventList";
import "./global.css";

export default function Root() {
  const [searchKey, setSearchKey] = useState("");
  const applicationState = useSelector((state) => state);
  const dispatch = useDispatch();
  const search = () => {
    dispatch(globalFilter(applicationState, searchKey));
  };
  const cancelFilter = () => {
    dispatch(clearFilter(applicationState));
    setSearchKey("");
  };
  return (
    <div className="container">
      <div className="search">
        <input
          type="text"
          value={applicationState.globalFilter.searchKey}
          placeholder="Search.."
          name="search2"
          onChange={(e) => {
            dispatch(onChangeSearch(applicationState, e.target.value));
          }}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </div>
      <MemberList />
      <EventList />
    </div>
  );
}
