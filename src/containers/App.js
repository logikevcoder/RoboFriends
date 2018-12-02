import React, { Component } from 'react'; // importing / destructuring
import { connect } from "react-redux";
import CardList from '../components/CardList'; // importing files
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import { setSearchField } from '../actions';

const mapStateToProps = state => {
  return {
    // searchField is returning state used as props by the App component
    searchField: state.searchField
  }
}

// what props to listen to that are actions that need dispatched
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  }
  
}
class App extends Component {
  constructor() {
    super();
    this.state = { 
      robots: []
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // getting the users from external api
    .then(response => response.json())
    .then(users => {this.setState({ robots: users})})
  }

  render() {
    const { robots } = this.state; 
    const { searchField, onSearchChange } = this.props; // now getting this from redux
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
            
          <SearchBox searchChange={onSearchChange} /> 
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

// tells app to listen for the state to listen to, and which dispatch(action) should I listen to
export default connect(mapStateToProps, mapDispatchToProps)(App);