import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){
  return(
    <React.Fragment>
      <div onClick={() => props.whenBeerClicked(props.id)} className="beerCard">
        <h3>{props.name}</h3>
        <h4>${props.price} Per Pint</h4>
      </div>
    </React.Fragment>
  );
}

Beer.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  ABV: PropTypes.number,
  quantity: PropTypes.number
}
export default Beer;