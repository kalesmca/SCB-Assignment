import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {globalFilter} from '../redux/actions/filter';

import MemberList from './memberList';
import EventList from './eventList';


export default function Root (){
    const [searchKey, setSearchKey] = useState('')
    const applicationState = useSelector((state) => state);
    const dispatch = useDispatch()
    const search = () => {
        console.log('searchKey', searchKey)
        dispatch(globalFilter(applicationState, searchKey))
    }
    return(
        <div>
        <div >
          <input type="text" placeholder="Search.." name="search2" onChange={(e)=>{setSearchKey(e.target.value)}}/>
          <button type="submit" onClick={()=>{search()}}><i class="fa fa-search"></i></button>
          <button>x</button>
        </div>
        <MemberList />
        <EventList />
        </div>

    )

}