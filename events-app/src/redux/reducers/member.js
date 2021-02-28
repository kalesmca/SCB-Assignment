import MOCK_MEMBERS from "../../data/MEMBERS_MOCK.json";
import {
  SORTING_MEMBERS,
  DELETE_MEMBER,
  UPDATE_MEMBERS,
  DEFAULT_VALUE
} from "../../constants";

const initialState = {
  memberList: MOCK_MEMBERS,
  headerList: [
    { fieldName: "Name", key: "name", sortingType: "all" },
    { fieldName: "Phone", key: "phone" },
    { fieldName: "Age", key: "age", sortingType: "all" },
    { fieldName: "E-mail", key: "email" },
    { fieldName: "Company ", key: "company" },
  ],
};

const memberReducer = (state = initialState, action) => {
  console.log("Members Reducer :", state, action);
  switch (action.type) {
    case DELETE_MEMBER:
      return { ...state, ...action.tempMemberState };
    case SORTING_MEMBERS:
      return { ...state, ...action.tempMemberState };
    case UPDATE_MEMBERS:
      return { ...state, ...action.tempMemberState };
    
    default:
      return { ...state };
  }
};
export default memberReducer;
