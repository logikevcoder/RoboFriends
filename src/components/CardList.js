import React from 'react';
import Card from './Card';
// import { robots } from '../robots.js';  it is not a default export so it must be destructured. You can have as many variables or objects as needed in the robots.js file. { robots, cats } for example

const CardList = ({robots}) => {
  return (
    <div>
      {
        robots.map((user, i) => { // each map gets a user from the robots.js api 
          return (
              <Card
              // key prop allows js to identify each item and if one gets removed, it wont effect the rest of the items. Key should be something that doesn't change for example naming it i would be bad. 
              key = {i} 
              id = {robots[i].id} 
              name = {robots[i].name} 
              email = {robots[i].email}
              />
            );
          })
        }
      </div>
  );
}

export default CardList;