export const ADD_INFO = 'ADD_INFO';

let nextId = 1;

export const addInfo = info => ({
  type: ADD_INFO,
  id: nextId++,
  info: info,
});
