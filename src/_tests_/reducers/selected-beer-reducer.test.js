import selectedBeer from './../../Reducers/selected-beer-reducer';

describe('selected beer reducer', ()=>{

  let action;
  const newSelect = {
    name: "Classic Beer",
    brand: "Good Beer Co.",
    price: 10.99,
    ABV: 8.2,
    quantity: 124,
    id: 0
  }

  it('return default value of null when action type is not specified', ()=>{
    expect(selectedBeer(null, {type:null})).toEqual(null);
  })

  it('should return object of beer info when action type is NEW_SELECT', ()=>{
    const {name, brand, price, ABV, quantity, id} = newSelect;
    action ={
      type:'NEW_SELECT',
      name: name,
      brand: brand,
      price: price,
      ABV:ABV,
      quantity:quantity,
      id:id
    }
    expect(selectedBeer(null, action)).toEqual({
      name: name,
      brand: brand,
      price: price,
      ABV:ABV,
      quantity:quantity,
      id:id
    })
  })

  it('should clear the selected beer of an object and reset to null if action type is CLEAR_SELECT', ()=> {
    const {name, brand, price, ABV, quantity, id} = newSelect;
    const currentState = {
      name: name,
      brand: brand,
      price: price,
      ABV:ABV,
      quantity:quantity,
      id:id
    }
    action = {
      type: 'CLEAR_SELECT'
    }
    expect(selectedBeer(currentState, action)).toEqual(null)
  })
})