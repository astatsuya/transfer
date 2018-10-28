import { ADD_INFO } from '../actions/action';

const initialState = {
  columns: ['Name', 'Age', 'Gender', 'Department', 'Position', 'Arrival', 'Leave', 'location'],
  id: [0],
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


// const sort_object = (array, key, order, fn) => {
//   let num_a = -1;
//   let num_b = -1;
//
//   if(order === 'asc') {
//     num_a = 1;
//     num_b = -1;
//   }
//
//   array = array.sort((a,b) => {
//     let x = a[key];
//     let y = b[key];
//     if (x > y) return num_a;
//     if (x < y) return num_b;
//     return 0;
//   })
//
//   fn(array);
// }

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        id: [
          ...state.id,
          action.id,
        ],
        info: [
          ...state.info,
          action.info,
        ],
      };
    // case SORT_NAME:
    //   return sort_object(state.info, 'name', 'asc', function(new_data){
    //     return new_data
    //   });
    default:
      return state;
  }
};

export default rootReducer;
