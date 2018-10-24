import { ADD_INFO } from '../actions/action';

const initialState = {
  info: [
    {
      name: 'Tom',
      age: 42,
      department: 'Marketing',
      position: 'Manager',
      join: 2015,
      leave: 2017,
      branch: 'Tokyo',
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
