import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { globalFilter, clearFilter } from "../redux/actions/filter";

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
          value={searchKey}
          placeholder="Search.."
          name="search2"
          onChange={(e) => {
            setSearchKey(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            search();
          }}
        >
          <i class="fa fa-search"></i>
        </button>
        <button
          type="button"
          onClick={() => {
            cancelFilter();
          }}
        >
          x
        </button>
      </div>
      <MemberList />
      <EventList />
    </div>
  );
}
