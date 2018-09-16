import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { company: [], teste: [] };

  componentDidMount() {
    this.listCompanies()
      .then(res => res.json())
      .then(company => this.setState({ company }))
      .catch(err => console.log(err));
  }

  listCompanies = async () => {
    const response = await fetch('/company/listcompanies');
    return response;
  };

  updatecompany = async () => {
    const response = await fetch('/company/update/');
    return response;
  }

  render() {
    return (
      <div className="App">
        <h1>Poob Info</h1>
        <div >
          <h4>Companies name</h4>
          {this.state.company.map(company =>
            <div key={company.id}>{company.companyID},{company.name},{company.createDate}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;