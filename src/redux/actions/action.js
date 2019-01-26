export const UPDATE_FORM = 'AUPDATE_FORM';
export const ADD_INFO = 'ADD_INFO';
export const SORT_TABLE = 'SORT_TABLE';
export const CLEAR_FORM = 'CLEAR_FORM';

export const updateForm = form => ({
  type: UPDATE_FORM,
  object: form.name,
  value: form.value,
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

export const clearForm = () => ({
  type: CLEAR_FORM,
});
