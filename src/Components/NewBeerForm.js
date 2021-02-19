import React from 'react';
import ReusableForm from './ResuseableForm';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import './../App.css';

function NewBeerForm(props){

  function handleNewBeerFormSubmission(event){
    event.preventDefault();
    props.onNewBeerCreation({name: event.target.name.value, brand: event.target.brand.value, price: parseFloat(event.target.price.value), ABV: parseFloat(event.target.ABV.value), quantity: parseInt(event.target.quantity.value), id: v4()})
  }
  return(
    <React.Fragment>
      <form onSubmit={handleNewBeerFormSubmission} className="formMatt">
        <input type='text' name='name' placeholder='Beer Name'/>
        <input type='text' name='brand' placeholder='Beer Brand'/>
        <input type='number' name='price' placeholder='Price Per Pint'/>
        <input type='number' name='ABV' placeholder='ABV %'/>
        <input type='number' name='quantity' placeholder='Pints In Stock'/>
        <button type='submit' className="btn btn-dark">Add new beer</button>
      </form>
    </React.Fragment>
  );
}

NewBeerForm.propTypes = {
  onNewBeerCreation: PropTypes.func
}

export default NewBeerForm;