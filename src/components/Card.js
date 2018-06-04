import React from 'react';

const Card = ({ name, email, id }) => { // destructure
  // const { name, email, id } = props You can do this, but the above is cleaner
  return (
    <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc">
      <img src = {`https://robohash.org/${id}?200x200`} alt = "photo" / >
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;