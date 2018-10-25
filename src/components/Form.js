import React from 'react';
import { connect } from 'react-redux';
import { addInfo } from '../redux/actions/action';

const mapDispatchToProps = dispatch => {
  return {
    addInfo: info => dispatch(addInfo(info)),
  };
};

class ConnectedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 30,
      arrival: 2010,
      leave: 2010,
      gender: 'Male',
      department: 'Marketing',
      position: 'Director',
      location: 'Tokyo',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      name, age, gender, department, position, arrival, leave, location
    } = this.state;

    if(name === "") {
      alert('You must input your name!!');
    } else if(arrival > leave) {
      alert('Arrival should be earlier than Leaving');
    } else {
      this.props.addInfo({
        name, age, gender, department, position, arrival, leave, location
      });
      this.setState({
        name: '',
        age: 30,
        arrival: 2010,
        leave: 2010,
        gender: 'Male',
        department: 'Marketing',
        position: 'Director',
        location: 'Tokyo',
      });
    }
  }

  handleClear(event) {
    event.preventDefault();
      this.setState({
        name: '',
        age: 30,
        arrival: 2010,
        leave: 2010,
        gender: 'Male',
        department: 'Marketing',
        position: 'Director',
        location: 'Tokyo',
    });
  }

  render() {
    const {
      name, age, gender, department, position, arrival, leave, location
    } = this.state;

    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <br />

        <label>
          Age
        </label>
        <br />
        <input
          type="number"
          name="age"
          value={age}
          onChange={this.handleChange}
        />
        <br />

        <label>
          Gender
        </label>
        <br />
        <select name="gender" onChange={this.handleChange} value={gender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Others">Others</option>
        </select>
        <br />

        <label>
          Department
        </label>
        <br />
        <select name="department" onChange={this.handleChange} value={department}>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Others">Others</option>
        </select>
        <br />

        <label>
          Position
        </label>
        <br />
        <select name="position" onChange={this.handleChange} value={position}>
          <option value="Director">Director</option>
          <option value="Manager">Manager</option>
          <option value="Chief">Chief</option>
          <option value="Others">Others</option>
        </select>
        <br />

        <label>
          Arrival
        </label>
        <br />
        <input
          type="number"
          name="arrival"
          value={arrival}
          onChange={this.handleChange}
        />
        <br />

        <label>
          Leaving
        </label>
        <br />
        <input
          type="number"
          name="leave"
          value={leave}
          onChange={this.handleChange}
        />
        <br />

        <label>
          Location
        </label>
        <br />
        <select name="location" onChange={this.handleChange} value={location}>
          <option value="Tokyo">Tokyo</option>
          <option value="Osaka">Osaka</option>
          <option value="OverSeas">OverSeas</option>
          <option value="Others">Others</option>
        </select>
        <br />

        <button type="submit" value="Send">
          submit
        </button>
        <button onClick={this.handleClear}>
          Reset
        </button>
      </form>
    );
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
