import { ADD_INFO, SORT_NAME } from '../actions/action';

const initialState = {
  columns: ['Name', 'Age', 'Gender', 'Department', 'Position', 'Arrival', 'Leave', 'location'],
  info: [
    {
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

const rootReducer = (state = initialState, action) => {
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

export default rootReducer;
