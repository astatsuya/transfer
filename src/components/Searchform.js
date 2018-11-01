import React from 'react';
import Search from './Search';

  class SearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gender: 'all',
        department: 'all',
        position: 'all',
        location: 'all',
      };

      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      })
    }

    render() {
      const {
        gender, department, position, location
      } = this.state;

      return (
        <form className="searchform" onSubmit={this.handleSubmit}>
          <label>
            Gender:
          </label>
          <select name="gender" onChange={this.handleChange} value={gender}>
            <option value="all">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <label>
            Department:
          </label>
          <select name="department" onChange={this.handleChange} value={department}>
            <option value="all">All</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <label>
            Position:
          </label>
          <select name="position" onChange={this.handleChange} value={position}>
            <option value="all">All</option>
            <option value="Director">Director</option>
            <option value="Manager">Manager</option>
            <option value="Chief">Chief</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <label>
            Location:
          </label>
          <select name="location" onChange={this.handleChange} value={location}>
            <option value="all">All</option>
            <option value="Tokyo">Tokyo</option>
            <option value="Osaka">Osaka</option>
            <option value="OverSeas">OverSeas</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <br />
          <br />
          <Search
            gender={this.state.gender}
            department={this.state.department}
            position={this.state.position}
            location={this.state.location}
          />
          <br />
        </form>
      );
    }
  }

export default SearchForm;
