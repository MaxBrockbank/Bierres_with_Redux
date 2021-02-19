import * as c from './ActionTypes';

export const addBeer = (beer) => {
  const { name, brand, price, ABV, quantity, id } = beer;
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    price: price,
    ABV: ABV,
    quantity: quantity,
    id: id
  };
}

export const deleteBeer = (id) => {
  return{
    type: c.DELETE_BEER,
    id
  };
}

export const addSelect = (beer) => {
  const { name, brand, price, ABV, quantity, id } = beer;
  return {
    type: c.ADD_SELECT,
    name: name,
    brand: brand,
    price: price,
    ABV: ABV,
    quantity: quantity,
    id: id
  };
}

export const clearSelect = () => {
  return{
    type: c.CLEAR_SELECT
  };
}

export const toggleEdit = () => {
  return {
    type: c.TOGGLE_EDIT
  };
}

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM
  };
}