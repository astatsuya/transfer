import { combineReducers } from 'redux';
import {
  ADD_INFO, SORT_TABLE, UPDATE_FORM, CLEAR_FORM, ALERT_FORM,
} from '../actions/action';

const initialState = {
  formContents:
    {
      id: 4,
      name: '',
      age: 30,
      arrival: 2010,
      leave: 2010,
      gender: 'Male',
      department: 'Marketing',
      position: 'Director',
      location: 'Tokyo',
      nameEmpty: '',
      nameAlertColor: '',
      wrongArrival: '',
      arrivalAlertColor: '',
    },
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

const updateForm = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      return {
        ...state,
        formContents: {
          ...state.formContents,
          [action.object]: action.value,
        },
      };
    case ALERT_FORM:
      return {
        ...state,
        formContents: {
          ...state.formContents,
          nameEmpty: action.nameEmpty,
          nameAlertColor: action.nameAlertColor,
          wrongArrival: action.wrongArrival,
          arrivalAlertColor: action.arrivalAlertColor,
        },
      };
    case CLEAR_FORM:
      return {
        ...state,
        formContents: {
          ...state.formContents,
          name: '',
          age: 30,
          arrival: 2010,
          leave: 2010,
          gender: 'Male',
          department: 'Marketing',
          position: 'Director',
          location: 'Tokyo',
          nameEmpty: '',
          nameAlertColor: '',
          wrongArrival: '',
          arrivalAlertColor: '',
        },
      };
    default:
      return state;
  }
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


// const clearForm = (state = initialState, action) => {
//   switch (action.type) {
//     case CLEAR_FORM:
//       return {
//         ...state,
//         formContents: {
//           ...state.formContents,
//           name: '',
//           age: 30,
//           arrival: 2010,
//           leave: 2010,
//           gender: 'Male',
//           department: 'Marketing',
//           position: 'Director',
//           location: 'Tokyo',
//           nameEmpty: '',
//           nameAlertColor: '',
//           wrongArrival: '',
//           arrivalAlertColor: '',
//         },
//       };
//     default:
//       return state;
//   }
// };

const rootReducer = combineReducers({
  addInfo,
  updateForm,
  sortTable,
});

export default rootReducer;
