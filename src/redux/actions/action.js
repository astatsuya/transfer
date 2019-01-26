export const UPDATE_FORM = 'AUPDATE_FORM';
export const ADD_INFO = 'ADD_INFO';
export const SORT_TABLE = 'SORT_TABLE';

export const updateForm = form => ({
  type: UPDATE_FORM,
  form,
});

export const addInfo = info => ({
  type: ADD_INFO,
  info,
});

export const sortTable = (sortCase, order) => ({
  type: SORT_TABLE,
  sortCase,
  order,
});
