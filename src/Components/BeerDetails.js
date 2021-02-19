import React from 'react';
import PropTypes from 'prop-types';
import * as $ from 'jquery';
import './../App.css';
import { Row, Col } from 'react-bootstrap';

function BeerDetails(props){
  const { beer } = props;

  function stockMessage(num){
    if(num > 0 && num < 10){
      return <h3>Only {num} left</h3>
    } else if (num < 1){
      return <h3>Out of stock</h3>
    }
  }
  function checkquanity (num) {
    if(num > 0 && num < 124){
      return(
      <React.Fragment>
        <Row className="rowStyle">
          <Col><input type="number" name="restock" id="restock" placeholder="restock amount"/></Col>
          <Col><button onClick={()=>props.onRestocking(beer.id, parseInt($("#restock").val()))} className="btn btn-dark editBut">Restock</button></Col>
        </Row>
        <button onClick={()=>props.onBuying(beer.id)} className="btn btn-dark editBut">Buy Beer</button>
      </React.Fragment>
      )
    } else if(num > 0){
      return <button onClick={()=>props.onBuying(beer.id)} className="btn btn-dark editBut">Buy Beer</button>
    } else if(num < 124){
      return(
      <React.Fragment>
        <Row className="rowStyle">
          <Col><input type="number" name="restock" id="restock" placeholder="restock amount"/></Col>
          <Col><button onClick={()=>props.onRestocking(beer.id, parseInt($("#restock").val()))} className="btn btn-dark editBut">Restock</button></Col>
        </Row>
      </React.Fragment>
      );
    }
  }
  const messages = stockMessage(beer.quantity);
  const stockElements = checkquanity(beer.quantity);
  return(
    <React.Fragment>
        <div className="detailsComp">
          <Row>
            <Col>Brand</Col>
            <Col>Name:</Col>
          </Row>
          <Row>
            <Col><h3>{beer.brand}</h3></Col>
            <Col><h3>{beer.name}</h3></Col>
          </Row>
          <Row>
            <Col>Price:</Col>
            <Col>ABV:</Col>
          </Row>
          <Row>
            <Col><h4>${beer.price} Per Pint</h4></Col>
            <Col><h4>{beer.ABV}%</h4></Col>
          </Row>
          <i className="redText">{messages}</i>
          <br/>
          {stockElements}
          <button onClick={props.onClickingEdit} className="btn btn-warning editBut">Edit this Beer</button>
          <button onClick ={() => props.onClickingDelete(beer.id)} className="btn btn-danger editBut">Delete this beer</button>
        </div>
    </React.Fragment>
  );
}

BeerDetails.propTypes = {
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onRestocking: PropTypes.func,
  onBuying: PropTypes.func
}
export default BeerDetails;