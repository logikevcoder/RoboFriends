import React, { Component } from 'react'; // importing / destructuring
import CardList from '../components/CardList'; // importing files
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component { // a component must always return something. WAS React.Component but short handing (see top) allows for this shortened version


  // App contains 2 state objects, robots and searchField
  // State is an object that describes the application and is able to change.
  // Props are simply things that come out of state. A parent tells the child what the state is, and it comes out as a property
  // smart component
  constructor() {
    super(); // to use this.state you need to call super() which is the constructor of component
    this.state = { 
      robots: [],
      searchField: ''
    }
  }
  
  // do not need arrow function because this is a part of react
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // getting the users from external api
    .then(response => response.json())
    .then(users => {this.setState({ robots: users})}) // updating the state of users with setState
  }
  // originally without the arrow function.. had to use es6 arrow functions to properly refer to the correct this statement in the App component here
  onSearchChange = (event) => { // every time the input changes, we get an event
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