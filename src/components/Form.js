import React from 'react';
import { connect } from 'react-redux';
import store from '../redux/store';
import { addInfo } from '../redux/actions/action';

const mapDispatchToProps = (dispatch) => {
  return {
    addInfo: info => dispatch(addInfo(info)),
  };
};

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleAgeChange(event) {
    this.setState({
      age: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, age } = this.state;
    this.props.addInfo({ name, age });
    store.getState();
    this.setState({
      name: '',
      age: '',
    });
  }

  render() {
    const { name, age } = this.state;
    console.log(name, age);

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="Name">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleNameChange}
            />
          </label>
          <label htmlFor="age">
            age:
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleAgeChange}
            />
          </label>
          <button type="submit" value="Send">
            submit
          </button>
        </form>
      </div>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
