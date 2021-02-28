import memberReducer from './member';
import eventReducer from './evets';
import filterReducer from './filter';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    events: eventReducer,
    members: memberReducer,
    globalFilter: filterReducer
})

export default rootReducer;