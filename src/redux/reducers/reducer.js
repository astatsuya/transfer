import { combineReducers } from 'redux';
import { ADD_INFO, SORT_TABLE } from '../actions/action';

const initialState = {
  columns: ['ID', 'Name', 'Age', 'Gender', 'Department', 'Position', 'Arrival', 'Leave', 'Location'],
  info: [
    {
      id: 0,
      name: 'Tom',
      age: 42,
      gender: 'Male',
      department: 'Marketing',
      position: 'Manager',
      arrival: 2015,
      leave: 2017,
      location: 'Tokyo',
    },
    {
      id: 1,
      name: 'Bob',
      age: 33,
      gender: 'Male',
      department: 'Marketing',
      position: 'Chief',
      arrival: 2013,
      leave: 2019,
      location: 'Osaka',
    },
    {
      id: 2,
      name: 'Josephine',
      age: 45,
      gender: 'Female',
      department: 'Engineering',
      position: 'Others',
      arrival: 2015,
      leave: 2020,
      location: 'OverSeas',
    },
    {
      id: 3,
      name: 'Linda',
      age: 49,
      gender: 'Others',
      department: 'Others',
      position: 'Director',
      arrival: 2015,
      leave: 2022,
      location: 'Others',
    },
    {
      id: 4,
      name: 'Taro',
      age: 22,
      gender: 'Others',
      department: 'Engineering',
      position: 'Others',
      arrival: 2018,
      leave: 2029,
      location: 'Osaka',
    },
  ],
};

const addInfo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        info: [
          ...state.info,
          action.info,
        ],
      };
    default:
      return state;
  }
};

const sortTable = (state = { sortCase: 'ID', order: 'asc' }, action) => {
  switch (action.type) {
    case SORT_TABLE:
      return {
        ...state.sortTable,
        sortCase: action.sortCase,
        order: action.order,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  addInfo,
  sortTable,
});

export default rootReducer;
