import React, { Component } from 'react'; // importing / destructuring
import CardList from '../components/CardList'; // importing files
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      robots: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // getting the users from external api
    .then(response => response.json())
    .then(users => {this.setState({ robots: users})})
  }

  // every time the input changes, we get an event
  onSearchChange = (event) => { 
    // change the value of the searchField in the SearchBox Component
    this.setState({ searchField: event.target.value });
  }

  render() {
    const { robots, searchField } = this.state; // use destructuring so you dont have to repeat this.state befor erobots or searchField
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase()); // does a comparison to find is the name of a robot includes whats in the search field..only return the robots that returns true to this. 
    })

    return !robots.length ? 
    // if(robots.length === 0) {
      <h1>Loading</h1> :
    // } else {
      (
        // must use this.onSearchChange because searchField is in App constructor which is an object
        // instead of < CardList robots={this.state.robots} / > under the search box use
        <div className="tc"> 
          <h1 className="f2">RoboFriends</h1>
            
          <SearchBox searchChange={this.onSearchChange} /> 
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;