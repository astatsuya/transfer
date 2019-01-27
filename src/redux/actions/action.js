export const UPDATE_FORM = 'AUPDATE_FORM';
export const ALERT_FORM = 'ALERT_FORM';
export const ADD_INFO = 'ADD_INFO';
export const SORT_TABLE = 'SORT_TABLE';
export const CLEAR_FORM = 'CLEAR_FORM';
export const CHANGE_FORM = 'CHANGE_FORM';

export const updateForm = form => ({
  type: UPDATE_FORM,
  object: form.name,
  value: form.value,
});

export const alertForm = form => ({
  type: ALERT_FORM,
  nameEmpty: form.nameEmpty,
  nameAlertColor: form.nameAlertColor,
  wrongArrival: form.wrongArrival,
  arrivalAlertColor: form.arrivalAlertColor,
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

export const changeForm = form => ({
  type: CHANGE_FORM,
  name: form.name,
  value: form.value,
});
