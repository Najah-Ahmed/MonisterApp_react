import React, { Component } from 'react';
import CardList from './components/CardList';
import Search from './components/Search';
//!import {CardList} from './components/CardList';--->When u sed componenet extention by .jsx

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      seaarchField: ''
    };
    // this.handeleChange = this.handeleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handeleChange = (e) => {
    this.setState({ seaarchField: e.target.value });
  };
  render() {
    const { monsters, seaarchField } = this.state;
    const filtersMosters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(seaarchField.toLowerCase())
    );
    return (
      <div className='App'>
        <h1>Mosters Rolodex</h1>
        <Search
          placeholder='search Mosters'
          handeleChange={this.handeleChange}
        />
        <CardList monsters={filtersMosters}></CardList>
      </div>
    );
  }
}

export default App;
