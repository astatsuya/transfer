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
