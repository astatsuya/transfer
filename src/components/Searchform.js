import React from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import { Test } from './Search';
import { changeFilter } from '../redux/actions/action';


const mapDispatchToProps = dispatch => {
  return {
    changeFilter: filter => dispatch(changeFilter(filter)),
  };
};

  class ConnectedSearchForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        filter: 'all',
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      // this.handleClear = this.handleClear.bind(this);
    }

    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      this.setState({
        [name]: value,
      })
      console.log(value)
      // const target = event.target;
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      // const name = target.name;
      // this.setState({
      //   [name]: value,
      // });
    }

    handleSubmit(event) {
      event.preventDefault();
      let { filter } = this.state;
      this.props.changeFilter({
        filter
      });
      console.log(filter)
    }

    // handleClear(event) {
    //   event.preventDefault();
    //     this.setState({
    //       name: '',
    //       age: 30,
    //       arrival: 2010,
    //       leave: 2010,
    //       gender: 'Male',
    //       department: 'Marketing',
    //       position: 'Director',
    //       location: 'Tokyo',
    //   });
    // }

    render() {
      const {
        filter
      } = this.state;



      return (
        <form className="form" onSubmit={this.handleSubmit}>
          <br />
          <label>
            Department
          </label>
          <br />
          <select name="filter" onChange={this.handleChange} value={filter}>
            <option value="all">All</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Others">Others</option>
          </select>
          <br />
          <br />
          <button>Search</button>
          <br />
          <Search filter={this.state.filter} />
          <br />
        </form>
      );
    }
  }

  const SearchForm = connect(null, mapDispatchToProps)(ConnectedSearchForm);

export default SearchForm;
