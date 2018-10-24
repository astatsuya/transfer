import { ADD_INFO } from '../actions/action';

const initialState = {
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
