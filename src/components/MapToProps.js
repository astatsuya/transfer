import {
  addInfo,
  updateForm,
  clearForm,
  alertForm,
  sortTable,
  changeForm,
} from '../redux/actions/action';

export const sortTableState = (state, sortBy) => {
  switch (sortBy.sortCase) {
    case 'ID':
      if (sortBy.order === 'asc') {
        return state.sort((a, b) => a.id - b.id);
      }
      return state.sort((a, b) => b.id - a.id);
    case 'Name':
      return state.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();
        if (sortBy.order === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (sortBy.order === 'desc') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    case 'Age':
      if (sortBy.order === 'asc') {
        return state.sort((a, b) => a.age - b.age);
      }
      return state.sort((a, b) => b.age - a.age);
    case 'Gender':
      return state.sort((a, b) => {
        const nameA = a.gender.toUpperCase();
        const nameB = b.gender.toUpperCase();
        if (sortBy.order === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (sortBy.order === 'desc') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    case 'Department':
      return state.sort((a, b) => {
        const nameA = a.department.toUpperCase();
        const nameB = b.department.toUpperCase();
        if (sortBy.order === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (sortBy.order === 'desc') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    case 'Position':
      return state.sort((a, b) => {
        const nameA = a.position.toUpperCase();
        const nameB = b.position.toUpperCase();
        if (sortBy.order === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (sortBy.order === 'desc') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    case 'Arrival':
      if (sortBy.order === 'asc') {
        return state.sort((a, b) => a.arrival - b.arrival);
      }
      return state.sort((a, b) => b.arrival - a.arrival);
    case 'Leave':
      if (sortBy.order === 'asc') {
        return state.sort((a, b) => a.leave - b.leave);
      }
      return state.sort((a, b) => b.leave - a.leave);
    case 'Location':
      return state.sort((a, b) => {
        const nameA = a.location.toUpperCase();
        const nameB = b.location.toUpperCase();
        if (sortBy.order === 'asc') {
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }
        if (sortBy.order === 'desc') {
          if (nameA > nameB) {
            return -1;
          }
          if (nameA < nameB) {
            return 1;
          }
          return 0;
        }
        return 0;
      });
    default:
      return state;
  }
};

export const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
  updateForm: form => dispatch(updateForm(form)),
  alertForm: form => dispatch(alertForm(form)),
  clearForm: () => dispatch(clearForm()),
  sortTable: (sortCase, order) => dispatch(sortTable(sortCase, order)),
  changeForm: form => dispatch(changeForm(form)),
});

export const mapStateToProps = state => ({
  formContents: state.updateForm.formContents,
  columns: state.addInfo.columns,
  searchForm: state.searchForm.searchForm,
  sortedInfo: sortTableState(state.addInfo.info, state.sortTable),
  info: state.addInfo.info,
  state,
});

export const formTypes = () => {
  const PropTypes = 'PropTypes';
  return (
    {
      age: PropTypes.number,
      arrival: PropTypes.number,
      arrivalAlertColor: PropTypes.string,
      department: PropTypes.string,
      gender: PropTypes.string,
      id: PropTypes.number,
      leave: PropTypes.number,
      location: PropTypes.string,
      name: PropTypes.string,
      nameAlertColor: PropTypes.string,
      nameEmpty: PropTypes.string,
      position: PropTypes.string,
      wrongArrival: PropTypes.string,
    });
};
