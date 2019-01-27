import {
  addInfo,
  updateForm,
  clearForm,
  alertForm,
} from '../redux/actions/action';


export const mapDispatchToProps = dispatch => ({
  addInfo: info => dispatch(addInfo(info)),
  updateForm: form => dispatch(updateForm(form)),
  alertForm: form => dispatch(alertForm(form)),
  clearForm: () => dispatch(clearForm()),
});

export const mapStateToProps = state => ({
  formContents: state.updateForm.formContents,
});

const PropTypes = 'PropTypes';

export const formTypes = () => ({
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
