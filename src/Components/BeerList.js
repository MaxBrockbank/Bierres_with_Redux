import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './../App.css';
import { v4 } from 'uuid';

function BeerList(props){

  function _createBeerGrid() {
    let rows = {};
    let counter = 1;
    Object.values(props.beerList).forEach((beer, index) => {
      rows[counter] = rows[counter] ? [...rows[counter]] : [];
      if(index % 4 === 0 && index !== 0){
        counter ++
        rows[counter] = rows[counter] ? [...rows[counter]] : [];
        rows[counter].push(beer);
      } else {
        rows[counter].push(beer);
      }
    });
    return rows;
  }
  let rows = _createBeerGrid();
  return(
    <React.Fragment>
      {Object.keys(rows).map(row => {
        return(
          <Row className="items_row" key={row} xl={4} lg={4} md={4} sm={2} xs={2}>
            {rows[row].map(beer => {
              return(
                <Col key={v4()}>
                  <Beer 
                  whenBeerClicked = {props.onBeerSelection}
                  name={beer.name} 
                  brand={beer.brand} 
                  price={parseFloat(beer.price)} 
                  ABV={parseInt(beer.ABV)} 
                  quantity={parseInt(beer.quantity)} 
                  id={beer.id} 
                  key={beer.id}/>
                </Col>
              )
            })}
          </Row>
        )
      })}
    </React.Fragment>
  );
}

BeerList.propTypes = {
  beerList: PropTypes.array,
  onBeerSelection: PropTypes.func
}

export default BeerList;