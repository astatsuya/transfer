export const ADD_INFO = 'ADD_INFO';
export const SORT_TABLE = 'SORT_TABLE';

export const addInfo = info => ({
  type: ADD_INFO,
  info,
});

export const sortTable = sortCase => ({
  type: SORT_TABLE,
  sortCase,
});
