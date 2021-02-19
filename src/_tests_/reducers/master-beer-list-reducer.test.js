import masterBeerList from './../../Reducers/master-beer-list-reducer';

describe('master beer list reducer', () => {

let action;
const newBeer = {
  name: "Czech Pilsner",
  brand: "Buoy",
  price: 4.99,
  ABV: 6.2,
  quantity: 9,
  id: 0
}

  it('will return default value of empty object if action type is null', () => {
    expect(masterBeerList({}, {type:null})).toEqual({});
  })

  it('', ()=>{
    const {name, brand, price, ABV, quantity, id} = newBeer;
    action = {
      type: 'ADD_BEER',
      name: name,
      brand: brand, 
      price: price,
      ABV: ABV,
      quantity: quantity, 
      id: id
    }
    expect(masterBeerList({}, action)).toEqual({
      type: 'ADD_BEER',
      name: name,
      brand: brand, 
      price: price,
      ABV: ABV,
      quantity: quantity, 
      id: id
    })
  })
})