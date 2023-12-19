import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }

  //  LIST ALL ITEMS
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //  LIST ALL DATA BASED ON USERTYPE
  filterByUserType = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // FILTER ALL DATA STARTING WITH THE LETTER `J`
  filterByLetterJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  // FILTER DATA BASED ON AGE
  filterByAge = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.age > 28 && item.age <= 50);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };

  //FIND THE TOTAL EXPERIENCE OF THE DESIGNERS
  totalExperienceOfDesigners = () => {
    const data = this.state.userData;
    const designersData = data.filter((item) => item.user_type === 'Designer');
    const totalExperience = designersData.reduce((acc, item) => acc + item.years, 0);
    return <p>Total Experience of Designers: {totalExperience} years</p>;
  };

  render() {
    return (
      <React.Fragment>
        {/* LIST ALL ITEMS */}
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        {/* LIST ALL DATA BASED ON USERTYPE */}
        <h1>List all data based on UserType</h1>
        <div className="display-box">
          <ul>{this.filterByUserType('Designer')}</ul>
        </div>

        {/*FILTER ALL DATA STARTING WITH THE LETTER `J` */}
        <h1>Filter all data starting with the letter 'J'</h1>
        <div className="display-box">
          <ul>{this.filterByLetterJ()}</ul>
        </div>

        {/*FILTER DATA BASED ON AGE */}
        <h1>Filter data based on age</h1>
        <div className="display-box">
          <ul>{this.filterByAge()}</ul>
        </div>

        {/*FIND THE TOTAL EXPERIENCE OF THE DESIGNERS */}
        {this.totalExperienceOfDesigners()}
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
