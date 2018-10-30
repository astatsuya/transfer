export const ADD_INFO = 'ADD_INFO';
export const SORT_NAME = 'SORT_NAME';
export const FILTER_STATE = 'FILTER_STATE';


let nextId = 1;

export const addInfo = info => ({
  type: ADD_INFO,
  // id: nextId++,
  info: info,
});

export const changeFilter = filter => ({
  type: FILTER_STATE,
  filter: filter
});

export const sortName = () => ({
  type: SORT_NAME,

});


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
