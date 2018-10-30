import { ADD_INFO, SORT_NAME, FILTER_STATE } from '../actions/action';

const initialState = {
  columns: ['Name', 'Age', 'Gender', 'Department', 'Position', 'Arrival', 'Leave', 'location'],
  // id: [0],
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
      name: 'Ja2',
      age: 33,
      gender: 'Male',
      department: 'Marketing',
      position: 'Chief',
      arrival: 2013,
      leave: 2019,
      location: 'Osaka',
    },
    {
      name: 'Ij3',
      age: 45,
      gender: 'Female',
      department: 'Engineering',
      position: 'Others',
      arrival: 2015,
      leave: 2020,
      location: 'OverSeas',
    },
    {
      name: 'ej3',
      age: 45,
      gender: 'Others',
      department: 'Others',
      position: 'Director',
      arrival: 2015,
      leave: 2022,
      location: 'Others',
    },
  ],
  filter: 'all'
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INFO:
      return {
        ...state,
        // id: [
        //   ...state.id,
        //   action.id,
        // ],
        info: [
          ...state.info,
          action.info,
        ],
      };
    // case FILTER_STATE:
    //   switch(action.filter) {
    //     case 'all':
    //       return state;
    //     case 'Marketing':
    //       return Object.assign({}, state, {
    //         info: state.info.filter(value => {
    //           return value.department === 'Marketing'
    //         }),
    //         filter: action.filter
    //       })
    //     case 'Engineering':
    //       return Object.assign({}, state, {
    //         info: state.info.filter(value => {
    //           return value.department === 'Engineering'
    //         }),
    //         filter: action.filter
    //       })
    //     case 'Others':
    //       return Object.assign({}, state, {
    //         info: state.info.filter(value => {
    //           return value.department === 'Others'
    //         }),
    //         filter: action.filter
    //       })
    //     default:
    //       return state;
    //   }
    // // case SORT_NAME:
    //   return {
    //     Object.assign({}, state, {
    //       info: state.name.slice(0).sort((a, b) => {
    //         let atoU = a.name.toUpperCase();
    //         let btoU = b.name.toUpperCase();
    //           return (atoU < btoU) ? -1 : 1;
    //           return 0;
    //       })
    //     });
    //   }


    default:
      return state;
  }
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

export default rootReducer;
